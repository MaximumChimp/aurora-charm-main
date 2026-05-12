import { IoIosSearch, IoIosHeartEmpty, IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { useEffect, useState } from "react";
import CategoriesDisplay from "./Category/CategoriesDisplay";

function Index() {
    const [msgIndex, setMsgIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const Announcement = [
        "Delivery Every Weekends!",
        "New Collection Coming Soon!",
        "Visit Our Facebook Page",
        "Check out Super Deals for ₱99 items!"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setMsgIndex((prevIndex) => (prevIndex + 1) % Announcement.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [Announcement.length]);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                
                // FIXED LOGIC: Show when at top, hide when scrolling down, show when scrolling up
                if (currentScrollY < 50) {
                    setIsVisible(true);
                } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
                    setIsVisible(false); // Scrolling down
                } else if (currentScrollY < lastScrollY) {
                    setIsVisible(true);  // Scrolling up
                }
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        /* CRITICAL: Ensure the root div doesn't have overflow-hidden that breaks sticky */
        <div className="relative min-h-screen w-full bg-white">
            
            {/* --- HEADER SECTION --- */}
            {/* Added 'w-full' and made sure it's a direct child of the scrolling container */}
            <header className={`sticky top-0 z-[100] w-full transition-transform duration-500 ease-in-out shadow-sm ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
                
                {/* Announcement Bar */}
                <div className="bg-yellow-50 flex items-center h-10 justify-center border-b border-yellow-100 overflow-hidden">
                    <div key={msgIndex} className="animate-slide-up-slight">
                        <h1 className="text-gray-500 font-medium text-xs sm:text-sm tracking-wider">
                            {Announcement[msgIndex]}
                        </h1>
                    </div>
                </div>

                {/* Main Navigation Row */}
                <div className="bg-pink-200">
                    {/* Desktop View */}
                    <nav className="hidden sm:block relative">
                        <div className="grid grid-cols-3 items-center py-4 px-10">
                            {/* Left: Logo */}
                            <div className="justify-self-start">
                                <h1 className="text-4xl text-white font-['AuroraFont'] cursor-pointer leading-none">
                                    Aurora Charm
                                </h1>
                            </div>

                            {/* Center: Search Bar */}
                            <div className="justify-self-center w-full flex justify-center px-4">
                                <div className="bg-white rounded-lg overflow-hidden flex items-center w-full max-w-md shadow-sm">
                                    <input 
                                        type="text" 
                                        className="p-2.5 flex-1 outline-none text-sm text-gray-700" 
                                        placeholder="Search for blouses, pants..." 
                                    />
                                    <div className="bg-yellow-100 p-2.5 cursor-pointer hover:bg-yellow-200 transition-colors">
                                        <IoIosSearch className="text-gray-500 text-xl" />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Icons */}
                            <div className="justify-self-end flex items-center gap-6">
                                <div className="relative cursor-pointer group">
                                    <IoIosHeartEmpty className="text-2xl text-white group-hover:scale-110 transition-transform" />
                                    <span className="absolute -top-1 -right-1 bg-pink-500 text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">0</span>
                                </div>
                                <IoCartOutline className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform" />
                                <HiOutlineUser className="text-2xl text-white cursor-pointer hover:scale-110 transition-transform" />
                            </div>
                        </div>

                        {/* Sub-nav & Mega Menu Trigger */}
                        <div className="flex justify-start gap-10 px-10 text-white font-medium pb-4 text-sm tracking-widest uppercase">
                            <span className="cursor-pointer hover:text-yellow-100 transition-colors">All</span>
                            
                            <div className="group static">
                                <span className="cursor-pointer hover:text-yellow-100 pb-4">Women</span>
                                
                                <div className="absolute left-0 top-full w-full invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pt-1">
                                    <div className="bg-white text-gray-800 shadow-2xl border-t border-pink-100 py-12">
                                        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 px-10">
                                            <div className="flex flex-col gap-3">
                                                <p className="font-bold text-pink-600 text-[10px] uppercase tracking-widest border-b pb-2">Shop by Item</p>
                                                <span className="hover:text-pink-500 cursor-pointer text-sm">Blouses</span>
                                                <span className="hover:text-pink-500 cursor-pointer text-sm">T-shirts</span>
                                                <span className="hover:text-pink-500 cursor-pointer text-sm">Pants</span>
                                                <span className="hover:text-pink-500 cursor-pointer text-sm">Shorts</span>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <p className="font-bold text-pink-600 text-[10px] uppercase tracking-widest border-b pb-2">Vibes</p>
                                                <span className="hover:text-pink-500 cursor-pointer text-sm">Office Siren</span>
                                                <span className="hover:text-pink-500 cursor-pointer text-sm">Clean Girl</span>
                                                <span className="hover:text-pink-500 cursor-pointer text-sm">Retro Street</span>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <p className="font-bold text-yellow-600 text-[10px] uppercase tracking-widest border-b pb-2">Hot Deals</p>
                                                <span className="hover:text-yellow-600 cursor-pointer text-sm font-bold">Super Deals ⚡</span>
                                                <span className="hover:text-yellow-600 cursor-pointer text-sm font-bold text-red-500 underline decoration-2 underline-offset-4 font-sans">₱99 Items</span>
                                            </div>
                                            <div className="bg-pink-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                                                <p className="font-['AuroraFont'] text-2xl text-pink-600">New Drops</p>
                                                <p className="text-[10px] text-gray-500 mt-1 uppercase">Every Monday 7PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile View */}
                    <nav className="block sm:hidden p-4">
                        <div className="flex items-center justify-between">
                            <IoMdMenu className="text-2xl text-white cursor-pointer"/>
                            <h1 className="text-3xl text-white font-['AuroraFont']">Aurora Charm</h1>
                            <div className="flex items-center gap-4">
                                  <div className="relative cursor-pointer group">
                                    <IoIosHeartEmpty className="text-2xl text-white group-hover:scale-110 transition-transform" />
                                    <span className="absolute -top-1 -right-1 bg-pink-500 text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">0</span>
                                </div>
                                <IoIosSearch className="text-white text-2xl" />
                                <IoCartOutline className="text-2xl text-white" />
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="relative z-10 w-full">
                <CategoriesDisplay />
                
            </main>

        </div>
    );
}

export default Index;