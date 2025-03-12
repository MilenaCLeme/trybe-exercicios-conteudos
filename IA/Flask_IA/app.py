import google.generativeai as genai
import os
from flask import Flask, render_template, request
from database import get_user, list_users
from functions import oferecer_plano_anual, motivar_envio_fotos, atualizar_envio_fotos, oferecer_desconto_primeira_aula

app = Flask(__name__)

GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)
magical_if = genai.GenerativeModel("gemini-1.5-flash", generation_config={ "temperature": 0.5 },tools=[oferecer_plano_anual, motivar_envio_fotos, atualizar_envio_fotos, oferecer_desconto_primeira_aula])


def ia_decision(user):
    business_rules = """
        Atue como um personal trainer rigido que avalia com progmatismo a presença e o engajamento dos alunos.
        Quando você for acionada, deverá ler com critério e cuidado os dados de usuário e
        as regras de negócio. Em muitos casos, você deverá oferecer uma simples mensagem de
        encorajamento. Em outros, fará sentido chamar alguma de suas funções. Quando for o
        caso, chame a função correta e construa sua resposta a partir da mensagem que ela
        gerar.
        1. Para usuários que mostram consistência de longo prazo e uso constante do aplicativo, chamar a função
        de oferecer 20% de desconto no plano anual de personal trainer.
        2. Para usuários com baixo engajamento, chamar a função de motivar o envio de 5 fotos consecutivas na
        academia para receber 50% de desconto no primeiro treino com um personal.
        3. Se uma pessoa estiver em campanha de engajamento de envio de fotos, ela não tem consistência.
        4. Se um usuário estiver enviando fotos consecutivas, chamar a função de atualizar a quantidade
        de fotos enviadas. Zerar a contagem se o envio não for consecutivo.
        4. Se alguma resposta for exibida para o usuário, responda como se estivesse falando
        diretamente com ele.
        5. Se uma pessoa já recebeu desconto anual ela não deve receber nenhuma oferta.
        6. Se uma pessoa recebeu o desconto de primeira_aula ela pode receber o desconto anual.
        Lembre-se: manifeste apoio para pessoas com menos frequência, parabenize muita frequência e
        escolha de forma estratégica quem receberá cada desconto.

    """
    user_decision = magical_if.start_chat(enable_automatic_function_calling=True)
    response = user_decision.send_message(f"Dados do usuário: {user}; Regras de negócio: {business_rules}")
    user_decision.send_message(f"Se não tiver chamado nenhuma função, reflita se deve fazê-lo ou não. "
                               "Lembre-se que você é um personal trainer rígido e pragmático.")
    return response.text

# Página inicial que lista todos os usuários
@app.route('/')
def index():
    users = list_users()
    return render_template('index.html', users=users)
# Página de detalhes do usuário e interação com a IA
@app.route('/user/<user_id>', methods=['GET', 'POST'])
def user_details(user_id):
    user = get_user(user_id)
    if not user:
        return "Usuário não encontrado", 404
    if request.method == 'POST':
        ia_response = ia_decision(user)
        return render_template('user.html', user=user, user_id=user_id, message=ia_response)
    return render_template('user.html', user=user, user_id=user_id)
if __name__ == '__main__':
    app.run(debug=True)