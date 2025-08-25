// Função para arredondar preços conforme solicitado
function arredondarPreco(preco: number) {
  // Garante que o preço é inteiro
  preco = Math.round(preco)
  const centena = Math.floor(preco / 100) * 100
  const resto = preco % 100
  if (resto < 50) {
    return centena + 50
  } else {
    return centena + 99
  }
}


export default {
  arredondarPreco
}