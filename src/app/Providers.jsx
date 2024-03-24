import React from 'react'
import { ThemeProvider } from 'next-themes'
export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
        <div className='text-gray-700 dark:text-gray-200 dark  min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
  )
}
