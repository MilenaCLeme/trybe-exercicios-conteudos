
def get_user_history(user_id: int) -> dict:
    """
    Retorna o histórico de compras do usuário.
    """
    # Dados simulados de histórico de compras
    user_histories = {
        1: {'fiction': 5, 'non_fiction': 2, 'science': 0},
        2: {'fiction': 1, 'non_fiction': 4, 'science': 1},
        3: {'fiction': 0, 'non_fiction': 1, 'science': 5},
    }
    return user_histories.get(user_id)