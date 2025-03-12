def atualizar_status_pedido(pedido_id: str) -> str:
    """
    Atualiza o status do pedido e retorna a informação atualizada.
    """
    # Lógica simulada para atualizar o pedido
    status = "Enviado"
    return f"O status do seu pedido {pedido_id} foi atualizado para: {status}."
def gerar_cupom_desconto(cliente_id: str) -> str:
    """
    Gera um cupom de desconto personalizado para o cliente.
    """
    cupom = "DESCONTO10"
    return f"Aqui está um cupom de 10% de desconto para sua próxima compra: {cupom}."
def registrar_reclamacao(cliente_id: str, descricao: str) -> str:
    """
    Registra uma reclamação e retorna um número de protocolo.
    """
    protocolo = "123456"
    return f"Sua reclamação foi registrada. Número do protocolo: {protocolo}."
