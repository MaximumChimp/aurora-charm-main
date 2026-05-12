import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Woman from '../../assets/images/woman.png'; 

function Sidebar({ isOpen, onClose }) {
    const [selectedTab, setSelectedTab] = useState("All");
    const categories = ["All", "Women", "Kids"];
    
    // Define the content for each tab
    const menuData = {
        All: [
            { name: "Just for you", path: "#" },
            { name: "New In", path: "#" },
            { name: "Super Deals", path: "#", isRed: true },
            { name: "Premium Collection", path: "#" }
        ],
        Women: [
            { name: "Blouses", path: "#" },
            { name: "T-shirts", path: "#" },
            { name: "Pants", path: "#" },
            { name: "Shorts", path: "#" }
        ],
        Kids: [
            { name: "T-Shirts", path: "#" },
            { name: "Shorts", path: "#" },
            { name: "Blouse", path: "#" }
        ]
    };

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setSelectedTab("All");
            }, 500); 
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

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

            {/* Sidebar Aside */}
            <aside 
                className={`absolute top-0 left-0 h-full w-full bg-white transition-transform duration-500 ease-in-out flex flex-col ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-end mb-6 bg-white flex-shrink-0">
                    <IoMdClose 
                        className="text-4xl cursor-pointer text-white bg-black hover:text-pink-500 transition-colors" 
                        onClick={onClose} 
                    />
                </div>

                {/* Main Content Area */}
                <div className="px-6 flex-1 flex flex-col min-h-0 bg-white">
                    
                    {/* Category Tabs */}
                    <div className="flex flex-row items-center justify-between border-b border-gray-100 flex-shrink-0">
                        {categories.map((cat) => (
                            <button 
                                key={cat}
                                className={`flex-1 text-center pb-4 text-sm tracking-widest uppercase transition-all relative
                                    ${selectedTab === cat ? 'text-black font-semibold' : 'text-gray-400'}`}
                                onClick={() => setSelectedTab(cat)}
                            >
                                {cat}
                                {selectedTab === cat && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Menu Items Based on selectedTab */}
                    <div className="mt-8 flex flex-col space-y-4 flex-1 overflow-y-auto no-scrollbar pb-10">
                        {menuData[selectedTab].map((link, index) => (
                            <a 
                                key={index}
                                href={link.path} 
                                className="flex items-center gap-5 group py-1"
                                onClick={onClose}
                            >
                                <div className="w-14 h-14 rounded-full border border-gray-100 overflow-hidden flex-shrink-0 shadow-sm">
                                    <img 
                                        src={Woman} 
                                        alt={link.name} 
                                        className="w-full h-full object-cover transition-all duration-300" 
                                    />
                                </div>
                                <span className={`text-xl italic uppercase tracking-tighter font-light
                                    ${link.isRed ? 'text-red-500' : 'text-black'} group-hover:text-pink-500 transition-colors`}>
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 w-full flex justify-around text-[10px] tracking-widest text-gray-400 uppercase border-t border-gray-50 bg-white">
                    <span className="cursor-pointer hover:text-black">About</span>
                    <span className="cursor-pointer hover:text-black">Help</span>
                    <span className="cursor-pointer hover:text-black">Privacy</span>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;