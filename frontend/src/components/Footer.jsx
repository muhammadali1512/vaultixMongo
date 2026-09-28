import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white w-full">

            <div className="myContainer mx-auto border-2 border-slate-800 px-3 sm:px-5 py-2">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-3">

                    <div className="flex items-center gap-2 shrink-0">

                        <div className="w-8 h-8 rounded-md bg-green-400 flex items-center justify-center">
                            <span className="text-slate-950 font-black text-sm">
                                V
                            </span>
                        </div>

                        <div>
                            <h2 className="font-bold italic text-sm leading-none whitespace-nowrap">
                                <span className="text-green-400">/&lt;</span>
                                Vaultix
                                <span className="text-green-500">
                                    Pass/ &gt;
                                </span>
                            </h2>

                            <p className="text-[8px] text-slate-400 mt-0.5">
                                Your Own Password Manager
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-center">

                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0"></span>

                        <span className="text-slate-400">
                            Your passwords. Your control.
                        </span>

                        <span className="hidden md:inline text-slate-700">
                            |
                        </span>

                        <span className="font-bold italic text-slate-300">
                            Developed By:
                            <span className="text-green-400 ml-1">
                                Muhammad Ali
                            </span>
                        </span>

                    </div>

                    <a
                        href="https://github.com/muhammadali1512"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 border border-slate-700 bg-slate-900 px-3 py-1.5 rounded-full hover:border-green-400 hover:bg-slate-800 transition-all shrink-0"
                    >
                        <img
                            src="/github.gif"
                            alt="GitHub"
                            className="w-4 h-4 invert group-hover:scale-110 transition-transform"
                        />

                        <span className="text-[10px] font-medium group-hover:text-green-400">
                            GitHub
                        </span>
                    </a>

                </div>

                <div className="border-t border-slate-800 mt-2 pt-2 flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center">

                    <p className="text-[8px] text-slate-500">
                        © {new Date().getFullYear()} Vaultix. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-1 text-[8px] text-slate-500">

                        <span>Built with</span>

                        <span className="text-green-400 font-semibold">
                            React
                        </span>

                        <span>+</span>

                        <span className="text-green-400 font-semibold">
                            Tailwind CSS
                        </span>

                        <span>+</span>

                        <span className="text-green-400 font-semibold">
                            Express.js
                        </span>

                        <span>+</span>

                        <span className="text-green-400 font-semibold">
                            MongoDB
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer