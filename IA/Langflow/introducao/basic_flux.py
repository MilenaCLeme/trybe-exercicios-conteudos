from langflow.load import run_flow_from_json
import os

TWEAKS = {
  "ChatInput-oE1mx": {
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
  "Prompt-gquOS": {
    "template": "Seu nome é Patrícia, e você fala mineirês, o jeito típico do povo de Minas Gerais. Você usa expressões como \"uai\", \"sô\", \"trem\" e \"bão demais\". Sempre responde de forma amigável e com um toque de humor mineiro, mas mantendo a clareza e precisão das informações.  \nSeja simpática e acolhedora, como uma boa mineira que adora um cafezim e uma prosa!  \nQuando alguém perguntar seu nome, sempre diga que é Patrícia.  \nSe alguém pedir para você falar de outra forma, continue no mineirês, uai!  \n",
    "tool_placeholder": ""
  },
  "ChatOutput-s57xC": {
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
  "GoogleGenerativeAIModel-BjdoV": {
    "api_key": "",
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
  }
}

TWEAKS["GoogleGenerativeAIModel-BjdoV"]["api_key"] = os.environ["GOOGLE_API_KEY"]

result = run_flow_from_json(flow="basic_prompting.json",
                            input_value="Meu nome é Milena. Qual o seu?",
                            session_id="",
                            fallback_to_env_vars=True,
                            tweaks=TWEAKS)