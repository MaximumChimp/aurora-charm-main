import { FaFacebook } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 space-y-10">
                
                {/* --- 1. Main Grid: Address/Map (Left) | Socials/Contact (Right) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    
                    {/* Left Column: Address + Map */}
                    <div className="space-y-6">
                        <div className="space-y-2 text-left">
                            <h2 className="text-md font-bold text-gray-800 tracking-tight">
                                WHERE ARE WE LOCATED?
                            </h2>
                            <div className="flex flex-col text-gray-600">
                                <span className="font-semibold text-pink-500 uppercase tracking-wider text-[10px]">Address</span>
                                <p className="text-sm leading-relaxed">
                                    148 Purok 1 Brgy. Calero, City of Malolos, Bulacan
                                </p>
                            </div>
                        </div>

                        {/* Map Container */}
                        <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                            <iframe 
                               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d573.3324973590122!2d120.80833826945592!3d14.8305365281379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653002f80c767%3A0xbc325bbdaa21a9ea!2sEstrella&#39;s%20Residence!5e0!3m2!1sen!2sph!4v1778547969784!5m2!1sen!2sph"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aurora Charm Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Socials + Contact Info */}
                    <div className="space-y-10 md:pl-12">
                        {/* Find Us Section - Now Left Aligned on Mobile */}
                       <div className="space-y-3 text-left w-full">
    <h2 className="text-md font-bold text-gray-800 tracking-tight">FOLLOW US ON</h2>
    
    {/* 1. Changed flex-col to flex-row as default
      2. Added flex-nowrap to prevent dropping to the next line
      3. Added overflow-x-auto so it's swipeable on small screens
      4. Added pb-2 so the scrollbar (if it appears) doesn't touch the buttons
    */}
                <div className="flex flex-row flex-nowrap justify-start gap-2 w-full">
                    
                    {/* <div className="flex-shrink-0">
                        <a className="flex items-center gap-2 bg-white px-2 py-2 sm:px-4 rounded-xl border border-gray-100">
                            <FaFacebook className="text-blue-600 text-lg" />
                            <span className="text-[15px] sm:text-sm font-medium text-gray-700 whitespace-nowrap tracking-tight">Aurora Charm</span>
                        </a>
                    </div> */}

                    <div className="flex-shrink-0">
                        <a className="flex items-center gap-2 bg-white px-2 py-2 sm:px-4 rounded-xl border border-gray-100">
                            <FaFacebook className="text-blue-600 text-lg" />
                        </a>
                    </div>
                    
                </div>
                </div>

                        {/* Contact Info Section - Now Left Aligned on Mobile */}
                        <div className="space-y-5 text-left">
                            <h2 className="text-md font-bold text-gray-800">CONTACT INFORMATION</h2>
                            
                            <div className="flex flex-col gap-5">
                                {/* Phone */}
                                <div className="flex items-center gap-3 text-gray-600 group justify-start">
                                    <div className="p-2.5 bg-white rounded-lg shadow-sm border border-gray-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                        <IoCallOutline className="text-lg" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] uppercase text-gray-400 font-bold leading-none mb-1">Call Us</span>
                                        <span className="text-sm font-medium tracking-tight">+63 965 175 1523</span>
                                    </div>
                                </div>
                                
                                {/* Email */}
                                <div className="flex items-center gap-3 text-gray-600 group justify-start">
                                    <div className="p-2.5 bg-white rounded-lg shadow-sm border border-gray-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                        <MdOutlineEmail className="text-lg" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] uppercase text-gray-400 font-bold leading-none mb-1">Email Us</span>
                                        <span className="text-sm font-medium tracking-tight">auroracharm@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-[9px] tracking-[0.2em] uppercase">
                    ©2026 Aurora Charm. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;