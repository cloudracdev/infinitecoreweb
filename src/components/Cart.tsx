import { useCart } from "@/hooks/useCart"
import { ChevronDown, ChevronUp, Info, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import React, { useState } from "react"

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, closeCart, getTotalItems, getTotalPrice } = useCart()
  const [deliveryOption, setDeliveryOption] = useState<"entrega" | "retirada">("entrega")
  const [cep, setCep] = useState("")
  const [includeInvoice, setIncludeInvoice] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "cartao">("pix")
  const [installments, setInstallments] = useState(1)
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false)
  const [showPaymentInfo, setShowPaymentInfo] = useState(false)
  const [showInvoiceInfo, setShowInvoiceInfo] = useState(false)

  if (!state.isOpen) return null

  const handleQuantityChange = (uniqueId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(uniqueId)
    } else {
      updateQuantity(uniqueId, newQuantity)
    }
  }

  const getInstallmentValue = (totalValue: number, installmentCount: number) => {
    const rates = {
      1: 1.0438,
      2: 1.0648,
      3: 1.0754,
      4: 1.0859,
      5: 1.0965,
      6: 1.1071,
      7: 1.144,
      8: 1.155,
      9: 1.1662,
      10: 1.1773,
      11: 1.1886,
      12: 1.198,
    }
    const rate = rates[installmentCount as keyof typeof rates] || 1
    return Math.round((totalValue * rate) / installmentCount)
  }

  const handleCheckout = () => {
    // Create WhatsApp message with cart items (without prices)
    const items = state.items
      .map(
        (item) =>
          `• ${item.name}\n  - Configuração: ${item.selectedStorage}\n  - Cor: ${item.selectedColor}\n  - Quantidade: ${item.quantity}`,
      )
      .join("\n")

    const deliveryInfo =
      deliveryOption === "entrega"
        ? `📦 *Forma de recebimento:* Entrega\n📍 *CEP:* ${cep || "Não informado"}`
        : `📦 *Forma de recebimento:* Retirada em Curitiba/PR ou Natal/RN`

    const invoiceInfo = includeInvoice
      ? `📄 *Nota Fiscal:* Sim (7% sobre o valor total)`
      : `📄 *Nota Fiscal:* Não`

    const paymentInfo =
      paymentMethod === "pix"
        ? `💳 *Forma de pagamento:* PIX à vista`
        : `💳 *Forma de pagamento:* Cartão de crédito em ${installments}x`

    const message = `Olá! Gostaria de solicitar os seguintes produtos:\n\n${items}\n\n---\n\n${deliveryInfo}\n\n${paymentInfo}\n\n${invoiceInfo}`

    window.open(`https://wa.me/558496398187?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 z-50 flex h-full w-full transform flex-col bg-white shadow-2xl transition-transform duration-300 sm:w-96">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-6 w-6 text-black" />
            <h2 className="text-xl font-semibold text-black">Carrinho ({getTotalItems()})</h2>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="py-12 text-center">
              <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-300" />
              <h3 className="mb-2 text-lg font-medium text-gray-900">Seu carrinho está vazio</h3>
              <p className="text-gray-500">Adicione produtos para começar suas compras</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => {
                const itemTotal = item.basePrice * item.quantity

                return (
                  <div key={item.uniqueId} className="rounded-2xl bg-gray-50 p-4">
                    <div className="flex space-x-4">
                      {/* Product Image */}
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-white">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 truncate text-sm font-medium text-black">
                          {item.name}
                        </h3>
                        <div className="space-y-1 text-xs text-gray-600">
                          <p>
                            {item.selectedStorage} • {item.selectedColor}
                          </p>
                          <p className="font-medium">R$ {item.basePrice.toLocaleString("pt-BR")}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleQuantityChange(item.uniqueId, item.quantity - 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors duration-200 hover:bg-gray-100"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.uniqueId, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 transition-colors duration-200 hover:bg-gray-100"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-semibold text-black">
                              R$ {itemTotal.toLocaleString("pt-BR")}
                            </span>
                            <button
                              onClick={() => removeItem(item.uniqueId)}
                              className="flex-shrink-0 rounded-full p-1 transition-colors duration-200 hover:bg-red-100"
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="space-y-4 border-t border-gray-100 p-6">
            {/* Delivery Options - Collapsible */}
            <div className="space-y-2">
              <button
                onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-sm font-medium text-gray-900">Como deseja receber?</h3>
                {showDeliveryInfo ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {showDeliveryInfo && (
                <div className="space-y-2 pl-2">
                  <label className="flex cursor-pointer items-center space-x-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="entrega"
                      checked={deliveryOption === "entrega"}
                      onChange={(e) => setDeliveryOption(e.target.value as "entrega")}
                      className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-xs text-gray-700">Entrega (Todo o Brasil)</span>
                  </label>

                  {deliveryOption === "entrega" && (
                    <div className="ml-7">
                      <input
                        type="text"
                        placeholder="Digite seu CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-2 py-1 text-xs focus:border-transparent focus:ring-1 focus:ring-black"
                      />
                    </div>
                  )}

                  <label className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="delivery"
                        value="retirada"
                        checked={deliveryOption === "retirada"}
                        onChange={(e) => setDeliveryOption(e.target.value as "retirada")}
                        className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                      />
                      <span className="text-xs text-gray-700">
                        Retirada - Curitiba/PR ou Natal/RN
                      </span>
                    </div>
                    <div className="group relative">
                      <Info className="h-3 w-3 cursor-help text-gray-400" />
                      <div className="pointer-events-none absolute bottom-full right-0 mb-2 w-48 rounded-lg bg-black p-2 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        Pagamento: 20% para pedido, 80% na retirada. Desistência: até 90 dias para
                        devolução.
                      </div>
                    </div>
                  </label>
                </div>
              )}
            </div>

            {/* Payment Method - Collapsible */}
            <div className="space-y-2 border-t border-gray-100 pt-3">
              <button
                onClick={() => setShowPaymentInfo(!showPaymentInfo)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-sm font-medium text-gray-900">Forma de pagamento</h3>
                {showPaymentInfo ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {showPaymentInfo && (
                <div className="space-y-2 pl-2">
                  <label className="flex cursor-pointer items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="pix"
                      checked={paymentMethod === "pix"}
                      onChange={(e) => setPaymentMethod(e.target.value as "pix")}
                      className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-xs text-gray-700">PIX à vista</span>
                  </label>

                  <label className="flex cursor-pointer items-center space-x-3">
                    <input
                      type="radio"
                      name="payment"
                      value="cartao"
                      checked={paymentMethod === "cartao"}
                      onChange={(e) => setPaymentMethod(e.target.value as "cartao")}
                      className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-xs text-gray-700">Cartão de crédito</span>
                  </label>

                  {paymentMethod === "cartao" && (
                    <div className="ml-7">
                      <select
                        value={installments}
                        onChange={(e) => setInstallments(Number(e.target.value))}
                        className="w-full rounded-md border border-gray-300 px-2 py-1 text-xs focus:border-transparent focus:ring-1 focus:ring-black"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <option key={num} value={num}>
                            {num}x R${" "}
                            {getInstallmentValue(getTotalPrice(), num).toLocaleString("pt-BR")}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Invoice Option - Collapsible */}
            <div className="space-y-2 border-t border-gray-100 pt-3">
              <button
                onClick={() => setShowInvoiceInfo(!showInvoiceInfo)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-sm font-medium text-gray-900">Nota Fiscal</h3>
                {showInvoiceInfo ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              {showInvoiceInfo && (
                <div className="pl-2">
                  <label className="flex cursor-pointer items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={includeInvoice}
                      onChange={(e) => setIncludeInvoice(e.target.checked)}
                      className="h-3 w-3 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-xs text-gray-700">
                      Emitir Nota Fiscal <span className="text-gray-500">(+7%)</span>
                    </span>
                  </label>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-lg font-semibold text-black">Total</span>
              <span className="text-xl font-bold text-black">
                R$ {getTotalPrice().toLocaleString("pt-BR")}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full rounded-xl bg-black py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-900"
              >
                Solicitar no WhatsApp
              </button>
              <button
                onClick={closeCart}
                className="w-full rounded-xl border border-gray-300 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-50"
              >
                Continuar comprando
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
