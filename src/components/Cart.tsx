import React from 'react';
import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, closeCart, getTotalItems, getTotalPrice } = useCart();
  const [deliveryOption, setDeliveryOption] = useState<'entrega' | 'retirada'>('entrega');
  const [cep, setCep] = useState('');
  const [includeInvoice, setIncludeInvoice] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao'>('pix');
  const [installments, setInstallments] = useState(1);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [showInvoiceInfo, setShowInvoiceInfo] = useState(false);

  if (!state.isOpen) return null;

  const handleQuantityChange = (uniqueId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(uniqueId);
    } else {
      updateQuantity(uniqueId, newQuantity);
    }
  };

  const getInstallmentValue = (totalValue: number, installmentCount: number) => {
    const rates = {
      1: 1.0438, 2: 1.0648, 3: 1.0754, 4: 1.0859, 5: 1.0965, 6: 1.1071,
      7: 1.1440, 8: 1.1550, 9: 1.1662, 10: 1.1773, 11: 1.1886, 12: 1.1980
    };
    const rate = rates[installmentCount as keyof typeof rates] || 1;
    return Math.round((totalValue * rate) / installmentCount);
  };

  const handleCheckout = () => {
    // Create WhatsApp message with cart items (without prices)
    const items = state.items.map(item => 
      `• ${item.name}\n  - Configuração: ${item.selectedStorage}\n  - Cor: ${item.selectedColor}\n  - Quantidade: ${item.quantity}`
    ).join('\n');
    
    const deliveryInfo = deliveryOption === 'entrega' 
      ? `📦 *Forma de recebimento:* Entrega\n📍 *CEP:* ${cep || 'Não informado'}`
      : `📦 *Forma de recebimento:* Retirada em Curitiba/PR ou Natal/RN`;
    
    const invoiceInfo = includeInvoice 
      ? `📄 *Nota Fiscal:* Sim (7% sobre o valor total)`
      : `📄 *Nota Fiscal:* Não`;
    
    const paymentInfo = paymentMethod === 'pix' 
      ? `💳 *Forma de pagamento:* PIX à vista`
      : `💳 *Forma de pagamento:* Cartão de crédito em ${installments}x`;
    
    const message = `Olá! Gostaria de solicitar os seguintes produtos:\n\n${items}\n\n---\n\n${deliveryInfo}\n\n${paymentInfo}\n\n${invoiceInfo}`;
    
    window.open(`https://wa.me/558496398187?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-6 h-6 text-black" />
            <h2 className="text-xl font-semibold text-black">
              Carrinho ({getTotalItems()})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Seu carrinho está vazio
              </h3>
              <p className="text-gray-500">
                Adicione produtos para começar suas compras
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => {
                const itemTotal = item.basePrice * item.quantity;

                return (
                  <div key={item.uniqueId} className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex space-x-4">
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-black text-sm mb-1 truncate">
                          {item.name}
                        </h3>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>{item.selectedStorage} • {item.selectedColor}</p>
                          <p className="font-medium">
                            R$ {item.basePrice.toLocaleString('pt-BR')}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleQuantityChange(item.uniqueId, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.uniqueId, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-semibold text-black">
                              R$ {itemTotal.toLocaleString('pt-BR')}
                            </span>
                            <button
                              onClick={() => removeItem(item.uniqueId)}
                              className="p-1 hover:bg-red-100 rounded-full transition-colors duration-200 flex-shrink-0"
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-100 p-6 space-y-4">
            {/* Delivery Options - Collapsible */}
            <div className="space-y-2">
              <button
                onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-sm font-medium text-gray-900">Como deseja receber?</h3>
                {showDeliveryInfo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {showDeliveryInfo && (
              <div className="space-y-2 pl-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="delivery"
                    value="entrega"
                    checked={deliveryOption === 'entrega'}
                    onChange={(e) => setDeliveryOption(e.target.value as 'entrega')}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <span className="text-xs text-gray-700">Entrega (Todo o Brasil)</span>
                </label>
                
                {deliveryOption === 'entrega' && (
                  <div className="ml-7">
                    <input
                      type="text"
                      placeholder="Digite seu CEP"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-transparent"
                    />
                  </div>
                )}
                
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="delivery"
                    value="retirada"
                    checked={deliveryOption === 'retirada'}
                    onChange={(e) => setDeliveryOption(e.target.value as 'retirada')}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                    <span className="text-xs text-gray-700">Retirada - Curitiba/PR ou Natal/RN</span>
                  </div>
                  <div className="group relative">
                    <Info className="w-3 h-3 text-gray-400 cursor-help" />
                    <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      Pagamento: 20% para pedido, 80% na retirada. Desistência: até 90 dias para devolução.
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
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-sm font-medium text-gray-900">Forma de pagamento</h3>
                {showPaymentInfo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {showPaymentInfo && (
              <div className="space-y-2 pl-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'pix')}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <span className="text-xs text-gray-700">PIX à vista</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cartao"
                    checked={paymentMethod === 'cartao'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'cartao')}
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <span className="text-xs text-gray-700">Cartão de crédito</span>
                </label>
                
                {paymentMethod === 'cartao' && (
                  <div className="ml-7">
                    <select
                      value={installments}
                      onChange={(e) => setInstallments(Number(e.target.value))}
                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:border-transparent"
                    >
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                        <option key={num} value={num}>
                          {num}x R$ {getInstallmentValue(getTotalPrice(), num).toLocaleString('pt-BR')}
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
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-sm font-medium text-gray-900">Nota Fiscal</h3>
                {showInvoiceInfo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {showInvoiceInfo && (
              <div className="pl-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeInvoice}
                  onChange={(e) => setIncludeInvoice(e.target.checked)}
                    className="w-3 h-3 text-black border-gray-300 rounded focus:ring-black"
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
                R$ {getTotalPrice().toLocaleString('pt-BR')}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors duration-300 text-sm"
              >
                Solicitar no WhatsApp
              </button>
              <button
                onClick={closeCart}
                className="w-full border border-gray-300 text-black py-2 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 text-sm"
              >
                Continuar comprando
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;