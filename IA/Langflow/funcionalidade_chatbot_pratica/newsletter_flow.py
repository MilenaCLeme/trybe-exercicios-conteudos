from langflow.load import run_flow_from_json
import os

def call_langflow(theme, url): 
    TWEAKS = {
    "ParseData-x6MYB": {
        "sep": "\n",
        "template": "{text}"
    },
    "Prompt-DfaQC": {
        "template": "Gere uma newsletter com base nas informações dadas abaixo: \n\nConteúdo de referência: {content_from_url}\n\n---\n\nTema em poucas palavras: {theme}\n\n---\n\nNewsletter:\n\n",
        "tool_placeholder": "",
        "content_from_url": "",
        "theme": ""
    },
    "TextInput-718O9": {
        "input_value": "Assunto qualquer"
    },
    "ChatOutput-PNUSW": {
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
    "URL-ptW9o": {
        "format": "Text",
        "urls": [
        "url.exemplo.com"
        ]
    },
    "GoogleGenerativeAIModel-4GhIo": {
        "api_key": "",
        "input_value": "",
        "max_output_tokens": None,
        "model_name": "gemini-1.5-flash",
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
    TWEAKS['TextInput-718O9']['input_value'] = theme
    TWEAKS['URL-ptW9o']['urls'] = [url]

    result = run_flow_from_json(flow="Gerador de Newsletters.json",
                                session_id="", # provide a session id if you want to use session state
                                fallback_to_env_vars=True, # False by default
                                tweaks=TWEAKS)
    
    newsletter_text = result[0].outputs[0].results["message"].data["text"]
    return newsletter_text