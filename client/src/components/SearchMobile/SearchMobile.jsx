import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack, IoIosSearch,IoMdClose } from "react-icons/io";

function SearchMobile({ isOpen, onClose }) {
    const [searchQuery, setSearchQuery] = useState("");
    const inputRef = useRef(null);

    const discoveryTags = ["Vintage Blouse", "Baggy Pants", "Office Siren", "Coquette", "99 Items", "Denim"];

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => inputRef.current);
        } else {
            document.body.style.overflow = 'unset';
            setSearchQuery(""); // Reset query on close
        }
    }, [isOpen]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        // Add your search logic here (e.g., navigate to search results page)
    };

    return (
        <div className={`fixed inset-0 z-[2000] bg-white transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
            {/* --- Search Header --- */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-100">
                <button onClick={onClose} className="p-2">
                    <IoIosArrowBack className="text-2xl text-black" />
                </button>
                
                <form onSubmit={handleSearch} className="flex-1 flex items-center bg-gray-100 rounded-full pl-6 px-2 py-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Shorts"
                        className="bg-transparent w-full outline-none text-sm font-light italic"
                    />
                    <div className='flex items-center gap-1'>
                        {searchQuery &&(
                            <button
                                type="button"
                                onClick={()=> setSearchQuery("")}
                                className='p-2 text-gray-400 hover:text-black transition-colors'
                            >
                                <IoMdClose className="text-xl bg-gray-500 text-white rounded-full p-1"/>
                            </button>
                        )}
                        <button
                            type='button'
                            className='bg-black text-white py-2 px-4  rounded-full hover:bg-pink-500 transition-all shadow-sm'
                        >
                            <IoIosSearch className='text-xl '/>
                        </button>
                    </div>
                </form>
            </div>

            {/* --- Search Discovery Section --- */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                        Search Discovery
                    </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {discoveryTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => {
                                setSearchQuery(tag);
                                // Optional: auto-trigger search on tag click
                            }}
                            className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600 hover:bg-black hover:text-white transition-all"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* --- Recent Searches Placeholder --- */}
                {searchQuery.length === 0 && (
                    <div className="mt-10 text-center">
                        <IoIosSearch className="text-5xl text-gray-100 mx-auto mb-2" />
                        <p className="text-gray-300 italic text-sm font-light">
                            Try searching for styles or items
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchMobile;