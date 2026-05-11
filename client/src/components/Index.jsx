import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import image from "../assets/images/icon.png"
import { useEffect, useState } from "react";
import CategoriesDisplay from "./Category/CategoriesDisplay";
function Index(){
    const [msgIndex, setMsgIndex] = useState(0);
    
    const Announcement = [
        "Delivery Every Weekends!",
        "New Collection Coming Soon!",
        "Visit Our Facebook Page",
        "Flash Sale Alert! Check out Super Deals for ₱99 items! ⚡"
    ];
    
    useEffect(() => {
        const timer = setInterval(() => {
            // 2. Changed 'setIndex' to 'setMsgIndex' to match your state
            setMsgIndex((prevIndex) => (prevIndex + 1) % Announcement.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [Announcement.length]); // Good practice to include length here
    
    return(
      <div>
        <div className="bg-yellow-50  overflow-hidden flex items-center p-2 justify-center border-b border-yellow-100">
           <div key={msgIndex} className="animate-slide-up-slight">
                <h1 className="text-gray-500 font-medium text-sm tracking-wider">{Announcement[msgIndex]}</h1>
            </div>
        </div>
         <div className="bg-pink-200 ">
            
            {/* Large Scree Devices */}
            <nav className="hidden sm:block md:block relative z-40">
                
                <div className="grid grid-cols-3 items-center pt-2 px-10">
                    {/* Left: Logo */}
                    <div className="justify-self-start">
                        <h1 className="text-4xl text-white font-['AuroraFont']">Aurora Charm</h1>
                    </div>

                    {/* Center: Search Bar */}
                    <div className="justify-self-center">
                        <div className="bg-white rounded-lg overflow-hidden">
                            <div className="flex items-center w-120">
                                <input type="text" className="p-2 flex-1 outline-0" placeholder="Blouse for Women" />
                                <div className="bg-yellow-100 p-2">
                                    <IoIosSearch className="text-gray-400 text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Icons */}
                    <div className="justify-self-end flex items-center gap-4">
                        <IoIosHeartEmpty className="text-2xl text-white" />
                        <IoCartOutline className="text-2xl text-white" />
                        <HiOutlineUser className="text-2xl text-white" />
                    </div>
                </div>
                 <div className="grid grid-cols-3 items-center pt-3 px-10 text-white font-medium">
                    <div className="flex gap-8">
                    <span className="cursor-pointer hover:text-pink-500">All</span>

                    {/* --- 2. THE TRIGGER GROUP --- */}
                    <div className="group">
                        {/* Added 'pb-8' and '-mb-8' to create an invisible hover bridge */}
                        <span className="cursor-pointer hover:text-pink-500 pb-8">
                        Women
                        </span>

                        {/* --- 3. THE MEGA MENU --- */}
                        {/* Changed 'hidden' to 'invisible group-hover:visible' for better stability */}
                        <div className="absolute left-0 top-full w-screen invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pt-2">
                        
                        {/* Actual visible white box */}
                        <div className="bg-white text-gray-800 shadow-2xl border-t border-pink-100 py-10">
                            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 px-10">
                            
                            {/* Shop by Item */}
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-pink-600 uppercase tracking-widest text-xs border-b pb-2">Shop by Item</p>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Blouses</span>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">T-shirts</span>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Pants</span>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Shorts</span>
                            </div>

                            {/* Shop by Vibe */}
                            <div className="flex flex-col gap-3">
                                <p className="font-bold text-pink-600 uppercase tracking-widest text-xs border-b pb-2">Shop by Vibe</p>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Trendy</span>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Vintage & Retro</span>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Minimalist</span>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Streetwear</span>
                                <span className="hover:text-pink-500 cursor-pointer text-sm">Officewear</span>
                            </div>

                            {/* Promo Box */}
                            <div className="flex justify-center items-center flex-col bg-pink-50 p-5 rounded-lg text-center">
                                <p className="text-2xl text-pink-500">New Collection</p>
                                <p className="text-xs text-gray-500">Every Monday 7PM</p>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Spacer to maintain your layout */}
                    <div className="w-120"></div>
                    <div></div>
                </div>
            </nav>
            
             {/* Small Scree Devices */}
            <nav className=" block sm:hidden">
                <div className="flex items-center justify-around">
                    <IoMdMenu className="text-2xl text-white"/>
                    <h1 className="text-4xl text-white font-['AuroraFont']">Aurora Charm</h1>
                    <div className="flex items-center gap-2">
                        <IoIosSearch className="text-white text-2xl" />
                        <IoIosHeartEmpty className="text-2xl text-white " />
                        <IoCartOutline className="text-2xl text-white"/>
                        
                    </div>
                </div>
            </nav>
        </div>
        <CategoriesDisplay/>
      </div> 
    )
}

export default Index