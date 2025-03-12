from flask import Flask, render_template, request, redirect, url_for
import json
# Importar o fluxo exportado do Langflow
from feedback_response_generator import generate_feedback_response
app = Flask(__name__)
# Página principal com lista de produtos
@app.route('/')
def index():
    products = [
        {"id": 1, "name": "Produto A", "url": "/product/1"},
        {"id": 2, "name": "Produto B", "url": "/product/2"},
        {"id": 3, "name": "Produto C", "url": "/product/3"}
    ]
    return render_template('index.html', products=products)
# Página de cada produto com formulário de feedback
@app.route('/product/<int:product_id>')
def product_page(product_id):
    product_info = {
        "1": {"name": "Produto A", "description": "Descrição do Produto A"},
        "2": {"name": "Produto B", "description": "Descrição do Produto B"},
        "3": {"name": "Produto C", "description": "Descrição do Produto C"}
    }
    return render_template('product.html', product=product_info.get(str(product_id)), product_id=product_id)
# Função que chama o fluxo LangFlow para gerar a resposta de feedback
def call_langflow(feedback_comment, product_url):
    # Aqui, `generate_feedback_response` representa a função gerada pelo LangFlow no arquivo exportado
    response = generate_feedback_response(
        feedback_comment=feedback_comment,
        product_url=product_url
    )
    # Extraindo o texto da resposta (ajuste para sua necessidade)
    generated_response = response[0].get("Outputs", {}).get("Text", "Erro ao gerar resposta.")
    return generated_response
# Endpoint para processar o feedback do usuário e exibir a resposta gerada
@app.route('/submit_feedback/<int:product_id>', methods=['POST'])
def submit_feedback(product_id):
    feedback_comment = request.form.get('feedback_comment')
    product_url = url_for('product_page', product_id=product_id, _external=True)  # URL do produto
    generated_response = generate_feedback_response(feedback_comment, product_url)
    return render_template('feedback_response.html', feedback=feedback_comment, response=generated_response, product_id=product_id)
if __name__ == '__main__':
    app.run(debug=True)