// TODO: verificar otimização futura
import { useCart } from "@/hooks/useCart"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import React, { useState } from "react"
import Header from "./Header"
import SeminovosSection from "../pages/home/components/SeminovosSection"

// Edição insignificante para teste
// Função para arredondar preços conforme solicitado
function arredondarPreco(preco) {
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

const priceMacbookProM4_128GB_2TB = 35499

// ====== PREÇOS: iPhone 15 ======
const price_iPhone15_128GB_rosa = arredondarPreco(3939 * 1.01 + 50)
const IMG_iPhone15_Rosa =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone15rosa700x400.png"
const price_iPhone15_128GB_verde = arredondarPreco(3939 * 1.01 + 50)
const IMG_iPhone15_Verde =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone15verde700x400.png"
const price_iPhone15_128GB_azul = arredondarPreco(3939 * 1.01 + 50)
const IMG_iPhone15_Azul =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone15azul700x400.png"
const price_iPhone15_128GB_preto = arredondarPreco(3939 * 1.01 + 100)
const IMG_iPhone15_Preto =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone15preto700x400.png"

// ====== PREÇOS: iPhone 16e ======
const price_iPhone16e_128GB_preto = arredondarPreco(3499 * 1.01 + 50)
const IMG_iPhone16e_Preto =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16epreto1000x700.png"
const price_iPhone16e_128GB_branco = arredondarPreco(3499 * 1.01 + 100)
const IMG_iPhone16e_Branco =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16ebranco1000x1000.png"

// ====== PREÇOS: iPhone 16 ======
const price_iPhone16_128GB_azul = arredondarPreco(4499 * 1.01 + 50)
const IMG_iPhone16_Azul =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16azul1000x700.png"
const price_iPhone16_128GB_preto = arredondarPreco(4469 * 1.01 + 50)
const IMG_iPhone16_Preto =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16preto1000x700.png"
const price_iPhone16_128GB_branco = arredondarPreco(4469 * 1.01 + 100)
const IMG_iPhone16_Branco =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16branco1000x700.png"
const price_iPhone16_256GB_preto = arredondarPreco(5299 * 1.01 + 100)
const price_iPhone16_256GB_branco = arredondarPreco(5299 * 1.01 + 150)

// ====== PREÇOS: iPhone 16 Pro ======
const price_iPhone16Pro_128GB_desert = arredondarPreco(5499 * 1.01 + 50)
const IMG_iPhone16Pro_Desert =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16prodesert.png"
const price_iPhone16Pro_128GB_natural = arredondarPreco(5499 * 1.01 + 100)
const IMG_iPhone16Pro_Natural =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16pronatural.png"
const price_iPhone16Pro_128GB_branco = arredondarPreco(5499 * 1.01 + 100)
const IMG_iPhone16Pro_Branco =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16probranco.png"
const price_iPhone16Pro_128GB_preto = arredondarPreco(5499 * 1.01 + 150)
const IMG_iPhone16Pro_Preto =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16propreto.png"
const price_iPhone16Pro_256GB_desert = arredondarPreco(6499 * 1.01 + 100)
const price_iPhone16Pro_256GB_branco = arredondarPreco(6499 * 1.01 + 150)

// ====== PREÇOS: iPhone 16 Pro Max ======
const price_iPhone16ProMax_256GB_desert = arredondarPreco(6549 * 1.01 + 100)
const IMG_iPhone16ProMax_Desert =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16promaxdesert.png"
const price_iPhone16ProMax_256GB_natural = arredondarPreco(6549 * 1.01 + 100)
const IMG_iPhone16ProMax_Natural =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16promaxnatural.png"
const price_iPhone16ProMax_256GB_branco = arredondarPreco(6549 * 1.01 + 150)
const IMG_iPhone16ProMax_Branco =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/iphone16promaxbranco.png"

// ====== PREÇOS: MAC / iPad / Acessórios ======

// ====== PREÇOS: Mac Mini M4 ======
const price_MacMiniM4_16GB_256GB_Prata = arredondarPreco(4450 * 1.01 + 50)
const IMG_MacMiniM4_16GB_256GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macminim4.png"

// ====== PREÇOS: MacBook Air M3 ======
// 13"
const price_MacBookAirM3_13in_8GB_256GB_CinzaEspacial = arredondarPreco(6200 * 1.01 + 100)
const IMG_MacBookAirM3_13in_8GB_256GB_CinzaEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3spacegray.png"
const price_MacBookAirM3_13in_8GB_256GB_Midnight = arredondarPreco(6200 * 1.01 + 150)
const IMG_MacBookAirM3_13in_8GB_256GB_Midnight =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3midnight.png"
const price_MacBookAirM3_13in_16GB_256GB_Prata = arredondarPreco(6550 * 1.01 + 200)
const IMG_MacBookAirM3_13in_16GB_256GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3prata.png"
const price_MacBookAirM3_13in_16GB_256GB_Midnight = arredondarPreco(6550 * 1.01 + 200)
const IMG_MacBookAirM3_13in_16GB_256GB_Midnight =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3midnight.png"
const price_MacBookAirM3_13in_16GB_512GB_Estelar = arredondarPreco(7550 * 1.01 + 200)
const IMG_MacBookAirM3_13in_16GB_512GB_Estelar =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3estelar.png"
// 15"
const price_MacBookAirM3_15in_16GB_512GB_Midnight = arredondarPreco(9899)
const IMG_MacBookAirM3_15in_16GB_512GB_Midnight =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3midnight.png"

// ====== PREÇOS: MacBook Air M4 ======
// 16GB/256GB
const price_MacBookAirM4_16GB_256GB_SkyBlue = arredondarPreco(6599 * 1.01 + 100)
const IMG_MacBookAirM4_16GB_256GB_SkyBlue =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm4skyblue.png"
const price_MacBookAirM4_16GB_256GB_Estelar = arredondarPreco(6600 * 1.01 + 100)
const IMG_MacBookAirM4_16GB_256GB_Estelar =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3estelar.png"
const price_MacBookAirM4_16GB_256GB_Prata = arredondarPreco(6600 * 1.01 + 100)
const IMG_MacBookAirM4_16GB_256GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3prata.png"
const price_MacBookAirM4_16GB_256GB_Midnight = arredondarPreco(6600 * 1.01 + 150)
const IMG_MacBookAirM4_16GB_256GB_Midnight =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3midnight.png"
// Novos preços para MacBook Air M4 15"
const priceMacbookAirM4_15_16_256_SkyBlue = arredondarPreco(8700 * 1.01 + 250)
const priceMacbookAirM4_15_16_256_Midnight = arredondarPreco(8700 * 1.01 + 250)
// 16GB/512GB
const price_MacBookAirM4_16GB_512GB_SkyBlue = arredondarPreco(8850 * 1.01 + 250)
const IMG_MacBookAirM4_16GB_512GB_SkyBlue =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm4skyblue.png"
const price_MacBookAirM4_16GB_512GB_Estelar = arredondarPreco(8850 * 1.01 + 300)
const IMG_MacBookAirM4_16GB_512GB_Estelar =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3estelar.png"
const price_MacBookAirM4_16GB_512GB_Midnight = arredondarPreco(8850 * 1.01 + 300)
const IMG_MacBookAirM4_16GB_512GB_Midnight =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3midnight.png"
// 24GB/512GB
const price_MacBookAirM4_24GB_512GB_SkyBlue = arredondarPreco(12799 * 1.01 + 600)
const IMG_MacBookAirM4_24GB_512GB_SkyBlue =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm4skyblue.png"
const price_MacBookAirM4_24GB_512GB_Estelar = arredondarPreco(12799 * 1.01 + 600)
const IMG_MacBookAirM4_24GB_512GB_Estelar =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3estelar.png"
const price_MacBookAirM4_24GB_512GB_Prata = arredondarPreco(12799 * 1.01 + 600)
const IMG_MacBookAirM4_24GB_512GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3prata.png"
const price_MacBookAirM4_24GB_512GB_Midnight = arredondarPreco(12799 * 1.01 + 600)
const IMG_MacBookAirM4_24GB_512GB_Midnight =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookairm3midnight.png"

// ====== PREÇOS: MacBook Pro M4 ======
// 14" + M4
const price_MacBookProM4_14in_M4_16GB_512GB_PretoEspacial = arredondarPreco(11000 * 1.01 + 500)
const IMG_MacBookProM4_14in_M4_16GB_512GB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_14in_M4_16GB_512GB_Prata = arredondarPreco(11000 * 1.01 + 600)
const IMG_MacBookProM4_14in_M4_16GB_512GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
const price_MacBookProM4_14in_M4_24GB_1TB_PretoEspacial = arredondarPreco(15000 * 1.01 + 600)
const IMG_MacBookProM4_14in_M4_24GB_1TB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_14in_M4_24GB_1TB_Prata = arredondarPreco(15000 * 1.01 + 700)
const IMG_MacBookProM4_14in_M4_24GB_1TB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
// 16" + M4
const price_MacBookProM4_16in_M4_48GB_512GB_PretoEspacial = arredondarPreco(21500 * 1.01 + 800)
const IMG_MacBookProM4_16in_M4_48GB_512GB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_16in_M4_48GB_512GB_Prata = arredondarPreco(21500 * 1.01 + 900)
const IMG_MacBookProM4_16in_M4_48GB_512GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
// 14" + M4 Pro
const price_MacBookProM4_14in_M4Pro_24GB_512GB_PretoEspacial = arredondarPreco(13600 * 1.01 + 800)
const IMG_MacBookProM4_14in_M4Pro_24GB_512GB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_14in_M4Pro_24GB_512GB_Prata = arredondarPreco(13600 * 1.01 + 900)
const IMG_MacBookProM4_14in_M4Pro_24GB_512GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
// 16" + M4 Pro
const price_MacBookProM4_16in_M4Pro_24GB_512GB_PretoEspacial = arredondarPreco(17500 * 1.01 + 1000)
const IMG_MacBookProM4_16in_M4Pro_24GB_512GB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_16in_M4Pro_24GB_512GB_Prata = arredondarPreco(17500 * 1.01 + 1100)
const IMG_MacBookProM4_16in_M4Pro_24GB_512GB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
// 14" + M4 Max
const price_MacBookProM4_14in_M4Max_36GB_1TB_PretoEspacial = arredondarPreco(23000 * 1.01 + 2000)
const IMG_MacBookProM4_14in_M4Max_36GB_1TB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_14in_M4Max_36GB_1TB_Prata = arredondarPreco(23000 * 1.01 + 2300)
const IMG_MacBookProM4_14in_M4Max_36GB_1TB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
// 16" + M4 Max
const price_MacBookProM4_16in_M4Max_36GB_1TB_PretoEspacial = arredondarPreco(24500 * 1.01 + 2500)
const IMG_MacBookProM4_16in_M4Max_36GB_1TB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_16in_M4Max_36GB_1TB_Prata = arredondarPreco(24500 * 1.01 + 2600)
const IMG_MacBookProM4_16in_M4Max_36GB_1TB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
const price_MacBookProM4_16in_M4Max_48GB_1TB_PretoEspacial = arredondarPreco(28900 * 1.01 + 3000)
const IMG_MacBookProM4_16in_M4Max_48GB_1TB_PretoEspacial =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4blackspace.png"
const price_MacBookProM4_16in_M4Max_48GB_1TB_Prata = arredondarPreco(28900 * 1.01 + 3200)
const IMG_MacBookProM4_16in_M4Max_48GB_1TB_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4silver.png"
// MacBook Pro M4 Max 16" 128GB/2TB - Space Black e Silver
const PRICE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SPACE_BLACK = arredondarPreco(49000 * 1.01 + 10000)
const PRICE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SILVER = arredondarPreco(49000 * 1.01 + 11000)
const IMAGE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SPACE_BLACK =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4max16-128-2tb-black.png"
const IMAGE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SILVER =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/macbookprom4max16-128-2tb-silver.png"

// IPAD 11 — preços por armazenamento e cor
// imagens por cor
const IMG_iPad11_Blue =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipad11azul.png"
const IMG_iPad11_Pink =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipad11rosa.png"
const IMG_iPad11_Silver =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipad11silver.png"

// iPad Air — imagens por cor
const IMG_iPadAir_SpaceGray =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipadairspacegray.png"
const IMG_iPadAir_Estelar =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipadairestelar.png"
const IMG_iPadAir_Azul =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipadairazul.png"
const IMG_iPadAir_Roxo =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipadairroxo.png"
// iPad Pro — imagens por cor
const IMG_iPadPro_SpaceGray =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipadprospacegray.png"
const IMG_iPadPro_Prata =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/ipadprosilver.png"
// 128GB — custos informados, sem multiplicador adicional (apenas arredondamento 50/99)
const price_iPad11_128GB_Silver = arredondarPreco(2550 + 35 + 100)
const price_iPad11_128GB_Blue = arredondarPreco(2500 + 35 + 50)
const price_iPad11_128GB_Pink = arredondarPreco(2550 + 35 + 50)
// 256GB — custos informados
const price_iPad11_256GB_Silver = arredondarPreco(3350 + 35 + 100)
const price_iPad11_256GB_Blue = arredondarPreco(3250 + 35 + 50)
const price_iPad11_256GB_Pink = arredondarPreco(3300 + 35 + 50)

// ====== PREÇOS: iPad Air ======
// iPad Air 11" 128GB: custo 4000, +1%, e adicionais por cor
const price_iPadAir_11in_128GB_SpaceGray = arredondarPreco(4000 * 1.01 + 150)
const price_iPadAir_11in_128GB_Estelar = arredondarPreco(4000 * 1.01 + 100)
const price_iPadAir_11in_128GB_Azul = arredondarPreco(4000 * 1.01 + 100)
const price_iPadAir_11in_128GB_Roxo = arredondarPreco(4000 * 1.01 + 50)

// iPad Air 11" 256GB: custo 4750, +1%, e adicionais por cor
const price_iPadAir_11in_256GB_SpaceGray = arredondarPreco(4750 * 1.01 + 100)
const price_iPadAir_11in_256GB_Estelar = arredondarPreco(4750 * 1.01 + 150)
const price_iPadAir_11in_256GB_Azul = arredondarPreco(4750 * 1.01 + 50)
const price_iPadAir_11in_256GB_Roxo = arredondarPreco(4750 * 1.01 + 50)

// iPad Air 13" 128GB: custo 5350, +1%, e adicionais por cor
const price_iPadAir_13in_128GB_SpaceGray = arredondarPreco(5350 * 1.01 + 100)
const price_iPadAir_13in_128GB_Estelar = arredondarPreco(5350 * 1.01 + 150)
const price_iPadAir_13in_128GB_Azul = arredondarPreco(5350 * 1.01 + 50)
const price_iPadAir_13in_128GB_Roxo = arredondarPreco(5350 * 1.01 + 50)
// IPAD AIR 7

// ====== PREÇOS: iPad Pro ======
const priceIpadPro11_256_SpaceGray = arredondarPreco(6100 * 1.01 + 150)
const priceIpadPro11_256_Silver = arredondarPreco(6100 * 1.01 + 200)
// 📱 iPad Pro 11"
const priceIPadPro11_512_SpaceGray = arredondarPreco(9200 * 1.01 + 200)
const priceIPadPro11_512_Silver = arredondarPreco(9200 * 1.01 + 250)

// 📱 iPad Pro 13"
const priceIPadPro13_256_SpaceGray = arredondarPreco(8900 * 1.01 + 200)
const priceIPadPro13_256_Silver = arredondarPreco(8900 * 1.01 + 200)
const priceIPadPro13_512_SpaceGray = arredondarPreco(10950 * 1.01 + 300)
const priceIPadPro13_512_Silver = arredondarPreco(10950 * 1.01 + 350)

// ACESSÓRIOS
const price_AppleWatchSE_40mm = arredondarPreco(2999)
const IMG_AppleWatchSE_40mm =
  "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200"
const price_AppleWatchSE_44mm = arredondarPreco(3299)
const IMG_AppleWatchSE_44mm =
  "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200"
const price_AppleWatchSeries10_42mm = arredondarPreco(4999)
const IMG_AppleWatchSeries10_42mm =
  "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200"
const price_AppleWatchSeries10_46mm = arredondarPreco(5399)
const IMG_AppleWatchSeries10_46mm =
  "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200"
const price_AppleWatchUltra2_49mm = arredondarPreco(4750 * 1.01 + 300)

// Apple Watch SE (GPS) — regra: custo + 35 (taxa) + 50 (lucro)
const price_AppleWatchSE_40mm_Midnight = arredondarPreco(1380 + 35 + 50)
const price_AppleWatchSE_40mm_Silver = arredondarPreco(1380 + 35 + 50)
const price_AppleWatchSE_40mm_Estelar = arredondarPreco(1450 + 35 + 50)

const price_AppleWatchSE_44mm_Midnight = arredondarPreco(1550 + 35 + 50)
const price_AppleWatchSE_44mm_Silver = arredondarPreco(1580 + 35 + 50)
const price_AppleWatchSE_44mm_Estelar = arredondarPreco(1550 + 35 + 50)

const price_AppleWatchSeries10_42mm_Rosa = arredondarPreco(2400 + 35 + 100)
const price_AppleWatchSeries10_42mm_Silver = arredondarPreco(2450 + 35 + 100)
const price_AppleWatchSeries10_42mm_JetBlack = arredondarPreco(2450 + 35 + 150)

const price_AppleWatchSeries10_46mm_Rosa = arredondarPreco(2300 + 35 + 50)
const price_AppleWatchSeries10_46mm_Silver = arredondarPreco(2500 + 35 + 100)
const price_AppleWatchSeries10_46mm_JetBlack = arredondarPreco(2600 + 35 + 150)
const IMG_AppleWatchUltra2_49mm =
  "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200"
// ====== AIRPODS: padronização de preços ======
const BASE_PRICE = 35 // RTAX, taxa padrão para produtos até 4000
const RTAX = 0.01 // 1% taxa para produtos acima de 4000
const RPROFIT = 50 // Lucro padrão
// Função para calcular preço final dos AirPods
function calculatePrice(base, colorAdj = 0) {
  // Se base > 4000, aplica RTAX, senão BASE_PRICE
  const tax = base > 4000 ? base * RTAX : BASE_PRICE
  return arredondarPreco(base + tax + RPROFIT + colorAdj)
}
const AIRPODS4_COST = 1050
const AIRPODS4_NC_COST = 1350
const AIRPODS_PRO2_COST = 1390
const AIRPODS_MAX_COST = 3950
const AIRPODS_MAX_COLOR_ESTELAR = 0 // pode ajustar se houver diferença
const AIRPODS_MAX_COLOR_PRETO = 0
const price_AirPods4 = calculatePrice(AIRPODS4_COST)
const IMG_AirPods4 =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpods4.png"
const price_AirPods4_NC = calculatePrice(AIRPODS4_NC_COST)
const IMG_AirPods4_NC =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpods4.png"
const price_AirPodsPro2 = calculatePrice(AIRPODS_PRO2_COST)
const IMG_AirPodsPro2 =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpodspro.png"
const price_AirPodsMax = calculatePrice(AIRPODS_MAX_COST, 300)
const IMG_AirPodsMax =
  "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpodsmaxpreto.png"
const price_ApplePencil2 = arredondarPreco(600 + 35 + 50)
const price_ApplePencilUSBC = arredondarPreco(650 + 35 + 50)
const price_ApplePencilPro = arredondarPreco(900 + 35 + 50)

interface Product {
  id: string
  name: string
  basePrice: number
  screenOptions?: { size: string; price: number }[]
  storageOptions: { size: string; price: number }[]
  colorOptions: { name: string; image: string; hex: string }[]
  chipOptions?: { name: string; price: number }[]
  description: string
  available?: boolean
}

interface CategoryPageProps {
  category: string
  onBack: () => void
  onCategorySelect: (category: string) => void
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack, onCategorySelect }) => {
  const [selectedProducts, setSelectedProducts] = useState<{
    [key: string]: { screen?: string; storage: string; color: string; chip?: string }
  }>({})
  const { addItem } = useCart()

  // Função para obter opções de tamanho do Apple Watch conforme modelo
  function getAppleWatchSizeOptions(model: string) {
    if (model === "SE (2nd Gen)") return ["40mm", "44mm"]
    if (model === "Series 10") return ["42mm", "46mm"]
    if (model === "Ultra 2") return ["49mm"]
    return []
  }

  const categoryData: { [key: string]: { title: string; products: Product[] } } = {
    iphone: {
      title: "iPhone",
      products: [
        {
          id: "iphone-15",
          name: "iPhone 15",
          basePrice: 6999,
          storageOptions: [{ size: "128GB", price: 0 }],
          colorOptions: [
            { name: "Rosa", image: IMG_iPhone15_Rosa, hex: "#FFE4E1" },
            { name: "Verde", image: IMG_iPhone15_Verde, hex: "#F0FFF0" },
            { name: "Azul", image: IMG_iPhone15_Azul, hex: "#F0FFFF" },
            { name: "Preto", image: IMG_iPhone15_Preto, hex: "#333333" },
          ],
          description: "Novo. Dinâmico. Impressionante.",
        },
        {
          id: "iphone-16e",
          name: "iPhone 16e",
          basePrice: 3599,
          storageOptions: [{ size: "128GB", price: 0 }],
          colorOptions: [
            { name: "Preto", image: IMG_iPhone16e_Preto, hex: "#333333" },
            { name: "Branco", image: IMG_iPhone16e_Branco, hex: "#FFFFFF" },
          ],
          description: "Essencial. Acessível. Extraordinário.",
        },
        {
          id: "iphone-16",
          name: "iPhone 16",
          basePrice: 7999,
          storageOptions: [
            { size: "128GB", price: 0 },
            { size: "256GB", price: 800 },
          ],
          colorOptions: [
            { name: "Azul", image: IMG_iPhone16_Azul, hex: "#4169E1" },
            { name: "Preto", image: IMG_iPhone16_Preto, hex: "#333333" },
            { name: "Branco", image: IMG_iPhone16_Branco, hex: "#FFFFFF" },
          ],
          description: "Rápido. Poderoso. Único.",
        },
        {
          id: "iphone-16-pro",
          name: "iPhone 16 Pro",
          basePrice: 9999,
          storageOptions: [
            { size: "128GB", price: 0 },
            { size: "256GB", price: 800 },
          ],
          colorOptions: [
            { name: "Desert", image: IMG_iPhone16Pro_Desert, hex: "#D2B48C" },
            { name: "Natural", image: IMG_iPhone16Pro_Natural, hex: "#F5F5DC" },
            { name: "Branco", image: IMG_iPhone16Pro_Branco, hex: "#FFFFFF" },
            { name: "Preto", image: IMG_iPhone16Pro_Preto, hex: "#2C2C2C" },
          ],
          description: "Inteligência Apple. Extraordinária.",
        },
        {
          id: "iphone-16-pro-max",
          name: "iPhone 16 Pro Max",
          basePrice: 10999,
          storageOptions: [{ size: "256GB", price: 0 }],
          colorOptions: [
            { name: "Desert", image: IMG_iPhone16ProMax_Desert, hex: "#D2B48C" },
            { name: "Natural", image: IMG_iPhone16ProMax_Natural, hex: "#F5F5DC" },
            { name: "Branco", image: IMG_iPhone16ProMax_Branco, hex: "#FFFFFF" },
          ],
          description: "Máximo. Puro. Extraordinário.",
        },
      ],
    },
    mac: {
      title: "Mac",
      products: [
        {
          id: "mac-mini-m4",
          name: "Mac Mini M4",
          basePrice: 4699,
          storageOptions: [{ size: "16GB/256GB", price: 0 }],
          colorOptions: [{ name: "Prata", image: IMG_MacMiniM4_16GB_256GB_Prata, hex: "#C0C0C0" }],
          description: "Pequeno. Poderoso. Surpreendente.",
        },
        {
          id: "macbook-air-m3",
          name: "MacBook Air M3",
          basePrice: 9999,
          screenOptions: [{ size: '13"', price: 0 }],
          storageOptions: [
            { size: "8GB/256GB", price: 0 },
            { size: "16GB/256GB", price: 1500 },
            { size: "16GB/512GB", price: 3000 },
          ],
          colorOptions: [
            {
              name: "Cinza Espacial",
              image: IMG_MacBookAirM3_13in_8GB_256GB_CinzaEspacial,
              hex: "#8E8E93",
            },
            { name: "Prata", image: IMG_MacBookAirM3_13in_16GB_256GB_Prata, hex: "#C0C0C0" },
            { name: "Midnight", image: IMG_MacBookAirM3_13in_8GB_256GB_Midnight, hex: "#2C2C2C" },
            { name: "Estelar", image: IMG_MacBookAirM3_13in_16GB_512GB_Estelar, hex: "#F5F5DC" },
          ],
          description: "Silencioso. Veloz. Impecável.",
        },
        {
          id: "macbook-air-m4",
          name: "MacBook Air M4",
          basePrice: 11999,
          screenOptions: [
            { size: '13"', price: 0 },
            { size: '15"', price: 0 },
          ],
          storageOptions: [
            { size: "16GB/256GB", price: 0 },
            { size: "16GB/512GB", price: 1500 },
            { size: "24GB/512GB", price: 3000 },
          ],
          colorOptions: [
            { name: "Sky Blue", image: IMG_MacBookAirM4_16GB_256GB_SkyBlue, hex: "#87CEEB" },
            { name: "Estelar", image: IMG_MacBookAirM4_16GB_256GB_Estelar, hex: "#F5F5DC" },
            { name: "Prata", image: IMG_MacBookAirM4_16GB_256GB_Prata, hex: "#C0C0C0" },
            { name: "Midnight", image: IMG_MacBookAirM4_16GB_256GB_Midnight, hex: "#2C2C2C" },
          ],
          description: "Leve. Potente. Perfeito.",
        },
        {
          id: "macbook-pro-m4",
          name: "MacBook Pro M4",
          basePrice: 19999,
          screenOptions: [
            { size: '14"', price: 0 },
            { size: '16"', price: 2500 },
          ],
          chipOptions: [
            { name: "M4", price: 0 },
            { name: "M4 Pro", price: 3000 },
            { name: "M4 Max", price: 6000 },
          ],
          storageOptions: [
            { size: "16GB/512GB", price: 0 },
            { size: "24GB/1TB", price: 0 },
            { size: "48GB/512GB", price: 0 },
            { size: "24GB/512GB", price: 0 },
            { size: "36GB/1TB", price: 0 },
            { size: "48GB/1TB", price: 0 },
            // { size: '48GB/2TB', price: 0 }, // Removido por solicitação
            // Nova opção para 16" + M4 Max:
            { size: "128GB/2TB", price: 35499 },
          ],
          colorOptions: [
            {
              name: "Preto Espacial",
              image: IMG_MacBookProM4_14in_M4_16GB_512GB_PretoEspacial,
              hex: "#2C2C2C",
            },
            { name: "Prata", image: IMG_MacBookProM4_14in_M4_16GB_512GB_Prata, hex: "#C0C0C0" },
          ],
          description: "Superpotência. Superportátil.",
        },
      ],
    },
    ipad: {
      title: "iPad",
      products: [
        {
          id: "ipad-11",
          name: "iPad 11",
          basePrice: 3999,
          storageOptions: [
            { size: "128GB", price: 0 },
            { size: "256GB", price: 800 },
          ],
          colorOptions: [
            { name: "Blue", image: IMG_iPad11_Blue, hex: "#87CEEB" },
            { name: "Pink", image: IMG_iPad11_Pink, hex: "#FFB6C1" },
            { name: "Silver", image: IMG_iPad11_Silver, hex: "#C0C0C0" },
          ],
          description: "Colorido. Versátil. Divertido.",
        },
        {
          id: "ipad-air-7",
          name: "iPad Air",
          basePrice: 5999,
          screenOptions: [
            { size: '11"', price: 0 },
            { size: '13"', price: 0 },
          ],
          storageOptions: [
            { size: "128GB", price: 0 },
            { size: "256GB", price: 1000 },
          ],
          colorOptions: [
            { name: "Space Gray", image: IMG_iPadAir_SpaceGray, hex: "#8E8E93" },
            { name: "Estelar", image: IMG_iPadAir_Estelar, hex: "#F5F5DC" },
            { name: "Azul", image: IMG_iPadAir_Azul, hex: "#87CEEB" },
            { name: "Roxo", image: IMG_iPadAir_Roxo, hex: "#9370DB" },
          ],
          description: "Leve. Potente. Perfeito. — 7thgen",
        },
        {
          id: "ipad-pro-7",
          name: "iPad Pro",
          basePrice: 8999,
          screenOptions: [
            { size: '11"', price: 0 },
            { size: '13"', price: 0 },
          ],
          storageOptions: [
            { size: "256GB", price: 0 },
            { size: "512GB", price: 1500 },
          ],
          colorOptions: [
            { name: "Space Gray", image: IMG_iPadPro_SpaceGray, hex: "#8E8E93" },
            { name: "Prata", image: IMG_iPadPro_Prata, hex: "#C0C0C0" },
          ],
          description: "O iPad mais avançado de todos os tempos. — 7thgen",
        },
      ],
    },
    acessorios: {
      title: "Acessórios",
      products: [
        // Apple Watch card with model options and nested size options for SE (2nd Gen)
        {
          id: "apple-watch",
          name: "Apple Watch",
          basePrice: 2999,
          // "storageOptions" here é a lista de modelos do Apple Watch
          storageOptions: [
            { size: "SE (2nd Gen)", price: 0 },
            { size: "Series 10", price: 0 },
            { size: "Ultra 2", price: 0 },
          ],
          // Nova configuração: tamanho, será usada no card
          tamanhoOptions: [
            { size: "40mm", price: 0 },
            { size: "44mm", price: 300 },
            { size: "42mm", price: 1000 },
            { size: "46mm", price: 1400 },
            { size: "49mm", price: 2000 },
          ],
          colorOptions: [
            {
              name: "Midnight",
              hex: "#1c1c1e",
              image:
                "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watchsemidnight.png",
            },
            {
              name: "Silver",
              hex: "#d8d8d8",
              image:
                "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watchsesilver.png",
            },
            {
              name: "Estelar",
              hex: "#f5deb3",
              image:
                "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watchseestelar.png",
            },
          ],
          connectivityOptions: [
            { type: "GPS", price: 0 },
            { type: "GPS + Celular", price: 500 },
          ],
          description: "O relógio inteligente da Apple. Agora com escolha de modelo e tamanho.",
        },
        {
          id: "airpods",
          name: "AirPods",
          basePrice: AIRPODS4_COST, // base para AirPods 4
          // Adicionando configuração de modelo para AirPods
          modeloOptions: [
            { modelo: "AirPods 4", price: calculatePrice(AIRPODS4_COST), image: IMG_AirPods4 },
            {
              modelo: "AirPods 4 Noise Cancellation",
              price: calculatePrice(AIRPODS4_NC_COST),
              image: IMG_AirPods4_NC,
            },
            {
              modelo: "Airpods Pro 2",
              price: calculatePrice(AIRPODS_PRO2_COST),
              image: IMG_AirPodsPro2,
            },
            {
              modelo: "AirPods Max",
              price: calculatePrice(AIRPODS_MAX_COST, 300),
              image: IMG_AirPodsMax,
            },
          ],
          storageOptions: [{ size: "Padrão", price: 0 }],
          // Para AirPods Max, as cores disponíveis são Preto e Estelar; para outros, só Branco
          colorOptions: [
            {
              name: "Branco",
              image:
                "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpods4.png",
              hex: "#FFFFFF",
            },
          ],
          description: "Os fones de ouvido sem fio da Apple. Escolha o modelo desejado.",
        },
        {
          id: "apple-pencil",
          name: "Apple Pencil",
          basePrice: 999,
          // Modelos atualizados exatamente na ordem solicitada (Apple Pencil 1 removido)
          modeloOptions: [
            {
              modelo: "Apple Pencil 2",
              price: price_ApplePencil2,
              image:
                "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/pencil2.png",
            },
            {
              modelo: "Apple Pencil USB-C",
              price: price_ApplePencilUSBC,
              image:
                "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/pencilusbc.png",
            },
            {
              modelo: "Apple Pencil Pro",
              price: price_ApplePencilPro,
              image:
                "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/pencilpro.png",
            },
          ],
          storageOptions: [{ size: "Padrão", price: 0 }],
          colorOptions: [
            {
              name: "Branco",
              image:
                "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200",
              hex: "#FFFFFF",
            },
          ],
          description: "A caneta stylus oficial para iPad. Escolha o modelo desejado.",
        },
      ],
    },
  }

  const currentCategory = categoryData[category]
  if (!currentCategory) return null

  const handleStorageChange = (productId: string, storage: string) => {
    const product = currentCategory.products.find((p) => p.id === productId)
    if (!product) return

    const currentSelected = selectedProducts[productId] || {}
    let newColor = currentSelected.color || product.colorOptions[0].name
    let newChip =
      selectedProducts[productId]?.chip ||
      (product.chipOptions ? product.chipOptions[0].name : undefined)
    let newScreen =
      selectedProducts[productId]?.screen ||
      (product.screenOptions ? product.screenOptions[0].size : undefined)
    let newTamanho = currentSelected.tamanho

    // Função para obter cores disponíveis baseado na configuração atual
    const getAvailableColors = (productId: string, storage: string, screen?: string) => {
      if (productId === "iphone-16" && storage === "256GB") {
        return product.colorOptions.filter((c) => c.name !== "Azul")
      }
      if (productId === "iphone-16-pro" && storage === "256GB") {
        return product.colorOptions.filter((c) => c.name === "Desert" || c.name === "Branco")
      }
      if (productId === "macbook-air-m3") {
        const selectedScreen = screen || '13"'
        if (selectedScreen === '13"') {
          if (storage === "8GB/256GB") {
            return product.colorOptions.filter(
              (c) => c.name === "Cinza Espacial" || c.name === "Midnight",
            )
          } else if (storage === "16GB/256GB") {
            return product.colorOptions.filter((c) => c.name === "Prata" || c.name === "Midnight")
          } else if (storage === "16GB/512GB") {
            return product.colorOptions.filter((c) => c.name === "Estelar")
          }
        } else if (selectedScreen === '15"') {
          return product.colorOptions.filter((c) => c.name === "Midnight")
        }
      }
      if (productId === "macbook-air-m4") {
        const selectedScreen =
          screen || (product.screenOptions ? product.screenOptions[0].size : '13"')
        if (selectedScreen === '15"' && storage === "16GB/256GB") {
          return product.colorOptions.filter((c) => c.name === "Sky Blue" || c.name === "Midnight")
        }
        if (storage === "16GB/512GB") {
          return product.colorOptions.filter((c) => c.name === "Sky Blue" || c.name === "Estelar")
        }
      }
      return product.colorOptions
    }

    // Verificar se a cor atual está disponível para a nova configuração
    const availableColors = getAvailableColors(productId, storage, newScreen)
    if (!availableColors.find((c) => c.name === newColor)) {
      newColor = availableColors[0].name // Selecionar primeira cor disponível
    }

    // Para iPhone 16, se mudou para 256GB e a cor atual é Azul, mudar para Preto
    if (productId === "iphone-16" && storage === "256GB" && newColor === "Azul") {
      newColor = "Preto"
    }

    // Para iPhone 16 Pro, se mudou para 256GB e a cor atual não é Desert ou Branco, mudar para Desert
    if (
      productId === "iphone-16-pro" &&
      storage === "256GB" &&
      newColor !== "Desert" &&
      newColor !== "Branco"
    ) {
      newColor = "Desert"
    }

    // Para MacBook Air M3, ajustar cor baseado na configuração e tela
    if (productId === "macbook-air-m3") {
      const selectedScreen = selectedProducts[productId]?.screen || '13"'

      if (selectedScreen === '13"') {
        if (storage === "8GB/256GB") {
          // Cores disponíveis: Cinza Espacial, Midnight
          if (newColor !== "Cinza Espacial" && newColor !== "Midnight") {
            newColor = "Cinza Espacial"
          }
        } else if (storage === "16GB/256GB") {
          // Cores disponíveis: Prata, Midnight
          if (newColor !== "Prata" && newColor !== "Midnight") {
            newColor = "Prata"
          }
        } else if (storage === "16GB/512GB") {
          // Cor disponível: Estelar
          newColor = "Estelar"
        }
      } else if (selectedScreen === '15"') {
        // 15" só tem 16GB/512GB em Midnight
        newColor = "Midnight"
      }
    }

    // ===== APPLE WATCH: lógica idêntica à dos cards do MacBook para dependência modelo/tamanho =====
    if (productId === "apple-watch") {
      // storage = modelo selecionado
      if (storage === "SE (2nd Gen)") {
        newTamanho = "40mm"
      } else if (storage === "Series 10") {
        newTamanho = "42mm"
      } else if (storage === "Ultra 2") {
        newTamanho = "49mm"
      }
    }

    setSelectedProducts((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        storage,
        color: newColor,
        chip: newChip,
        screen: newScreen,
        ...(productId === "apple-watch" ? { tamanho: newTamanho } : {}),
      },
    }))
  }

  const handleColorChange = (productId: string, color: string) => {
    const product = currentCategory.products.find((p) => p.id === productId)
    if (!product) return

    const currentSelected = selectedProducts[productId] || {}
    let newStorage = currentSelected.storage || product.storageOptions[0].size
    let newChip =
      currentSelected.chip || (product.chipOptions ? product.chipOptions[0].name : undefined)
    let newScreen =
      currentSelected.screen || (product.screenOptions ? product.screenOptions[0].size : undefined)

    setSelectedProducts((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        color,
        storage: newStorage,
        chip: newChip,
        screen: newScreen,
      },
    }))
  }

  const handleChipChange = (productId: string, chip: string) => {
    const product = currentCategory.products.find((p) => p.id === productId)
    if (!product) return

    const currentSelected = selectedProducts[productId] || {}
    let newColor = selectedProducts[productId]?.color || product.colorOptions[0].name
    let newScreen =
      selectedProducts[productId]?.screen ||
      (product.screenOptions ? product.screenOptions[0].size : undefined)
    let newStorage = product.storageOptions[0].size // SEMPRE seleciona a primeira configuração

    // Para MacBook Pro M4, ajustar configuração baseado na tela e chip
    if (productId === "macbook-pro-m4") {
      const selectedScreen = currentSelected.screen || '14"'

      if (selectedScreen === '14"' && chip === "M4") {
        newStorage = "16GB/512GB"
      } else if (selectedScreen === '16"' && chip === "M4") {
        newStorage = "48GB/512GB"
      } else if (selectedScreen === '14"' && chip === "M4 Pro") {
        newStorage = "24GB/512GB"
      } else if (selectedScreen === '16"' && chip === "M4 Pro") {
        newStorage = "24GB/512GB"
      } else if (selectedScreen === '14"' && chip === "M4 Max") {
        newStorage = "36GB/1TB"
      } else if (selectedScreen === '16"' && chip === "M4 Max") {
        newStorage = "36GB/1TB"
      }
    }

    // FORÇA a atualização do estado com a nova configuração
    console.log(`Chip changed to ${chip}, forcing storage selection: ${newStorage}`)

    setSelectedProducts((prev) => ({
      ...prev,
      [productId]: {
        screen: newScreen,
        storage: newStorage,
        color: newColor,
        chip: chip,
      },
    }))
  }

  const handleScreenChange = (productId: string, screen: string) => {
    const product = currentCategory.products.find((p) => p.id === productId)
    if (!product) return

    const currentSelected = selectedProducts[productId] || {}
    let newStorage = currentSelected.storage || product.storageOptions[0].size
    let newColor = currentSelected.color || product.colorOptions[0].name
    let newChip =
      currentSelected.chip || (product.chipOptions ? product.chipOptions[0].name : undefined)

    // Função para obter cores disponíveis baseado na tela e configuração
    const getAvailableColorsForScreen = (productId: string, screen: string, storage: string) => {
      if (productId === "macbook-air-m3") {
        if (screen === '13"') {
          if (storage === "8GB/256GB") {
            return product.colorOptions.filter(
              (c) => c.name === "Cinza Espacial" || c.name === "Midnight",
            )
          } else if (storage === "16GB/256GB") {
            return product.colorOptions.filter((c) => c.name === "Prata" || c.name === "Midnight")
          } else if (storage === "16GB/512GB") {
            return product.colorOptions.filter((c) => c.name === "Estelar")
          }
        } else if (screen === '15"') {
          return product.colorOptions.filter((c) => c.name === "Midnight")
        }
      }
      return product.colorOptions
    }

    // Para MacBook Air M3, ajustar configuração e cor baseado na tela
    if (productId === "macbook-air-m3") {
      if (screen === '15"') {
        // 15" só tem 16GB/512GB em Midnight
        newStorage = "16GB/512GB"
        newColor = "Midnight"
      } else if (screen === '13"') {
        // Se estava em 15", voltar para configuração padrão de 13"
        if (currentSelected.screen === '15"') {
          newStorage = "8GB/256GB"
          newColor = "Cinza Espacial"
        } else {
          // Verificar se a cor atual está disponível para a nova tela
          const availableColors = getAvailableColorsForScreen(productId, screen, newStorage)
          if (!availableColors.find((c) => c.name === newColor)) {
            newColor = availableColors[0].name
          }
        }
      }
    }

    // MacBook Air M4: 15" só com 16/256 e cores Sky Blue/Midnight
    if (productId === "macbook-air-m4") {
      if (screen === '15"') {
        newStorage = "16GB/256GB"
        if (newColor !== "Sky Blue" && newColor !== "Midnight") {
          newColor = "Sky Blue"
        }
      }
    }

    // Para MacBook Pro M4, ajustar configuração baseado na tela e chip
    if (productId === "macbook-pro-m4") {
      const selectedChip = currentSelected.chip || "M4"

      if (screen === '14"' && selectedChip === "M4") {
        newStorage = "16GB/512GB" // Padrão para 14" + M4
        newColor = currentSelected.color || "Preto Espacial"
      } else if (screen === '16"' && selectedChip === "M4") {
        newStorage = "48GB/512GB" // Padrão para 16" + M4
        newColor = currentSelected.color || "Preto Espacial"
      } else if (screen === '14"' && selectedChip === "M4 Pro") {
        newStorage = "24GB/512GB" // Padrão para 14" + M4 Pro
        newColor = currentSelected.color || "Preto Espacial"
      } else if (screen === '16"' && selectedChip === "M4 Pro") {
        newStorage = "24GB/512GB" // Padrão para 16" + M4 Pro
        newColor = currentSelected.color || "Preto Espacial"
      }
    }

    // Para iPad Air (id: 'ipad-air-7'), impedir 13" com 256GB
    if (productId === "ipad-air-7") {
      if (screen === '13"' && newStorage === "256GB") {
        newStorage = "128GB"
      }
    }

    setSelectedProducts((prev) => ({
      ...prev,
      [productId]: {
        screen,
        storage: newStorage,
        color: newColor,
        chip: newChip,
      },
    }))
  }

  const getProductPrice = (product: Product, productId: string) => {
    const selected = selectedProducts[productId]
    const selectedColor = selected?.color || product.colorOptions[0].name
    const selectedStorage = selected?.storage || product.storageOptions[0].size
    const selectedScreen =
      selected?.screen || (product.screenOptions ? product.screenOptions[0].size : undefined)
    const selectedChip =
      selected?.chip || (product.chipOptions ? product.chipOptions[0].name : undefined)

    switch (productId) {
      // ===== iPHONE =====
      case "iphone-15": {
        if (selectedStorage === "128GB") {
          if (selectedColor === "Rosa") return price_iPhone15_128GB_rosa
          if (selectedColor === "Verde") return price_iPhone15_128GB_verde
          if (selectedColor === "Azul") return price_iPhone15_128GB_azul
          if (selectedColor === "Preto") return price_iPhone15_128GB_preto
        }
        break
      }
      case "iphone-16e": {
        if (selectedStorage === "128GB") {
          if (selectedColor === "Preto") return price_iPhone16e_128GB_preto
          if (selectedColor === "Branco") return price_iPhone16e_128GB_branco
        }
        break
      }
      case "iphone-16": {
        if (selectedStorage === "128GB") {
          if (selectedColor === "Azul") return price_iPhone16_128GB_azul
          if (selectedColor === "Preto") return price_iPhone16_128GB_preto
          if (selectedColor === "Branco") return price_iPhone16_128GB_branco
        } else if (selectedStorage === "256GB") {
          if (selectedColor === "Preto") return price_iPhone16_256GB_preto
          if (selectedColor === "Branco") return price_iPhone16_256GB_branco
        }
        break
      }
      case "iphone-16-pro": {
        if (selectedStorage === "128GB") {
          if (selectedColor === "Desert") return price_iPhone16Pro_128GB_desert
          if (selectedColor === "Natural") return price_iPhone16Pro_128GB_natural
          if (selectedColor === "Branco") return price_iPhone16Pro_128GB_branco
          if (selectedColor === "Preto") return price_iPhone16Pro_128GB_preto
        } else if (selectedStorage === "256GB") {
          if (selectedColor === "Desert") return price_iPhone16Pro_256GB_desert
          if (selectedColor === "Branco") return price_iPhone16Pro_256GB_branco
        }
        break
      }
      case "iphone-16-pro-max": {
        if (selectedStorage === "256GB") {
          if (selectedColor === "Desert") return price_iPhone16ProMax_256GB_desert
          if (selectedColor === "Natural") return price_iPhone16ProMax_256GB_natural
          if (selectedColor === "Branco") return price_iPhone16ProMax_256GB_branco
        }
        break
      }

      // ===== MAC =====
      case "mac-mini-m4": {
        if (selectedStorage === "16GB/256GB" && selectedColor === "Prata") {
          return price_MacMiniM4_16GB_256GB_Prata
        }
        break
      }
      case "macbook-air-m3": {
        if (
          selectedScreen === '15"' &&
          selectedStorage === "16GB/512GB" &&
          selectedColor === "Midnight"
        ) {
          return price_MacBookAirM3_15in_16GB_512GB_Midnight
        }
        if (selectedScreen === '13"' && selectedStorage === "8GB/256GB") {
          if (selectedColor === "Cinza Espacial")
            return price_MacBookAirM3_13in_8GB_256GB_CinzaEspacial
          if (selectedColor === "Midnight") return price_MacBookAirM3_13in_8GB_256GB_Midnight
        }
        if (selectedScreen === '13"' && selectedStorage === "16GB/256GB") {
          if (selectedColor === "Prata") return price_MacBookAirM3_13in_16GB_256GB_Prata
          if (selectedColor === "Midnight") return price_MacBookAirM3_13in_16GB_256GB_Midnight
        }
        if (
          selectedScreen === '13"' &&
          selectedStorage === "16GB/512GB" &&
          selectedColor === "Estelar"
        ) {
          return price_MacBookAirM3_13in_16GB_512GB_Estelar
        }
        break
      }
      case "macbook-air-m4": {
        // Suporte para as novas combinações 15"/16GB/256GB Sky Blue e Midnight
        if (selectedScreen === '15"' && selectedStorage === "16GB/256GB") {
          if (selectedColor === "Sky Blue") return priceMacbookAirM4_15_16_256_SkyBlue
          if (selectedColor === "Midnight") return priceMacbookAirM4_15_16_256_Midnight
        }
        if (selectedStorage === "16GB/256GB") {
          if (selectedColor === "Sky Blue") return price_MacBookAirM4_16GB_256GB_SkyBlue
          if (selectedColor === "Estelar") return price_MacBookAirM4_16GB_256GB_Estelar
          if (selectedColor === "Prata") return price_MacBookAirM4_16GB_256GB_Prata
          if (selectedColor === "Midnight") return price_MacBookAirM4_16GB_256GB_Midnight
        }
        if (selectedStorage === "16GB/512GB") {
          if (selectedColor === "Sky Blue") return price_MacBookAirM4_16GB_512GB_SkyBlue
          if (selectedColor === "Estelar") return price_MacBookAirM4_16GB_512GB_Estelar
          if (selectedColor === "Midnight") return price_MacBookAirM4_16GB_512GB_Midnight
        }
        if (selectedStorage === "24GB/512GB") {
          if (selectedColor === "Sky Blue") return price_MacBookAirM4_24GB_512GB_SkyBlue
          if (selectedColor === "Estelar") return price_MacBookAirM4_24GB_512GB_Estelar
          if (selectedColor === "Prata") return price_MacBookAirM4_24GB_512GB_Prata
          if (selectedColor === "Midnight") return price_MacBookAirM4_24GB_512GB_Midnight
        }
        break
      }
      case "macbook-pro-m4": {
        if (selectedScreen === '14"' && selectedChip === "M4") {
          if (selectedStorage === "16GB/512GB") {
            if (selectedColor === "Preto Espacial")
              return price_MacBookProM4_14in_M4_16GB_512GB_PretoEspacial
            if (selectedColor === "Prata") return price_MacBookProM4_14in_M4_16GB_512GB_Prata
          }
          if (selectedStorage === "24GB/1TB") {
            if (selectedColor === "Preto Espacial")
              return price_MacBookProM4_14in_M4_24GB_1TB_PretoEspacial
            if (selectedColor === "Prata") return price_MacBookProM4_14in_M4_24GB_1TB_Prata
          }
        }
        if (selectedScreen === '16"' && selectedChip === "M4" && selectedStorage === "48GB/512GB") {
          if (selectedColor === "Preto Espacial")
            return price_MacBookProM4_16in_M4_48GB_512GB_PretoEspacial
          if (selectedColor === "Prata") return price_MacBookProM4_16in_M4_48GB_512GB_Prata
        }
        if (
          selectedScreen === '14"' &&
          selectedChip === "M4 Pro" &&
          selectedStorage === "24GB/512GB"
        ) {
          if (selectedColor === "Preto Espacial")
            return price_MacBookProM4_14in_M4Pro_24GB_512GB_PretoEspacial
          if (selectedColor === "Prata") return price_MacBookProM4_14in_M4Pro_24GB_512GB_Prata
        }
        if (
          selectedScreen === '16"' &&
          selectedChip === "M4 Pro" &&
          selectedStorage === "24GB/512GB"
        ) {
          if (selectedColor === "Preto Espacial")
            return price_MacBookProM4_16in_M4Pro_24GB_512GB_PretoEspacial
          if (selectedColor === "Prata") return price_MacBookProM4_16in_M4Pro_24GB_512GB_Prata
        }
        if (
          selectedScreen === '14"' &&
          selectedChip === "M4 Max" &&
          selectedStorage === "36GB/1TB"
        ) {
          if (selectedColor === "Preto Espacial")
            return price_MacBookProM4_14in_M4Max_36GB_1TB_PretoEspacial
          if (selectedColor === "Prata") return price_MacBookProM4_14in_M4Max_36GB_1TB_Prata
        }
        if (selectedScreen === '16"' && selectedChip === "M4 Max") {
          if (selectedStorage === "36GB/1TB") {
            if (selectedColor === "Preto Espacial")
              return price_MacBookProM4_16in_M4Max_36GB_1TB_PretoEspacial
            if (selectedColor === "Prata") return price_MacBookProM4_16in_M4Max_36GB_1TB_Prata
          }
          if (selectedStorage === "48GB/1TB") {
            if (selectedColor === "Preto Espacial")
              return price_MacBookProM4_16in_M4Max_48GB_1TB_PretoEspacial
            if (selectedColor === "Prata") return price_MacBookProM4_16in_M4Max_48GB_1TB_Prata
          }
          // Nova opção: 128GB/2TB
          if (selectedStorage === "128GB/2TB") {
            if (selectedColor === "Preto Espacial")
              return PRICE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SPACE_BLACK
            if (selectedColor === "Prata") return PRICE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SILVER
          }
        }
        // MacBook Pro M4 Max 16" 128GB/2TB: imagem por cor
        if (productId === "macbook-pro-m4") {
          const selected = selectedProducts[productId]
          const selectedScreen = selected?.screen
          const selectedChip = selected?.chip
          const selectedStorage = selected?.storage
          const selectedColor = selected?.color
          if (
            selectedScreen === '16"' &&
            selectedChip === "M4 Max" &&
            selectedStorage === "128GB/2TB"
          ) {
            if (selectedColor === "Preto Espacial")
              return IMAGE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SPACE_BLACK
            if (selectedColor === "Prata") return IMAGE_MACBOOK_PRO_M4_MAX_16_128GB_2TB_SILVER
          }
        }
        break
      }

      // ===== iPAD =====
      case "ipad-11": {
        const c = (selectedColor || "").toLowerCase()
        if (selectedStorage === "128GB") {
          if (c === "silver" || c === "prata") return price_iPad11_128GB_Silver
          if (c === "blue" || c === "azul") return price_iPad11_128GB_Blue
          if (c === "pink" || c === "rosa") return price_iPad11_128GB_Pink
        }
        if (selectedStorage === "256GB") {
          if (c === "silver" || c === "prata") return price_iPad11_256GB_Silver
          if (c === "blue" || c === "azul") return price_iPad11_256GB_Blue
          if (c === "pink" || c === "rosa") return price_iPad11_256GB_Pink
        }
        break
      }
      case "ipad-air-7": {
        const c = (selectedColor || "").toLowerCase()
        const isSG = c === "space gray" || c === "cinza espacial"
        const isStellar = c === "starlight" || c === "estelar"
        const isBlue = c === "blue" || c === "azul"
        const isPurple = c === "purple" || c === "roxo"

        if (selectedScreen === '11"' && selectedStorage === "128GB") {
          if (isSG) return price_iPadAir_11in_128GB_SpaceGray
          if (isStellar) return price_iPadAir_11in_128GB_Estelar
          if (isBlue) return price_iPadAir_11in_128GB_Azul
          if (isPurple) return price_iPadAir_11in_128GB_Roxo
        }
        if (selectedScreen === '11"' && selectedStorage === "256GB") {
          if (isSG) return price_iPadAir_11in_256GB_SpaceGray
          if (isStellar) return price_iPadAir_11in_256GB_Estelar
          if (isBlue) return price_iPadAir_11in_256GB_Azul
          if (isPurple) return price_iPadAir_11in_256GB_Roxo
        }
        if (selectedScreen === '13"' && selectedStorage === "128GB") {
          if (isSG) return price_iPadAir_13in_128GB_SpaceGray
          if (isStellar) return price_iPadAir_13in_128GB_Estelar
          if (isBlue) return price_iPadAir_13in_128GB_Azul
          if (isPurple) return price_iPadAir_13in_128GB_Roxo
        }
        break
      }
      case "ipad-pro-7": {
        const c = (selectedColor || "").toLowerCase()
        const isSG = c === "space gray" || c === "cinza espacial"
        const isSilver = c === "silver" || c === "prata"

        // iPad Pro 11" 256GB
        if (selectedScreen === '11"' && selectedStorage === "256GB") {
          if (isSG) return priceIpadPro11_256_SpaceGray
          if (isSilver) return priceIpadPro11_256_Silver
        }
        // iPad Pro 11" 512GB
        if (selectedScreen === '11"' && selectedStorage === "512GB") {
          if (isSG) return priceIPadPro11_512_SpaceGray
          if (isSilver) return priceIPadPro11_512_Silver
        }
        // iPad Pro 13" 256GB
        if (selectedScreen === '13"' && selectedStorage === "256GB") {
          if (isSG) return priceIPadPro13_256_SpaceGray
          if (isSilver) return priceIPadPro13_256_Silver
        }
        // iPad Pro 13" 512GB
        if (selectedScreen === '13"' && selectedStorage === "512GB") {
          if (isSG) return priceIPadPro13_512_SpaceGray
          if (isSilver) return priceIPadPro13_512_Silver
        }
        break
      }

      // ===== ACESSÓRIOS =====
      case "apple-watch": {
        const selected = selectedProducts[productId] || {}
        const model = selected.storage || product.storageOptions[0].size
        const size = selected.tamanho || getAppleWatchSizeOptions(model)[0]
        const color = selected.color || product.colorOptions[0]?.name

        // SE (2nd Gen): 40mm / 44mm
        if (model === "SE (2nd Gen)") {
          if (size === "40mm") {
            if (color === "Midnight") return price_AppleWatchSE_40mm_Midnight
            if (color === "Silver" || color === "Prata") return price_AppleWatchSE_40mm_Silver
            if (color === "Estelar" || color === "Stellar" || color === "Starlight")
              return price_AppleWatchSE_40mm_Estelar
          }
          if (size === "44mm") {
            if (color === "Midnight") return price_AppleWatchSE_44mm_Midnight
            if (color === "Silver" || color === "Prata") return price_AppleWatchSE_44mm_Silver
            if (color === "Estelar" || color === "Stellar" || color === "Starlight")
              return price_AppleWatchSE_44mm_Estelar
          }
        }

        // Series 10: preço por tamanho + cor
        if (model === "Series 10") {
          if (size === "42mm") {
            if (color === "Rosa") return price_AppleWatchSeries10_42mm_Rosa
            if (color === "Silver") return price_AppleWatchSeries10_42mm_Silver
            if (color === "Jet Black") return price_AppleWatchSeries10_42mm_JetBlack
          }
          if (size === "46mm") {
            if (color === "Rosa") return price_AppleWatchSeries10_46mm_Rosa
            if (color === "Silver") return price_AppleWatchSeries10_46mm_Silver
            if (color === "Jet Black") return price_AppleWatchSeries10_46mm_JetBlack
          }
        }

        // Ultra 2: 49mm
        if (model === "Ultra 2") {
          if (size === "49mm") return price_AppleWatchUltra2_49mm
        }
        break
      }
      case "airpods": {
        const sel = selectedProducts[productId] || {}
        const modelo =
          sel.modelo || (product.modeloOptions ? product.modeloOptions[0].modelo : "AirPods 4")
        if (modelo === "AirPods 4") return price_AirPods4
        if (modelo === "AirPods 4 Noise Cancellation") return price_AirPods4_NC
        if (modelo === "Airpods Pro 2") return price_AirPodsPro2
        if (modelo === "AirPods Max") return price_AirPodsMax
        break
      }
      case "apple-pencil": {
        const sel = selectedProducts[productId] || {}
        const modelo =
          sel.modelo || (product.modeloOptions ? product.modeloOptions[0].modelo : "Apple Pencil 2")
        if (modelo === "Apple Pencil 2") return price_ApplePencil2
        if (modelo === "Apple Pencil USB-C") return price_ApplePencilUSBC
        if (modelo === "Apple Pencil Pro") return price_ApplePencilPro
        break
      }
    }

    // Fallback: mantém comportamento anterior se algo não casar
    const storageOption =
      product.storageOptions.find((opt) => opt.size === selectedStorage) ||
      product.storageOptions[0]
    const chipOption =
      product.chipOptions?.find((opt) => opt.name === selectedChip) ||
      (product.chipOptions ? product.chipOptions[0] : { price: 0 })
    const screenOption =
      product.screenOptions?.find((opt) => opt.size === selectedScreen) ||
      (product.screenOptions ? product.screenOptions[0] : { price: 0 })
    return product.basePrice + storageOption.price + chipOption.price + screenOption.price
  }

  const getProductImage = (product: Product, productId: string) => {
    // Apple Watch: lógica já existente
    if (productId === "apple-watch") {
      const sel = selectedProducts[productId] || {}
      const model = sel.storage || product.storageOptions[0].size
      const color = sel.color || product.colorOptions[0]?.name

      // Series 10: imagens por cor
      if (model === "Series 10") {
        if (color === "Rosa")
          return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watch10rosa.png"
        if (color === "Silver")
          return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watch10silver.png"
        if (color === "Jet Black")
          return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watch10jetblack.png"
      }
      // Ultra 2: usar imagem midnight para a cor Preto
      if (model === "Ultra 2") {
        return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watchultramidnight.png"
      }
      // SE (2nd Gen): imagens por cor
      if (model === "SE (2nd Gen)") {
        if (color === "Midnight")
          return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watchsemidnight.png"
        if (color === "Prata" || color === "Silver")
          return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/watchsesilver.png"
      }
    }
    // Apple Pencil: imagem por modelo
    if (productId === "apple-pencil") {
      const sel = selectedProducts[productId] || {}
      const modelo =
        sel.modelo || (product.modeloOptions ? product.modeloOptions[0].modelo : undefined)
      if (modelo === "Apple Pencil 2")
        return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/pencil2.png"
      if (modelo === "Apple Pencil USB-C")
        return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/pencilusbc.png"
      if (modelo === "Apple Pencil Pro")
        return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/pencilpro.png"
    }
    // AirPods: lógica especial para imagens por modelo/cor
    if (productId === "airpods") {
      const sel = selectedProducts[productId] || {}
      const modelo =
        sel.modelo || (product.modeloOptions ? product.modeloOptions[0].modelo : undefined)
      const color = sel.color || "Branco"
      // AirPods 4
      if (modelo === "AirPods 4" || modelo === "AirPods 4 Noise Cancellation") {
        return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpods4.png"
      }
      // AirPods Pro 2
      if (modelo === "Airpods Pro 2") {
        return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpodspro.png"
      }
      // AirPods Max
      if (modelo === "AirPods Max") {
        if (color === "Preto") {
          return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpodsmaxpreto.png"
        }
        if (color === "Estelar") {
          return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpodsmaxestelar.png"
        }
        // fallback
        return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpodsmaxpreto.png"
      }
      // fallback para AirPods 4
      return "https://raw.githubusercontent.com/cloudracdev/images-site-infinite-core-products/refs/heads/main/airpods4.png"
    }
    // Default: pega imagem da cor selecionada
    const selected = selectedProducts[productId]
    const colorOption =
      product.colorOptions.find((opt) => opt.name === selected?.color) || product.colorOptions[0]
    return colorOption.image
  }

  const handleAddToCart = (product: Product, productId: string) => {
    const selected = selectedProducts[productId] || {
      screen: product.screenOptions ? product.screenOptions[0].size : undefined,
      storage: product.storageOptions[0].size,
      color: product.colorOptions[0].name,
      chip: product.chipOptions ? product.chipOptions[0].name : undefined,
    }

    const colorOption =
      product.colorOptions.find((opt) => opt.name === selected.color) || product.colorOptions[0]
    const uniqueId = `${productId}-${selected.storage}-${selected.color}-${Date.now()}`

    addItem({
      id: productId,
      uniqueId: uniqueId,
      name: product.name,
      basePrice: getProductPrice(product, productId),
      selectedStorage: selected.storage,
      selectedColor: selected.color,
      storagePrice: 0,
      quantity: 1,
      image: getProductImage(product, productId),
    })
  }
  return (
    <div className="min-h-screen bg-white">
      <Header onCategorySelect={onCategorySelect} onLogoClick={onBack} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="pt-8">
          {/* Header */}
          <div className="mb-6 flex items-center sm:mb-8">
            <button
              onClick={onBack}
              className="mr-6 flex items-center text-gray-600 transition-colors duration-200 hover:text-black"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
            </button>
            <h1 className="text-4xl font-semibold text-black sm:text-5xl">
              {currentCategory.title}
            </h1>
          </div>

          {/* Products Grid */}
          <div className="animate-fadeInUp grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {currentCategory.products.map((product) => {
              const productId = product.id
              // Padronização: Apple Watch agora utiliza modelo + tamanho igual ao MacBook (modelo = storage, tamanho = tamanho)
              // Para Apple Watch, modelo = storage, tamanho = tamanhoOptions (filtrado pelo modelo)
              const isAppleWatch = productId === "apple-watch"
              // Para Apple Watch, selected.storage = modelo, selected.tamanho = tamanho
              // AirPods: modelo como configuração principal
              const isAirPods = productId === "airpods"
              const selected = selectedProducts[productId] || {
                screen: product.screenOptions ? product.screenOptions[0].size : undefined,
                storage: product.storageOptions[0].size,
                color: product.colorOptions[0].name,
                chip: product.chipOptions ? product.chipOptions[0].name : undefined,
                tamanho: isAppleWatch
                  ? getAppleWatchSizeOptions(product.storageOptions[0].size)[0]
                  : undefined,
                modelo: isAirPods
                  ? product.modeloOptions
                    ? product.modeloOptions[0].modelo
                    : undefined
                  : undefined,
                connectivity: product.connectivityOptions
                  ? product.connectivityOptions[0].type
                  : undefined,
              }
              const isOut =
                product.available === false ||
                (productId === "macbook-air-m3" &&
                  (selected.screen ||
                    (product.screenOptions ? product.screenOptions[0].size : '13"')) === '15"' &&
                  (selected.storage || product.storageOptions[0].size) === "16GB/512GB")

              // Padronização: Apple Watch é tratado como os outros produtos, sem lógica especial
              // Para Apple Watch, obter as opções de tamanho válidas para o modelo selecionado
              let appleWatchSizeOptions: string[] = []
              if (isAppleWatch) {
                const model = selected.storage || product.storageOptions[0].size
                appleWatchSizeOptions = getAppleWatchSizeOptions(model)
              }

              return (
                <div
                  key={productId}
                  className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 ${isOut ? "opacity-60" : "animate-fadeInUp hover:-translate-y-1 hover:shadow-xl"}`}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    {isOut && (
                      <div className="absolute left-2 top-2 z-10 rounded bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                        ESGOTADO
                      </div>
                    )}
                    <img
                      src={getProductImage(product, productId)}
                      alt={product.name}
                      className={`h-full w-full object-cover transition-all duration-500 ${isOut ? "grayscale" : "hover:scale-105"}`}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-1 text-lg font-semibold text-black">{product.name}</h3>
                    <p className="mb-2 text-xs font-medium text-gray-600">LACRADO</p>
                    <p className="mb-3 text-xs leading-relaxed text-gray-600">
                      {product.description}
                    </p>

                    {/* Screen Options */}
                    {product.screenOptions && (
                      <div className="mb-3">
                        <h4 className="mb-1 text-xs font-medium text-gray-700">Tela</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.screenOptions.map((option) => (
                            <button
                              key={option.size}
                              onClick={() => handleScreenChange(productId, option.size)}
                              className={`rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                                selected.screen === option.size
                                  ? "border-black bg-black text-white"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                            >
                              {option.size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Chip Options */}
                    {product.chipOptions && (
                      <div className="mb-3">
                        <h4 className="mb-1 text-xs font-medium text-gray-700">Chip</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.chipOptions.map((option) => (
                            <button
                              key={option.name}
                              onClick={() => handleChipChange(productId, option.name)}
                              className={`rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                                selected.chip === option.name
                                  ? "border-black bg-black text-white"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                            >
                              {option.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Configuração/Modelo */}
                    {/* Apple Pencil: modeloOptions como para AirPods */}
                    {productId === "apple-pencil" ? (
                      <div className="mb-3">
                        <h4 className="mb-1 text-xs font-medium text-gray-700">Modelo</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.modeloOptions.map((option) => (
                            <button
                              key={option.modelo}
                              onClick={() => {
                                setSelectedProducts((prev) => ({
                                  ...prev,
                                  [productId]: {
                                    ...prev[productId],
                                    modelo: option.modelo,
                                    // Garante que sempre tenha cor selecionada
                                    color:
                                      selected.color || product.colorOptions[0]?.name || "Branco",
                                  },
                                }))
                              }}
                              className={`rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                                (selected.modelo || product.modeloOptions[0].modelo) ===
                                option.modelo
                                  ? "border-black bg-black text-white"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                            >
                              {option.modelo}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : isAirPods ? (
                      <div className="mb-3">
                        <h4 className="mb-1 text-xs font-medium text-gray-700">Modelo</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.modeloOptions.map((option) => (
                            <button
                              key={option.modelo}
                              onClick={() => {
                                setSelectedProducts((prev) => ({
                                  ...prev,
                                  [productId]: {
                                    ...prev[productId],
                                    modelo: option.modelo,
                                    // Garante que sempre tenha cor selecionada
                                    color: option.modelo === "AirPods Max" ? "Preto" : "Branco",
                                  },
                                }))
                              }}
                              className={`rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                                (selected.modelo || product.modeloOptions[0].modelo) ===
                                option.modelo
                                  ? "border-black bg-black text-white"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                            >
                              {option.modelo}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="mb-3">
                        <h4 className="mb-1 text-xs font-medium text-gray-700">
                          {isAppleWatch ? "Modelo" : "Configuração"}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {product.storageOptions
                            .filter((option) => {
                              // Para MacBook Air M3, filtrar configurações baseado na tela
                              if (productId === "macbook-air-m3") {
                                const selectedScreen = selected.screen || '13"'
                                if (selectedScreen === '15"') {
                                  return option.size === "16GB/512GB"
                                }
                                // Para 13", mostrar todas as configurações
                                return true
                              }
                              // Para iPad Air (id: 'ipad-air-7'): em 13" só permitir 128GB
                              if (productId === "ipad-air-7") {
                                const selectedScreen = selected.screen || '11"'
                                if (selectedScreen === '13"') {
                                  return option.size === "128GB"
                                }
                                // em 11" permitir 128GB e 256GB
                                return option.size === "128GB" || option.size === "256GB"
                              }
                              // Para MacBook Air M4, mostrar TODAS as configurações sempre
                              const selectedScreen =
                                selected.screen ||
                                (product.screenOptions ? product.screenOptions[0].size : '13"')
                              return selectedScreen === '15"' ? option.size === "16GB/256GB" : true
                            })
                            .filter((option) => {
                              // Para MacBook Pro M4, filtrar configurações baseado na tela e chip
                              if (productId === "macbook-pro-m4") {
                                const selectedScreen = selected.screen || '14"'
                                const selectedChip = selected.chip || "M4"

                                // Tela 14" + Chip M4 = 16/512 e 24/1TB
                                if (selectedScreen === '14"' && selectedChip === "M4") {
                                  return option.size === "16GB/512GB" || option.size === "24GB/1TB"
                                }

                                // Tela 16" + Chip M4 = só 48/512
                                if (selectedScreen === '16"' && selectedChip === "M4") {
                                  return option.size === "48GB/512GB"
                                }

                                // Tela 14" + Chip M4 Pro = só 24/512
                                if (selectedScreen === '14"' && selectedChip === "M4 Pro") {
                                  return option.size === "24GB/512GB"
                                }

                                // Tela 16" + Chip M4 Pro = só 24/512
                                if (selectedScreen === '16"' && selectedChip === "M4 Pro") {
                                  return option.size === "24GB/512GB"
                                }

                                // Tela 14" + Chip M4 Max = só 36/1TB
                                if (selectedScreen === '14"' && selectedChip === "M4 Max") {
                                  return option.size === "36GB/1TB"
                                }

                                // Tela 16" + Chip M4 Max = 36/1TB, 48/1TB, 128GB/2TB
                                if (selectedScreen === '16"' && selectedChip === "M4 Max") {
                                  return (
                                    option.size === "36GB/1TB" ||
                                    option.size === "48GB/1TB" ||
                                    option.size === "128GB/2TB"
                                  )
                                }
                                // Adicione ao array/lista de configurações do MacBook Pro M4 Max 16" polegadas, se houver, ou ajuste conforme padrão de produto acima.
                                // Se houver algum array/lista específica, adicione o novo objeto, exemplo:
                                // {
                                //   modelo: "MacBook Pro M4 Max 16”",
                                //   chip: "M4 Max",
                                //   memoria: "128GB",
                                //   armazenamento: "2TB",
                                //   cor: "Preto Espacial",
                                //   preco: MACBOOK_PRO_M4_MAX_16_128_2TB_PRICE,
                                //   imagem: MACBOOK_PRO_M4_MAX_16_128_2TB_IMAGE
                                // }

                                return false
                              }
                              return true
                            })
                            .map((option) => (
                              <button
                                key={option.size}
                                onClick={() => handleStorageChange(productId, option.size)}
                                className={`rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                                  (selected.storage || product.storageOptions[0].size) ===
                                  option.size
                                    ? "border-black bg-black text-white"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                              >
                                {option.size}
                              </button>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Tamanho (Apple Watch) */}
                    {isAppleWatch && (
                      <div className="mb-3">
                        <h4 className="mb-1 text-xs font-medium text-gray-700">Tamanho</h4>
                        <div className="flex flex-wrap gap-1">
                          {appleWatchSizeOptions.map((sizeOption) => (
                            <button
                              key={sizeOption}
                              onClick={() => {
                                setSelectedProducts((prev) => ({
                                  ...prev,
                                  [productId]: {
                                    ...prev[productId],
                                    tamanho: sizeOption,
                                    // Garante que sempre tenha modelo selecionado
                                    storage: selected.storage || product.storageOptions[0].size,
                                    color: selected.color || product.colorOptions[0].name,
                                  },
                                }))
                              }}
                              className={`rounded-md border px-2 py-1 text-xs transition-all duration-200 ${
                                (selected.tamanho || appleWatchSizeOptions[0]) === sizeOption
                                  ? "border-black bg-black text-white"
                                  : "border-gray-300 hover:border-gray-400"
                              }`}
                            >
                              {sizeOption}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Color Options */}
                    <div className="mb-3">
                      <h4 className="mb-1 text-xs font-medium text-gray-700">Cor</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {(function () {
                          // MACBOOK AIR M4 (15" + 16/256): só Sky Blue e Midnight
                          if (product.id === "macbook-air-m4") {
                            const selScreen =
                              selected.screen ||
                              (product.screenOptions ? product.screenOptions[0].size : '13"')
                            const selStorage = selected.storage || product.storageOptions[0].size
                            if (selScreen === '15"' && selStorage === "16GB/256GB") {
                              const allowed = [
                                { name: "Sky Blue", hex: "#87CEEB" },
                                { name: "Midnight", hex: "#2C2C2C" },
                              ]
                              if (!allowed.some((a) => a.name === selected.color)) {
                                setTimeout(() => {
                                  setSelectedProducts((prev) => ({
                                    ...prev,
                                    [productId]: { ...prev[productId], color: "Sky Blue" },
                                  }))
                                }, 0)
                              }
                              return allowed.map((opt) => (
                                <button
                                  key={opt.name}
                                  onClick={() => handleColorChange(productId, opt.name)}
                                  className={`flex items-center space-x-1.5 rounded-md border px-2 py-1 transition-all duration-200 ${
                                    selected.color === opt.name
                                      ? "border-black bg-gray-50"
                                      : "border-gray-300 hover:border-gray-400"
                                  }`}
                                >
                                  <div
                                    className="h-2.5 w-2.5 rounded-full border border-gray-300"
                                    style={{ backgroundColor: opt.hex }}
                                  />
                                  <span className="text-xs leading-none">{opt.name}</span>
                                </button>
                              ))
                            }
                          }
                          // APPLE WATCH Series 10: lógica especial para cor/preço por tamanho
                          if (isAppleWatch && selected.storage === "Series 10") {
                            // Series 10, cor/tamanho especial
                            let colors: string[] = []
                            let prices: { [color: string]: number } = {}
                            if (selected.tamanho === "42mm") {
                              // Substitui 'Midnight' por 'Jet Black'
                              colors = ["Rosa", "Silver", "Jet Black"]
                              prices = {
                                Rosa: 2400,
                                Silver: 2450,
                                "Jet Black": 2450,
                              }
                            } else if (selected.tamanho === "46mm") {
                              colors = ["Rosa", "Silver", "Jet Black"]
                              prices = {
                                Rosa: 2300,
                                Silver: 2500,
                                "Jet Black": 2600,
                              }
                            }
                            // Garante seleção automática da primeira cor se cor não existe ou não bate
                            let colorToUse = selected.color
                            if (!colors.includes(colorToUse)) {
                              colorToUse = colors[0]
                              // Atualiza seleção para manter visual igual aos outros cards (seleção automática)
                              setTimeout(() => {
                                setSelectedProducts((prev) => ({
                                  ...prev,
                                  [productId]: {
                                    ...prev[productId],
                                    color: colorToUse,
                                  },
                                }))
                              }, 0)
                            }
                            return colors.map((colorName) => (
                              <button
                                key={colorName}
                                onClick={() => handleColorChange(productId, colorName)}
                                className={`flex items-center space-x-1.5 rounded-md border px-2 py-1 transition-all duration-200 ${
                                  selected.color === colorName
                                    ? "border-black bg-gray-50"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                              >
                                <div
                                  className="h-2.5 w-2.5 rounded-full border border-gray-300"
                                  style={{
                                    backgroundColor:
                                      colorName === "Rosa"
                                        ? "#FFC0CB"
                                        : colorName === "Silver"
                                          ? "#C0C0C0"
                                          : colorName === "Jet Black"
                                            ? "#000000"
                                            : "#F5F5F5",
                                  }}
                                />
                                <span className="text-xs leading-none">{colorName}</span>
                              </button>
                            ))
                          }
                          // APPLE WATCH Ultra 2: cor única "Preto"
                          if (isAppleWatch && selected.storage === "Ultra 2") {
                            const colors = ["Preto"]
                            let colorToUse = selected.color
                            if (!colors.includes(colorToUse)) {
                              colorToUse = colors[0]
                              setTimeout(() => {
                                setSelectedProducts((prev) => ({
                                  ...prev,
                                  [productId]: { ...prev[productId], color: colorToUse },
                                }))
                              }, 0)
                            }
                            return colors.map((colorName) => (
                              <button
                                key={colorName}
                                onClick={() => handleColorChange(productId, colorName)}
                                className={`flex items-center space-x-1.5 rounded-md border px-2 py-1 transition-all duration-200 ${
                                  selected.color === colorName
                                    ? "border-black bg-gray-50"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                              >
                                <div
                                  className="h-2.5 w-2.5 rounded-full border border-gray-300"
                                  style={{ backgroundColor: "#2C2C2C" }}
                                />
                                <span className="text-xs leading-none">{colorName}</span>
                              </button>
                            ))
                          }
                          // AirPods: cor depende do modelo selecionado
                          if (isAirPods) {
                            // Determina o modelo selecionado (AirPods 4, AirPods 4 Noise Cancellation, AirPods Max)
                            const modeloSelecionado =
                              selected.modelo ||
                              (product.modeloOptions && product.modeloOptions[0]?.modelo) ||
                              ""
                            if (modeloSelecionado === "AirPods Max") {
                              // Somente para AirPods Max: Preto e Estelar (Estelar igual ao Apple Watch SE: #F7E8CE)
                              const airpodsMaxColors = [
                                { name: "Preto", color: "#000000" },
                                { name: "Estelar", color: "#F7E8CE" },
                              ]
                              return airpodsMaxColors.map((option) => (
                                <button
                                  key={option.name}
                                  onClick={() => handleColorChange(productId, option.name)}
                                  className={`flex items-center space-x-1.5 rounded-md border px-2 py-1 transition-all duration-200 ${
                                    selected.color === option.name
                                      ? "border-black bg-gray-50"
                                      : "border-gray-300 hover:border-gray-400"
                                  }`}
                                >
                                  <div
                                    className="h-2.5 w-2.5 rounded-full border border-gray-300"
                                    style={{ backgroundColor: option.color }}
                                  />
                                  <span className="text-xs leading-none">{option.name}</span>
                                </button>
                              ))
                            } else {
                              // Para AirPods 4 e AirPods 4 Noise Cancellation: só Branco
                              return product.colorOptions.map((option) => (
                                <button
                                  key={option.name}
                                  onClick={() => handleColorChange(productId, option.name)}
                                  className={`flex items-center space-x-1.5 rounded-md border px-2 py-1 transition-all duration-200 ${
                                    selected.color === option.name
                                      ? "border-black bg-gray-50"
                                      : "border-gray-300 hover:border-gray-400"
                                  }`}
                                >
                                  <div
                                    className="h-2.5 w-2.5 rounded-full border border-gray-300"
                                    style={{ backgroundColor: option.hex }}
                                  />
                                  <span className="text-xs leading-none">{option.name}</span>
                                </button>
                              ))
                            }
                          }
                          if (productId === "apple-pencil") {
                            return product.colorOptions.map((option) => (
                              <button
                                key={option.name}
                                onClick={() => handleColorChange(productId, option.name)}
                                className={`flex items-center space-x-1.5 rounded-md border px-2 py-1 transition-all duration-200 ${
                                  selected.color === option.name
                                    ? "border-black bg-gray-50"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                              >
                                <div
                                  className="h-2.5 w-2.5 rounded-full border border-gray-300"
                                  style={{ backgroundColor: option.hex }}
                                />
                                <span className="text-xs leading-none">{option.name}</span>
                              </button>
                            ))
                          }
                          // ====== OUTROS PRODUTOS (lógica original) ======
                          return product.colorOptions
                            .filter((option) => {
                              // Para iPhone 16, filtrar cores baseado no armazenamento selecionado
                              if (productId === "iphone-16" && selected.storage === "256GB") {
                                return option.name !== "Azul"
                              }
                              // Para iPhone 16 Pro, filtrar cores baseado no armazenamento selecionado
                              if (productId === "iphone-16-pro" && selected.storage === "256GB") {
                                return option.name === "Desert" || option.name === "Branco"
                              }
                              // Para MacBook Air M3, filtrar cores baseado na tela e configuração
                              if (productId === "macbook-air-m3") {
                                const selectedScreen = selected.screen || '13"'
                                const selectedStorage = selected.storage || "8GB/256GB"

                                if (selectedScreen === '13"') {
                                  if (selectedStorage === "8GB/256GB") {
                                    return (
                                      option.name === "Cinza Espacial" || option.name === "Midnight"
                                    )
                                  } else if (selectedStorage === "16GB/256GB") {
                                    return option.name === "Prata" || option.name === "Midnight"
                                  } else if (selectedStorage === "16GB/512GB") {
                                    return option.name === "Estelar"
                                  }
                                } else if (selectedScreen === '15"') {
                                  // 15" só tem 16GB/512GB em Midnight
                                  return option.name === "Midnight"
                                }
                              }
                              // Para MacBook Air M4, filtrar cores baseado na configuração
                              if (productId === "macbook-air-m4") {
                                const selectedStorage = selected.storage || "16GB/256GB"
                                if (selectedStorage === "16GB/512GB") {
                                  // 16GB/512GB só tem Sky Blue, Estelar e Midnight
                                  return (
                                    option.name === "Sky Blue" ||
                                    option.name === "Estelar" ||
                                    option.name === "Midnight"
                                  )
                                }
                                // 16GB/256GB e 24GB/512GB têm todas as cores
                                return true
                              }
                              return true
                            })
                            .map((option) => (
                              <button
                                key={option.name}
                                onClick={() => handleColorChange(productId, option.name)}
                                className={`flex items-center space-x-1.5 rounded-md border px-2 py-1 transition-all duration-200 ${
                                  selected.color === option.name
                                    ? "border-black bg-gray-50"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                              >
                                <div
                                  className="h-2.5 w-2.5 rounded-full border border-gray-300"
                                  style={{ backgroundColor: option.hex }}
                                />
                                <span className="text-xs leading-none">{option.name}</span>
                              </button>
                            ))
                        })()}
                      </div>
                    </div>

                    {/* Price and Buy Button */}
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-semibold text-black">
                        {isOut
                          ? "—"
                          : (() => {
                              // Exibe preço correto do modelo selecionado para AirPods
                              if (isAirPods) {
                                const modeloSel =
                                  selected.modelo ||
                                  (product.modeloOptions
                                    ? product.modeloOptions[0].modelo
                                    : undefined)
                                const found = product.modeloOptions?.find(
                                  (opt) => opt.modelo === modeloSel,
                                )
                                return `R$ ${found ? found.price.toLocaleString("pt-BR") : price_AirPods4.toLocaleString("pt-BR")}`
                              }
                              return `R$ ${getProductPrice(product, productId).toLocaleString("pt-BR")}`
                            })()}
                      </span>
                      {isOut && (
                        <span className="ml-2 text-[10px] font-medium uppercase text-red-600">
                          Indisponível no momento
                        </span>
                      )}
                      <button
                        onClick={() => {
                          if (isOut) return
                          // AirPods: adiciona ao carrinho com modelo selecionado
                          if (isAirPods) {
                            const modeloSel =
                              selected.modelo ||
                              (product.modeloOptions ? product.modeloOptions[0].modelo : undefined)
                            const found = product.modeloOptions?.find(
                              (opt) => opt.modelo === modeloSel,
                            )
                            const colorOption =
                              product.colorOptions.find((opt) => opt.name === selected.color) ||
                              product.colorOptions[0]
                            const uniqueId = `${productId}-${modeloSel}-${selected.color}-${Date.now()}`
                            addItem({
                              id: productId,
                              uniqueId: uniqueId,
                              name: modeloSel ? `AirPods - ${modeloSel}` : product.name,
                              basePrice: found ? found.price : price_AirPods4,
                              selectedStorage: modeloSel,
                              selectedColor: selected.color,
                              storagePrice: 0,
                              quantity: 1,
                              image: colorOption.image,
                            })
                          } else {
                            handleAddToCart(product, productId)
                          }
                        }}
                        disabled={isOut}
                        className={`flex items-center rounded-full px-3 py-1.5 transition-colors duration-300 ${isOut ? "cursor-not-allowed bg-gray-300 text-gray-500" : "bg-black text-white hover:bg-gray-900"}`}
                      >
                        <ShoppingBag className="mr-1.5 h-3 w-3" />
                        <span className="text-xs font-medium">Comprar</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mb-8 mt-16 text-center">
            <a
              href="https://wa.me/558496398187?text=Olá! Não encontrei o produto que procuro no site. Podem me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black underline transition-colors duration-200 hover:text-gray-600"
            >
              Não encontrou seu produto? Fale com a gente
            </a>
          </div>
          {/* Warranty Information */}
          <div className="mb-12 text-center">
            <p className="text-xs text-gray-500">
              Aparelhos lacrados têm 1 ano de garantia Apple. Produtos à vista para pagamento no PIX
              ou cartão de crédito parcelado.
            </p>
          </div>

          {/* Seminovos Section */}
          <SeminovosSection variant="category" />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
