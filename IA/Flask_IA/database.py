
from typing import Dict, Any, Optional
# Banco de dados simulado
user_database: Dict[str, Dict[str, Any]] = {
    "user_1": {"id": "user_1",
               "nome": "João",
               "fotos_enviadas_para_campanha_de_engajamento": 0,
               "em_campanha_engajamento": False,
               "presenca_nos_treinos_tres_meses": 0.85,
               "desconto_recebido": "primeira aula"},
    "user_2": {"id": "user_2",
               "nome": "Maria",
               "fotos_enviadas_para_campanha_de_engajamento": 4,
               "em_campanha_engajamento": True,
               "presenca_nos_treinos_tres_meses": 0.55,
               "desconto_recebido": "nenhum" },
    "user_3": {"id": "user_3",
               "nome": "José",
               "fotos_enviadas_para_campanha_de_engajamento": 0,
               "em_campanha_engajamento": False,
               "presenca_nos_treinos_tres_meses": 0.95,
               "desconto_recebido": "primeira aula" },
    "user_4": {"id": "user_4",
               "nome": "Ana",
               "fotos_enviadas_para_campanha_de_engajamento": 0,
               "em_campanha_engajamento": False,
               "presenca_nos_treinos_tres_meses": 0.75,
               "desconto_recebido": "anual" },
    "user_5": {"id": "user_5",
               "nome": "Carlos",
               "fotos_enviadas_para_campanha_de_engajamento": 3,
               "em_campanha_engajamento": True,
               "presenca_nos_treinos_tres_meses": 0.65,
               "desconto_recebido": "nenhum" },
    "user_6": {"id": "user_6",
               "nome": "Mariana",
               "fotos_enviadas_para_campanha_de_engajamento": 0,
               "em_campanha_engajamento": False,
               "presenca_nos_treinos_tres_meses": 0.40,
               "desconto_recebido": "nenhum" },
}
def get_user(user_id: str) -> Optional[Dict[str, Any]]:
    return user_database[f"{user_id}"]
def update_user(user_id: str, field: str, value: Any) -> bool:
    user = get_user(user_id)
    if user and field in user:
        user[field] = value
        return True
    return False
def list_users() -> Dict[str, Dict[str, Any]]:
    return user_database