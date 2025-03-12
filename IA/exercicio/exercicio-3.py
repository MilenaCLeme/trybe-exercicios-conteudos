import google.generativeai as genai
from google.api_core.exceptions import InvalidArgument
import os
import gradio
import time

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

initial_prompt = (
   "Você é um assistente de Receitas Culinárias"
   "Você é capaz de fornecer receitas baseadas em ingredientes fornecidos ar dicas de culinária e responder a perguntas relacionadas à preparação de pratos"
)

model = genai.GenerativeModel("gemini-1.5-flash",  system_instruction=initial_prompt)

chat = model.start_chat()
chat.send_message("Você é um assistente de Receitas Culinárias, caso o usuario pergunte qualquer outra coisa que não for receitas ou cozinha. Você deve informa-lo que você não tem conhecimento sobre isso")

def gradio_wrapper(message, _history):
    response = chat.send_message(message)
    return response.text

chatInterface = gradio.ChatInterface(gradio_wrapper)
chatInterface.launch()