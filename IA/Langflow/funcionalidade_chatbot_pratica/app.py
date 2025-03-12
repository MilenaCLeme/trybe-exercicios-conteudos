from flask import Flask, render_template, request
from newsletter_flow import call_langflow
app = Flask(__name__)
@app.route('/')
def dashboard():
    # Dados simulados para exibição
    campaigns = [
        {'name': 'Campanha de Verão', 'status': 'Ativa'},
        {'name': 'Promoção de Inverno', 'status': 'Pausada'},
        {'name': 'Lançamento de Produto', 'status': 'Concluída'},
    ]
    return render_template('dashboard.html', campaigns=campaigns)
@app.route('/newsletter', methods=['GET', 'POST'])
def newsletter():
    generated_newsletter = None
    if request.method == 'POST':
        theme = request.form['theme']
        link = request.form['link']
        # Inicialmente, não gera a newsletter; isso será implementado depois
        generated_newsletter = call_langflow(theme=theme, url=link)
    return render_template('newsletter.html', generated_newsletter=generated_newsletter)
if __name__ == '__main__':
    app.run(debug=True)
    