import React, { useState, useEffect } from 'react';
import Woman from '../../assets/images/Woman.png';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function CategoriesDisplay() {
    // Slider Logic
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderImages = [Woman, Woman, Woman]; 

    useEffect(() => {
        const timer = setInterval(() => {
            setSliderIndex((prev) => (prev + 1) % sliderImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    // Product Logic
    const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
    const [visibleCount, setVisibleCount] = useState(8);

    const showMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    return (
        <div className='flex flex-col items-center w-full max-w-7xl mx-auto space-y-8 pt-4 px-4 md:px-6 hide-scrollbar overflow-x-hidden'>
            
            {/* --- 1. HERO SECTION (TEXT BROUGHT CLOSER) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center w-full py-4 bg-white rounded-sm">
    
{/* Center: Slider - Now matches the height of the side columns on desktop */}
<div className="relative w-full md:h-full md:aspect-auto aspect-[16/9] overflow-hidden rounded-sm bg-gray-100 order-1 md:order-2 shadow-lg">
    {sliderImages.map((img, index) => (
        <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === sliderIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <img src={img} alt="Promo" className="w-full h-full object-cover" />
            {/* Subtle bottom vignette to make indicators more visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
    ))}

    {/* Slider Indicators */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {sliderImages.map((_, i) => (
            <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-300 ${
                    i === sliderIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'
                }`} 
            />
        ))}
    </div>
</div>
    {/* Bottom Section on Mobile: 2 Columns for Links */}
    {/* Using a nested grid for mobile to keep them side-by-side, then standard block for desktop */}
<div className="grid grid-cols-2 md:contents order-2">
    
    {/* --- Left Column of Links --- */}
    <div className="flex flex-col space-y-4 md:order-1 md:pr-4 lg:pr-8">
        {[
            { title: "New Arrivals", sub: "Fresh from bale" },
            { title: "All under 99", sub: "Budget finds" }
        ].map((link, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center md:items-end w-full">
                {/* Clean Rectangle Container */}
                <div className="relative w-full h-20 md:h-24 flex items-center justify-center md:justify-end px-6 overflow-hidden rounded-sm shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-lg">
                    {/* Background Image */}
                    <img 
                        src={Woman} 
                        alt={link.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Fading Black Overlay (Right to Left) */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90"></div>

                    <div className="relative z-10 text-center md:text-right">
                        <span className="block text-sm md:text-lg font-black italic tracking-tighter text-white uppercase leading-none group-hover:text-pink-400 transition-colors">
                            {link.title}
                        </span>
                    </div>
                </div>
                <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-2 mr-2">
                    {link.sub}
                </span>
            </div>
        ))}
    </div>

    {/* --- Right Column of Links --- */}
    <div className="flex flex-col space-y-4 md:order-3 md:pl-4 lg:pl-8">
        {[
            { title: "Branded", sub: "Premium Selection" },
            { title: "Collections", sub: "Curated Styles" }
        ].map((link, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center md:items-start w-full">
                {/* Clean Rectangle Container */}
                <div className="relative w-full h-20 md:h-24 flex items-center justify-center md:justify-start px-6 overflow-hidden rounded-sm shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-lg">
                    {/* Background Image */}
                    <img 
                        src={Woman} 
                        alt={link.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Fading Black Overlay (Left to Right) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90"></div>

                    <div className="relative z-10 text-center md:text-left">
                        <span className="block text-sm md:text-lg font-black italic tracking-tighter text-white uppercase leading-none group-hover:text-pink-400 transition-colors">
                            {link.title}
                        </span>
                    </div>
                </div>
                <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-2 ml-2">
                    {link.sub}
                </span>
            </div>
        ))}
    </div>
</div>
</div>

{/* --- 2. CIRCLE CATEGORIES --- */}
<div className="grid grid-cols-4 md:grid-cols-4 gap-3 sm:gap-6 justify-items-center w-full py-6">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div key={item} className='group flex flex-col items-center cursor-pointer'>
            {/* The Border Container */}
            <div className='relative overflow-hidden rounded-full p-1 border-2 border-transparent group-hover:border-pink-200 transition-all duration-500 w-fit h-fit'>
                <img 
                    src={Woman} 
                    alt="Category" 
                    /* Mobile: w-16 h-16 (64px)
                       Small Tablet: w-24 h-24 (96px)
                       Desktop: w-32 h-32 (128px)
                    */
                    className='w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover transition-transform duration-500 group-hover:scale-110' 
                />
            </div>
            <span className='mt-2 font-semibold text-gray-700 text-xs sm:text-[16px] tracking-wide group-hover:text-pink-500 transition-colors'>
                Woman
            </span>
        </div>
    ))}
</div>

            {/* --- 3. BENTO DEALS --- */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <div className='bg-gray-50/50 rounded-sm p-4 border border-gray-100 hover:shadow-md transition-all'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-xl tracking-tight text-gray-800 uppercase italic'>Trendy</h2>
                        <button className='p-1.5 bg-white rounded-full shadow-sm hover:bg-black hover:text-white transition-all'><IoIosArrowForward /></button>
                    </div>
                    <div className='flex justify-between gap-2'>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className='flex-1'>
                                <div className='group overflow-hidden rounded-sm mb-2'>
                                    <img src={Woman} alt="" className='w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500' />
                                </div>
                                <div className='flex items-baseline gap-0.5'><span className='text-xs font-medium text-pink-500'>₱</span><span className='font-bold text-md text-gray-900'>100</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='bg-yellow-50/50 rounded-sm p-4 border border-yellow-100 hover:shadow-md transition-all'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='font-bold text-xl tracking-tight text-gray-800 uppercase italic'>Super Deals</h2>
                        <button className='p-1.5 bg-white rounded-full shadow-sm hover:bg-black hover:text-white transition-all'><IoIosArrowForward /></button>
                    </div>
                    <div className='flex justify-between gap-2'>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className='flex-1'>
                                <div className='group overflow-hidden rounded-sm mb-2'>
                                    <img src={Woman} alt="" className='w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500' />
                                </div>
                                <div className='flex items-baseline gap-0.5'><span className='text-xs font-medium text-red-500'>₱</span><span className='font-bold text-md text-red-500'>100</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- 4. DAILY FINDS SECTION --- */}
            <div className='w-full space-y-6 pb-6 sm:pt-2 md:pt-6'>
                <div className='group relative overflow-hidden  rounded-sm py-2 px-4 cursor-pointer text-center shadow-md border-b-2 border-black'>
                    <span className='font-bold text-sm tracking-[0.2em] text-black block'>DAILY FINDS</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                    {allItems.slice(0, visibleCount).map((item) => (
                        <div key={item} className="cursor-pointer">
                            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 mb-2">
                                <img src={Woman} alt="Product" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <h3 className="text-xs text-gray-500 font-medium truncate hover:text-pink-500 transition-colors text-left uppercase tracking-tight">Premium Vintage Blouse</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-0.5">
                                        <span className="text-[10px] font-semibold text-gray-400">₱</span>
                                        <span className="font-bold text-lg text-gray-900 leading-none">150</span>
                                    </div>
                                    <button className="p-1.5 bg-black text-white rounded-full hover:bg-pink-500 transition-colors shadow-sm"><IoCartOutline className="text-sm" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < allItems.length && (
                    <div className="flex justify-center pt-4">
                        <button onClick={showMore} className="flex items-center gap-2 px-8 py-2.5 font-bold text-black border-2 border-black rounded-sm hover:bg-black hover:text-white transition-colors duration-200 text-sm">
                            <span>VIEW MORE</span>
                            <IoIosArrowDown />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CategoriesDisplay;