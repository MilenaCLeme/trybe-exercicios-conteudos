from database import get_user, update_user
# Função para aplicar o desconto no plano anual
def oferecer_plano_anual(user_id: str) -> str:
    user = get_user(user_id)
    if user:
        update_user(user_id, 'em_campanha_engajamento', False)
        update_user(user_id, 'desconto_recebido', 'anual')
        return f"{user['nome']} agora tem um desconto de 20% no plano anual de personal trainer."
    return "Usuário não encontrado."
# Função para motivar o envio de fotos consecutivas
def motivar_envio_fotos(user_id: str) -> str:
    user = get_user(user_id)
    if user:
        update_user(user_id, 'em_campanha_engajamento', True)
        return f"Oi {user['nome']}, envie 5 fotos seguidas de suas atividades na academia para ganhar 50% de desconto no primeiro treino com um personal!"
    return "Usuário não encontrado."
# Função para atualizar a contagem de fotos enviadas
def atualizar_envio_fotos(user_id: str, consecutivo: bool) -> str:
    user = get_user(user_id)
    if user:
        if consecutivo:
            new_count = user['fotos_enviadas'] + 1
            update_user(user_id, 'fotos_enviadas', new_count)
            return f"{user['nome']} enviou mais uma foto. Agora são {new_count} fotos enviadas."
        else:
            update_user(user_id, 'fotos_enviadas', 0)
            return f"{user['nome']} não enviou as fotos de forma consecutiva. O contador foi zerado."
    return "Usuário não encontrado."
def oferecer_desconto_primeira_aula(user_id: str) -> str:
    user = get_user(user_id)
    if user:
        update_user(user_id, 'desconto_recebido', 'primeira_aula_com_personal')
        return f"{user['nome']} agora tem um desconto de 50% na primeira aula com um personal trainer."
    return "Usuário não encontrado."