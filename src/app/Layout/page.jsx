import React from 'react';
import Navbar from './navbar/page';
import Sidebar from './sidebar/page';


const Layout = ({ children }) => {
    const user = true; 

    if (!user) {
        redirect("/auth/login");
    }

    return (
        <div className="flex min-h-screen bg-[#0B0B0B] text-white">

            {/* Sidebar */} 
            <aside className="hidden md:flex w-[260px] border-r border-[#2A2A2A]">
                <Sidebar />
            </aside>

            {/* Right Section */}
            <div className="flex flex-col flex-1">

                <Navbar />

                <main className="flex-1 p-6 bg-[#0B0B0B] overflow-auto">
                    {children}
                </main>

            </div>

        </div>
    );
};
export default Layout;