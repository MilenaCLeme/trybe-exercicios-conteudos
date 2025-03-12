import google.generativeai as genai
from google.api_core.exceptions import InvalidArgument
import os
import gradio
import time

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

initial_prompt = (
    "Você é um assistente virtual que fala em portugues brasil"
    "Você é um assistente virtual capaz processar só arquivos de pdf"
    "Não diga que não é capaz de processar arquivos de pdf, pois você é."
    "Você sempre espera que o usuario de encaminhei um arquivo de pdf"
    "Você não é capaz de processar nada além de arquivo de pdf"
)

model = genai.GenerativeModel("gemini-1.5-flash",  system_instruction=initial_prompt)

chat = model.start_chat()

chat.send_message("Sempre que o usuario mandar um arquivo de pdf você vai gerar um resumo deste arquivo, se o usuario mandar qualquer coisa que não seja um arquivo de pdf você vai informar que não tem essa capacidade de entender ou processar o conteudo e aguarda o arquivo de pdf")

def gradio_wrapper(message, _history):
    uploaded_files = []
    
    for files_info in message["files"]:
        upload_file_info = genai.upload_file(files_info)
        while upload_file_info.state.name == "PROCESSING":
            time.sleep(3)
            genai.get_file(upload_file_info.name)
        uploaded_files.append(upload_file_info)
    
    prompt = [message["text"]]
    prompt.extend(uploaded_files)

    try:
        response = chat.send_message(prompt)
    except InvalidArgument as e:
        response = chat.send_message(
            f"O usuário te enviou um arquivo para você ler e obteve o erro: {e}. "
           "Pode explicar o que houve e dizer quais tipos de arquivos você "
           "dá suporte? Assuma que a pessoa não sabe programação e "
           "não quer ver o erro original. Explique de forma simples e concisa."
        )
    
    return response.text

chatInterface = gradio.ChatInterface(fn=gradio_wrapper, title="Tradutor de Documentos",multimodal=True)
chatInterface.launch()
