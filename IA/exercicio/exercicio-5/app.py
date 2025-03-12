import google.generativeai as genai
import os
from flask import Flask, render_template
from user_data import get_user_history
from book_recommendations import (
    recommend_fiction,
    recommend_non_fiction,
    recommend_science
)
app = Flask(__name__)
# Configurar a chave de API
GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)
# Definir o modelo generativo com as funções disponíveis
magical_if = genai.GenerativeModel(
    "gemini-1.5-flash",
    tools=[
        recommend_fiction,
        recommend_non_fiction,
        recommend_science
    ]
)
def ia_decision(user_id, history):
    business_rules = """
    Analise o histórico de compras do usuário e decida qual categoria de livros recomendar.
    Regras:
    1. Se o usuário comprou mais livros de ficção, recomende ficção.
    2. Se o usuário comprou mais livros de não ficção, recomende não ficção.
    3. Se o usuário demonstrou interesse em ciência, recomende ciência.
    4. Caso contrário, ofereça uma recomendação geral de ficção.
    """
    # Inicia o chat com a IA
    user_decision = magical_if.start_chat(enable_automatic_function_calling=True)
    # Envia os dados e as regras de negócio para a IA
    response = user_decision.send_message(
        f"Histórico do usuário {user_id}: {history}; Regras de negócio: {business_rules}"
    )
    # Retorna a resposta da IA
    return response.text
# Página de recomendação para o usuário
@app.route('/recommend/<int:user_id>')
def recommend(user_id):
    history = get_user_history(user_id)
    if not history:
        return "Usuário não encontrado", 404
    ia_response = ia_decision(user_id, history)
    return render_template('recommendation.html', user_id=user_id, message=ia_response)
if __name__ == '__main__':
    app.run(debug=True)