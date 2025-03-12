from langflow.load import run_flow_from_json
import os
GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
TWEAKS = {
  "URL-D53OE": {
    "format": "Text",
    "urls": [
      "https://www.mercadolivre.com.br/controle-sem-fio-para-ps4-pc-gamer-smart-tv-gamepass-android-play-4-cor-preto/p/MLB29397802?pdp_filters=item_id%3AMLB3876756953&from=gshop&matt_tool=86203044&matt_word=&matt_source=google&matt_campaign_id=14303413802&matt_ad_group_id=137671955270&matt_match_type=&matt_network=g&matt_device=c&matt_creative=584295662828&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB29397802-product&matt_product_partition_id=2269459722943&matt_target_id=pla-2269459722943&cq_src=google_ads&cq_cmp=14303413802&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQjwvpy5BhDTARIsAHSilynVyOxFIpyfoG-AdpQifTEWYMRgtiU0ODsBMoZ-r1437BFwcZfL2ZMaApqnEALw_wcB"
    ]
  },
  "ParseData-qBE62": {
    "sep": "\n",
    "template": "{text}"
  },
  "Prompt-xUywl": {
    "template": "Gere uma resposta ao feedback do cliente usando as informações abaixo.\nFeedback: {feedback_comment}\nFonte do Produto: {product_url}\n",
    "feedback_comment": "",
    "product_url": ""
  },
  "TextInput-9U8Ks": {
    "input_value": "Péssimo controle, não funciona."
  },
  "GoogleGenerativeAIModel-xD7RF": {
    "google_api_key": GOOGLE_API_KEY,
    "input_value": "",
    "max_output_tokens": None,
    "model": "gemini-1.5-flash",
    "n": None,
    "stream": False,
    "system_message": "",
    "temperature": 1,
    "top_k": None,
    "top_p": None
  },
  "TextOutput-iL1I6": {
    "input_value": ""
  }
}
def generate_feedback_response(feedback_comment, product_url):
    TWEAKS["Prompt-xUywl"]["feedback_comment"] = feedback_comment
    TWEAKS["Prompt-xUywl"]["product_url"] = product_url
    result = run_flow_from_json(flow="Gerador de respostas de feedback.json",
                                input_value="message",
                                session_id="", # provide a session id if you want to use session state
                                fallback_to_env_vars=True, # False by default
                                tweaks=TWEAKS)
    answer = result[0].outputs[0].results['text'].data['text']
    return answer