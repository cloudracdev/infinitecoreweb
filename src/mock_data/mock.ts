const isOut = false
const productDescription = "DESCRIPTION"
const productName = "IPHONE"
const productValue = 99999.99
const productImage = "https://via.placeholder.com/150"
const productImageAlt = productImage
const configuration = [
  {
    key: "tela",
    keyValue: ["6.1", "6.7"],
  },
  {
    key: "configuração",
    keyValue: ["128", "256"],
  },
]
const color = [
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
]
const color2 = [
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
  { name: "Preto", hex: "#000000" },
  { name: "Branco", hex: "#FFFFFF" },
]

const MOCK = [
  {
    isOut: isOut,
    productDescription: productDescription,
    productName: productName,
    productValue: productValue,
    productImage: productImage,
    productImageAlt: productImageAlt,
    configuration: configuration as any,
    color: color,
  },
  {
    isOut: isOut,
    productDescription: productDescription,
    productName: productName,
    productValue: productValue,
    productImage: productImage,
    productImageAlt: productImageAlt,
    configuration: configuration as any,
    color: color2,
  },
]

export default MOCK
