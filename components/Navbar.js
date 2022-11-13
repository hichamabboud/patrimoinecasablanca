import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'

function Navbar() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true)}, []);

    const renderThemeChange = () => { 
            
        if (!mounted) return null;
        
        const currentTheme = theme === "system" ? systemTheme : theme;
        console.log(theme);
        if (currentTheme === "light") {
            return (
                <button onClick={() => { setTheme("dark")}} className="border border-gray-400 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </button>
            )
        } else { 
            return (
                <button onClick={() => { setTheme("light")}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </button>
            )
        }
    }

    return (
        <div className='bg-slate-100 shadow-sm dark:bg-gray-600'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center justify-between h-10 mx-2'>
                    <div className='font-fasthand dark:text-zinc-50'>
                        <span className='font-semibold text-lg'>Patrimoine</span>
                        <span className=''>Casablanca</span>
                    </div>

                    <div className='flex space-x-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        {renderThemeChange()}
                    </div>
                </div>
            </div>      
        </div>
  )
}

export default Navbar;
