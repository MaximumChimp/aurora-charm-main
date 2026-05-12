import React, { useEffect } from 'react';
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Woman from '../../assets/images/woman.png'; 

function Cart({ isOpen, onClose }) {
    
    // Lock scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Added 'size' to the data
    const cartItems = [
        { id: 1, name: "Premium Vintage Blouse", price: 150, qty: 1, size: "S-M" },
        { id: 2, name: "Baggy Denim Pants", price: 250, qty: 1, size: "L" },
    ];

    return (
        <div className={`fixed inset-0 z-[2000] transition-all duration-300 ${
            isOpen ? "visible" : "invisible pointer-events-none"
        }`}>
            {/* Overlay */}
            <div 
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
            />

            {/* Cart Drawer */}
            <aside 
                className={`absolute top-0 right-0 h-full w-full sm:w-[400px] bg-white transition-transform duration-500 ease-in-out flex flex-col ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <HiOutlineShoppingBag className="text-xl" />
                        <span className="font-black italic uppercase tracking-tighter text-lg">My Cart</span>
                        <span className="text-xs bg-black text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">2</span>
                    </div>
                    <IoMdClose className="text-3xl cursor-pointer hover:rotate-90 transition-transform" onClick={onClose} />
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-6">
                                {/* Image Container - Removed grayscale */}
                                <div className="w-20 h-24 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                                    <img src={Woman} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-tight leading-tight">{item.name}</h3>
                                        {/* Added Size badge */}
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-[9px] bg-gray-100 px-2 py-0.5 rounded-full uppercase font-bold text-gray-500 tracking-tighter border border-gray-200">
                                                Size: {item.size}
                                            </span>
                                            <p className="text-[10px] text-gray-400 italic">Vintage</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center border border-gray-200 rounded-full px-2 py-0.5">
                                            <button className="p-1 hover:text-pink-500 transition-colors"><IoMdRemove className="text-xs" /></button>
                                            <span className="px-3 text-xs font-bold">{item.qty}</span>
                                            <button className="p-1 hover:text-pink-500 transition-colors"><IoMdAdd className="text-xs" /></button>
                                        </div>
                                        <span className="font-black italic text-pink-500">₱{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-300">
                            <HiOutlineShoppingBag className="text-6xl mb-4 opacity-20" />
                            <p className="italic uppercase tracking-widest text-sm text-center">Your cart is empty</p>
                            <button onClick={onClose} className="mt-4 text-xs font-bold underline text-black">Start Shopping</button>
                        </div>
                    )}
                </div>

                {/* Checkout Section */}
                <div className="p-6 bg-white border-t border-gray-100 space-y-4">
                    <div className="flex justify-between items-center px-2">
                        <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                        <span className="text-xl font-black italic">₱400.00</span>
                    </div>
                    <p className="text-[10px] text-gray-400 italic text-center">Shipping fee depends on your location.</p>
                    <button className="w-full bg-black text-white py-4  uppercase tracking-widest hover:bg-pink-500 transition-colors shadow-lg">
                        Proceed to Checkout
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default Cart;