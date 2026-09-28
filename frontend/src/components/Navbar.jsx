import React from 'react';

const Navbar = () => {
    return (
        <nav className='text-white bg-slate-800 sticky top-0 '>
            <div className='myContainer rounded-full flex justify-between items-center px-4 py-5 h-6'>
                <div className="logo font-bold italic text-2xl">
                    <span className='text-green-500'> /  &lt;</span>
                    Vaultix
                    <span className='text-green-500'>Pass/  &gt;</span>
                </div>

                <a
                    href="http://www.linkedin.com/in/muhammad-ali-0b126642a"
                    target="_blank"
                    className="group flex items-center gap-2 border  px-2 py-1 rounded-full bg-green-600  border-b-green-400 transition-all duration-300"
                >
                    <img
                        src="/linkedin.gif"
                        alt="GitHub"
                        className="w-6 h-6  group-hover:scale-110 transition-transform"
                    />

                    <span className="text-sm font-medium text-amber-50  transition hover:underline">
                        Linkedin
                    </span>
                </a>
            </div>

        </nav>
    )
}

export default Navbar
