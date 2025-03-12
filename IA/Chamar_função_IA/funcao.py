import google.generativeai as genai
from google.api_core.exceptions import InvalidArgument
import os
import gradio
import time
from home_assistent import set_light_values, intruder_alert, start_music, good_morning

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

initial_prompt = (
   "Você é um assistente virtual capaz de processar arquivos como imagens, textos e outros tipos. "
   "Sempre que alguém perguntar sobre um arquivo, verifique o histórico para encontrar o arquivo correspondente. "
   "Não diga que não é capaz de processar arquivos, pois você é."
   "Você tem acesso a funções que contralam a casa de quem a está usando. Chame-a",
   "Não mostre o codigo das funções"
)

model = genai.GenerativeModel(model_name="gemini-1.5-flash",  system_instruction=initial_prompt, tools=[set_light_values, intruder_alert, start_music, good_morning])


chat = model.start_chat(enable_automatic_function_calling=True)


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

chatInterface = gradio.ChatInterface(fn=gradio_wrapper, title="Chatbot com Suporte a Arquivos 🤖",multimodal=True)
chatInterface.launch()