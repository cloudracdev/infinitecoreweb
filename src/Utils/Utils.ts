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

/**
 * Capitaliza a primeira letra da string
 * @param str A string a ser capitalizada
 * @returns A string com a primeira letra maiúscula
 */
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Formata uma string para o padrão de tela
 * @param str A string a ser formatada (ex: 6.1)
 * @returns 6.1"
 */
function formatStringScreen(str: string | number) {
  if (typeof str === "number") {
    str = String(str)
  }

  return str.trim().toLowerCase() + '"'
}

/**
 * Formata uma string para o padrão de configuração
 * @param str ex: 128
 * @returns 128GB
 */
function formatStringConfiguration(str: string | number) {
  if (typeof str === "number") {
    str = String(str)
  }

  return str.trim().toLowerCase() + "GB"
}

/**
 * Formata uma string para o padrão de tamanho
 * @param str A string a ser formatada (ex: 40)
 * @returns 40mm
 */
function formatStringSize(str: string | number) {
  if (typeof str === "number") {
    str = String(str)
  }

  return str.trim().toLowerCase() + "mm"
}

/**
 * Formata um valor monetário para o padrão brasileiro
 * @param money (ex: 9999.99)
 * @returns R$ 9.999,99
 */
function formatMoneyToString(money: string | number) {
  let value: number

  if (typeof money === "number") {
    value = money
  } else {
    const s = money.trim()
    const isPtBrLike =
      s.includes(",") && s.lastIndexOf(",") > s.lastIndexOf(".")

    const sanitized = isPtBrLike
      ?
        s
          .replace(/[^\d,.-]/g, "")
          .replace(/\./g, "")
          .replace(/,/g, ".")
      :
        s.replace(/[^\d.-]/g, "")

    value = Number(sanitized)
  }

  if (!Number.isFinite(value)) {
    return "R$ 0,00"
  }

  value = Math.round(value * 100) / 100

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

export default {
  arredondarPreco,
  capitalize,
  formatStringScreen,
  formatStringConfiguration,
  formatMoneyToString,
  formatStringSize,
}
