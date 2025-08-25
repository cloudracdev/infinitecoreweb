export interface Color {
  name: string
  hex: string
}

export interface CardConfigurationProps {
  key: "tela" | "configuração" | "modelo" | "chip" | "tamanho"
  keyValue: string[]
}

export interface CardInterface {
  isOut: boolean
  productDescription: string
  productName: string
  productValue: number
  productImage: string
  productImageAlt: string
  configuration: ReadonlyArray<CardConfigurationProps> // DEIXAR OBRIGATÓRIO QUANDO IMPLEMENTAR
  color: ReadonlyArray<Color>
}
