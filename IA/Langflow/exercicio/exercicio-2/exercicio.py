from langflow.load import run_flow_from_json
import os

TWEAKS = {
  "ChatInput-SPVZX": {
    "background_color": "",
    "chat_icon": "",
    "files": "",
    "input_value": "",
    "sender": "User",
    "sender_name": "User",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  },
  "Prompt-jLOIS": {
    "template": "Você é um chatbot inteligente para um e-commerce de roupas. Seu objetivo é ajudar os clientes a encontrar produtos, tirar dúvidas sobre tamanhos, materiais, entrega e devolução, além de sugerir looks e promoções. Seja educado, simpático e eficiente, sempre incentivando a compra de forma natural. Caso necessário, colete informações e direcione o cliente ao suporte humano.\n\nSeja breve e objetivo nas respostas, mas ofereça detalhes quando solicitado. Use um tom amigável e próximo, adaptando-se ao perfil do cliente. Sempre que possível, sugira produtos com base nas preferências do usuário e no histórico de compras.\n\nSe você não souber a resposta, informe educadamente e ofereça uma alternativa, como direcionar para o atendimento humano ou sugerir informações no site.\n\n{memoria}",
    "tool_placeholder": "",
    "memoria": ""
  },
  "ChatOutput-83F4k": {
    "background_color": "",
    "chat_icon": "",
    "data_template": "{text}",
    "input_value": "",
    "sender": "Machine",
    "sender_name": "AI",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  },
  "GoogleGenerativeAIModel-XZqIj": {
    "api_key": "AIzaSyBKieidHruTXE5NAUMI7PAzq_ydL2nh6Kg",
    "input_value": "",
    "max_output_tokens": None,
    "model_name": "learnlm-1.5-pro-experimental",
    "n": None,
    "stream": False,
    "system_message": "",
    "temperature": 0.1,
    "tool_model_enabled": False,
    "top_k": None,
    "top_p": None
  },
  "Memory-Ro7Wk": {
    "n_messages": 100,
    "order": "Ascending",
    "sender": "Machine and User",
    "sender_name": "",
    "session_id": "",
    "template": "{sender_name}: {text}"
  }
}

TWEAKS["GoogleGenerativeAIModel-BjdoV"]["api_key"] = os.environ["GOOGLE_API_KEY"]

result = run_flow_from_json(flow="Basic Prompting.json",
                            session_id="", # provide a session id if you want to use session state
                            fallback_to_env_vars=True, # False by default
                            tweaks=TWEAKS)