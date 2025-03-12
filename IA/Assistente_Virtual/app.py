import os
import gradio as gr
import google.generativeai as genai
from google.api_core.exceptions import InvalidArgument
import time
from functions import atualizar_status_pedido, gerar_cupom_desconto, registrar_reclamacao
# Configuração da chave de API
GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)
# Definição do modelo generativo com as funções disponíveis
magical_if = genai.GenerativeModel(
    "gemini-1.5-flash",
    tools=[
        atualizar_status_pedido,
        gerar_cupom_desconto,
        registrar_reclamacao
    ]
)
chat = magical_if.start_chat(enable_automatic_function_calling=True)
def assemble_prompt(message):
   prompt = [message["text"]]
   uploaded_files = upload_files(message)
   prompt.extend(uploaded_files)
   return prompt
def upload_files(message):
    uploaded_files = []
    if message["files"]:
        for file_gradio_data in message["files"]:
            uploaded_file = genai.upload_file(file_gradio_data["path"])
            while uploaded_file.state.name == "PROCESSING":
                time.sleep(5)
                uploaded_file = genai.get_file(uploaded_file.name)
            uploaded_files.append(uploaded_file)
    return uploaded_files
def gradio_wrapper(message, _history):
    user_input = assemble_prompt(message)
    business_rules = """
    Você é um assistente virtual de uma loja online de eletrônicos. Siga as seguintes regras:
    1. Se o cliente perguntar sobre o status de um pedido, forneça as informações correspondentes.
       - Se necessário, chame a função atualizar_status_pedido.
    2. Se o cliente enviar uma imagem de um produto com defeito, registre a reclamação.
       - Chame a função registrar_reclamacao e forneça um número de protocolo.
    3. Se o cliente for recorrente ou estiver insatisfeito, ofereça um cupom de desconto.
       - Chame a função gerar_cupom_desconto e envie o código ao cliente.
    4. Responda perguntas sobre políticas da loja, como devolução e troca.
    5. Se não entender a solicitação, peça esclarecimentos educadamente.
    """
    try:
        response = chat.send_message(f"Cliente: {user_input}\nRegras de negócio: {business_rules}")
    except InvalidArgument as e:
        response = chat.send_message(
            f"O usuário te enviou um arquivo para você ler e obteve o erro: {e}. "
            "Pode explicar o que houve e dizer quais tipos de arquivos você "
            "dá suporte? Assuma que a pessoa não sabe programação e "
            "não quer ver o erro original. Explique de forma simples e concisa."
        )
    return response.text
# Interface Gradio
iface = gr.ChatInterface(
    fn=gradio_wrapper,
    title="Assistente Virtual da Loja",
    multimodal=True,
)
iface.launch()