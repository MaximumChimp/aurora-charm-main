import React, { useEffect } from 'react';
import { IoMdClose, IoMdHeart } from "react-icons/io";
import { BiCartAdd } from "react-icons/bi";
import Woman from '../../assets/images/woman.png'; 

function WishList({ isOpen, onClose }) {
    
    // Lock scroll when wishlist is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const items = [
        { id: 1, name: "Vintage Floral Blouse", price: 180, size: "S-M" },
        { id: 2, name: "Ribbed Knit Top", price: 120, size: "M" },
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

            {/* Wishlist Drawer */}
            <aside 
                className={`absolute top-0 right-0 h-full w-full sm:w-[400px] bg-white transition-transform duration-500 ease-in-out flex flex-col ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <IoMdHeart className="text-pink-500 text-xl" />
                        <span className="font-black italic uppercase tracking-tighter text-lg">Wishlist</span>
                    </div>
                    <IoMdClose className="text-3xl cursor-pointer hover:text-pink-500 transition-colors" onClick={onClose} />
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                    {items.length > 0 ? (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 group">
                                {/* Image Container - Removed grayscale classes */}
                                <div className="w-24 h-32 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0 relative">
                                    <img 
                                        src={Woman} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    <div className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-pink-500 shadow-sm">
                                        <IoMdHeart className="text-sm" />
                                    </div>
                                </div>

                                {/* Item Info */}
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-tight leading-tight">{item.name}</h3>
                                        <div className="flex items-center gap-3 mt-1">
                                            <p className="font-black italic text-gray-900">₱{item.price}</p>
                                            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full uppercase font-bold text-gray-500 tracking-tighter border border-gray-200">
                                                Size: {item.size}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-pink-500 transition-colors shadow-sm">
                                   
                                        View Item
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-300">
                            <IoMdHeart className="text-6xl mb-4 opacity-10" />
                            <p className="italic uppercase tracking-widest text-sm text-center">Your wishlist is empty</p>
                        </div>
                    )}
                </div>

                {/* Bottom Footer */}
                <div className="p-6 border-t border-gray-100">
                    <button 
                        onClick={onClose}
                        className="w-full border-2 border-black py-4  uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    >
                        Keep Browsing
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default WishList;