from langflow.load import run_flow_from_json
TWEAKS = {
  "ParseData-ysCYa": {
    "sep": "\n",
    "template": "{text}"
  },
  "Prompt-hDbzU": {
    "instructions": "",
    "references": "",
    "template": "Reference 1:\n\n{references}\n\n---\n\n{instructions}\n\n",
    "tool_placeholder": ""
  },
  "TextInput-ezJcd": {
    "input_value": "Usando a referência recebida acima, você deve fazer uma resenha de viagem sobre o destino, processar o conteúdo e gerar um relatório de insights com os principais pontos levantados pelos usuários."
  },
  "ChatOutput-8MS1u": {
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
  "URL-LY6Dc": {
    "format": "Text",
    "urls": [
      "https://www.tripadvisor.com/TravelersChoice-Destinations"
    ]
  },
  "GoogleGenerativeAIModel-ZfKtc": {
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
  "ChatInput-kMVoy": {
    "files": "",
    "background_color": "",
    "chat_icon": "",
    "input_value": "",
    "sender": "User",
    "sender_name": "User",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  }
}

result = run_flow_from_json(flow="Blog Writer.json",
                            session_id="", # provide a session id if you want to use session state
                            fallback_to_env_vars=True, # False by default
                            tweaks=TWEAKS)