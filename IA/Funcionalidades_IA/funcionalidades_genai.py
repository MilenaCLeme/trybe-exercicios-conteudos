import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])

model = genai.GenerativeModel("gemini-1.5-flash")

"""
- Funcionalidade de texto

with open("curriculo-joao-silva.txt", "r") as file:
    curriculam = file.read()
    
prompt = f"Por favor, aprimore o meu currículo para deixá-lo mais assertivo e enfatizando os pontos positivos. Eis o meu currículo:\n{curriculam}"

response = model.generate_content(prompt)

print(response.text)
    
"""

"""    
students_spreandsheet = genai.upload_file(
    path="desempenho_estudantes_enem.csv", display_name="Notas do ENEM"
)

response = model.generate_content(
    [
        students_spreandsheet,
        "Pode gerar um relatório de dois ou três parágrafos baseado nesses dados? Fale de tendências nos grupos de estudantes."
    ]
)

print(response.text)
"""
"""
dog_golden = genai.upload_file(path="cachorro_golden_retriever.png")
dog_bordercollie = genai.upload_file(path="cachorro_collie_acho.png")

prompt = (
   "Pode identificar a raça do cachorro da foto e me dar duas ou três frases de informações a respeito dele? "
   "De preferência, alguma curiosidade interessante em português, citando a fonte da informação e sempre de um jeito leve e interessante."
)

response = model.generate_content(
    [
        dog_golden,
        prompt
    ]
)

print(response.text)
"""
"""
food_plate = genai.upload_file(path="prato-de-comida.png")

response = model.generate_content(
    [
        "Pode identificar com cuidado o que é servido nesse prato e estimar grosseiramente as suas calorias?",
        food_plate
    ]
)

print(response.text)
"""

vocation_image = genai.upload_file(path="social_media_festa.png")

response = model.generate_content(
    [
        vocation_image,
        "Pode gerar uma descrição dessa imagem para o Instagram? Quero algo para escrever no post e uma descrição da imagem para fins de acessibilidade."
    ]
)

print(response.text)