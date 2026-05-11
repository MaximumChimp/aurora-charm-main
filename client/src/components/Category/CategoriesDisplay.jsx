import Woman from '../../assets/images/Woman.png'
import { IoIosArrowForward } from "react-icons/io";

function CategoriesDisplay() {
    return (
        <div className='flex flex-col items-center w-full max-w-7xl mx-auto space-y-12 p-6'>
            
            {/* --- 1. Circle Categories Navigation --- */}
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-8 md:gap-16 justify-items-center">
                {/* Each Item */}
                <div className='group flex flex-col items-center cursor-pointer'>
                    <div className='relative overflow-hidden rounded-full p-1 border-2 border-transparent group-hover:border-pink-200 transition-all duration-500'>
                        <img 
                            src={Woman} 
                            alt="Woman"
                            className='rounded-full w-20 h-20 md:w-28 md:h-28 object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>
                    <span className='mt-3 font-medium text-gray-600 text-sm tracking-wide group-hover:text-pink-500 transition-colors'>Woman</span>
                </div>
                {/* Repeat the block above for other categories... */}
            </div>

            {/* --- 2. Bento Style Deal Sections --- */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                
                {/* Trendy Card */}
                <div className='bg-gray-50/50 rounded-3xl p-6 border border-gray-100 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='font-bold text-2xl tracking-tight text-gray-800'>Trendy</h2>
                        <button className='p-2 bg-white rounded-full shadow-sm hover:bg-pink-500 hover:text-white transition-all'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div className='flex justify-between gap-3'>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className='group cursor-pointer'>
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={Woman} alt="" className='w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500' />
                                </div>
                                <div className='flex items-baseline gap-0.5'>
                                    <span className='text-xs font-medium text-pink-500'>₱</span>
                                    <span className='font-bold text-lg text-gray-900'>100</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Super Deals Card */}
                <div className='bg-yellow-50/50 rounded-3xl p-6 border border-yellow-100 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='font-bold text-2xl tracking-tight text-gray-800'>Super Deals</h2>
                        <button className='p-2 bg-white rounded-full shadow-sm hover:bg-yellow-500 hover:text-white transition-all'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <div className='flex justify-between gap-3'>
                        {[1, 2, 3].map((item) => (
                            <div key={item} className='group cursor-pointer'>
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={Woman} alt="" className='w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500' />
                                </div>
                                <div className='flex items-baseline gap-0.5'>
                                    <span className='text-xs font-medium text-red-500'>₱</span>
                                    <span className='font-bold text-lg text-red-500'>100</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          {/* --- DAILY FINDS SECTION --- */}
<div className='w-full pt-8 space-y-8'>
    
    {/* 1. The Interactive Banner */}
    <div className='group relative overflow-hidden bg-pink-500 rounded-sm py-2 px-4 cursor-pointer text-center shadow-lg shadow-pink-200'>
        {/* Animated Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
        
        {/* Banner Text */}
        <span className='relative font-bold text-2xl tracking-[0.3em] text-white block transform group-hover:scale-105 transition-transform duration-500'>
            DAILY FINDS
        </span>
    </div>

    {/* 2. The Modern Product Grid */}
    {/* 2 columns on mobile (grid-cols-2), 4 on desktop (md:grid-cols-4) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
        
        {/* Product Card Component (Repeat this or .map() ) */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="group cursor-pointer">
                
                {/* Image Container - Portrait Aspect Ratio */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 mb-4">
                    <img
                        src={Woman} // Replace with your product image variable
                        alt="Daily Thrift Find"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Minimalist Floating "New" Tag */}
                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-wider text-pink-600">
                            New
                        </span>
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex flex-col items-center text-center px-1 space-y-1">
                    <h3 className="text-sm text-gray-500 font-medium truncate w-full group-hover:text-pink-500 transition-colors">
                        Premium Vintage Blouse
                    </h3>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-400">₱</span>
                        <span className="font-bold text-xl text-gray-900 leading-none">
                            150
                        </span>
                    </div>
                </div>
            </div>
        ))}

    </div>
</div>
        </div>
    )
}

export default CategoriesDisplay;