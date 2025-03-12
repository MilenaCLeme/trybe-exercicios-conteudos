from langflow.load import run_flow_from_json
TWEAKS = {
  "ChatInput-7oEwE": {
    "background_color": "",
    "chat_icon": "",
    "files": "",
    "input_value": "Hello",
    "sender": "User",
    "sender_name": "User",
    "session_id": "",
    "should_store_message": True,
    "text_color": ""
  },
  "Prompt-YTqI7": {
    "template": "Reference 1:\n\n{references-1}\n\n---\n\nReference 2:\n\n{references-2}\n\n---\n\nReference 3:\n\n{references-3}\n\n---\n\n{instructions}\n\n--- \n\nUsando as informações anteriores, responda ao cliente considerando o histórico da conversa: {history}\n\n\n\n",
    "tool_placeholder": "",
    "references-1": "",
    "references-2": "",
    "references-3": "",
    "instructions": "Você é um especialista definitivo em Pokémon e conhece tudo sobre o universo Pokémon, incluindo jogos, anime, mangás e o Trading Card Game. Você sempre usa as referências fornecidas para responder com precisão e contexto detalhado. Se uma referência não cobrir totalmente a resposta, você pode complementar com conhecimento geral, mas sempre priorizando as informações das fontes enviadas.\n\nExplique cada resposta de forma clara e detalhada, usando exemplos, curiosidades e conexões dentro do universo Pokémon. Se houver múltiplas interpretações (por exemplo, diferenças entre jogos e anime), mencione todas as variações relevantes.\n\nSempre que possível, apresente informações organizadas, como listas ou comparações, para facilitar a compreensão. Se necessário, cite as referências diretamente para mostrar a origem da informação. Por favor falar em portugues ",
    "history": ""
  },
  "ChatOutput-x8TCR": {
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
  "GoogleGenerativeAIModel-7Esoc": {
    "api_key": "AIzaSyBKieidHruTXE5NAUMI7PAzq_ydL2nh6Kg",
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
  },
  "URL-DTAj9": {
    "format": "Text",
    "urls": [
      "https://www.pokemon.com/br"
    ]
  },
  "APIRequest-BZRaM": {
    "body": [],
    "curl": "",
    "follow_redirects": True,
    "headers": [],
    "include_httpx_metadata": False,
    "method": "GET",
    "save_to_file": False,
    "timeout": 5,
    "urls": [
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    ],
    "use_curl": False
  },
  "File-yh4Bg": {
    "path": "pokemon.pdf",
    "concurrency_multithreading": 1,
    "delete_server_file_after_processing": True,
    "ignore_unspecified_files": False,
    "ignore_unsupported_extensions": True,
    "silent_errors": False,
    "use_multithreading": True
  },
  "ParseData-4ZEBj": {
    "sep": "\n",
    "template": "{text}"
  },
  "Memory-KC2yi": {
    "n_messages": 100,
    "order": "Ascending",
    "sender": "Machine and User",
    "sender_name": "",
    "session_id": "",
    "template": "{sender_name}: {text}"
  },
  "ParseData-8xiQs": {
    "sep": "\n",
    "template": "{result} - Transforma esse resulta de Json com objeto e arrays em texto corrido "
  }
}

result = run_flow_from_json(flow="Basic Prompting.json",
                            session_id="", # provide a session id if you want to use session state
                            fallback_to_env_vars=True, # False by default
                            tweaks=TWEAKS)