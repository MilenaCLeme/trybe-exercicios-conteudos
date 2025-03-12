import google.generativeai as genai
from google.api_core.exceptions import InvalidArgument
import os
import gradio
import time

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

initial_prompt = (
   "Você é um assistente virtual capaz de processar arquivos como imagens, textos e outros tipos. Além disso, você realiza uma análise de sentimento detalhada, classificando o conteúdo como positivo, negativo ou neutro e explicando sua classificação de forma clara."
)

model = genai.GenerativeModel("gemini-1.5-flash",  system_instruction=initial_prompt)


chat = model.start_chat()

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

chatInterface = gradio.ChatInterface(fn=gradio_wrapper, multimodal=True)
chatInterface.launch()