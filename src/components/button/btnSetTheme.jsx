import { Sun, Moon } from 'lucide-react'
import { useEffect } from 'react'

function ButtonSetTheme(props) {
  useEffect(() => {
    const root = document.documentElement
    props.darkMode ? root.classList.add('dark') : root.classList.remove('dark')
  }, [props.darkMode])

  return (
    <div className='fixed top-[110px] md:top-[70px] right-3 z-50'>
      <button
        onClick={() => props.setDarkMode(!props.darkMode)}
        className={`
          flex items-center justify-center
          w-[40px] h-[40px]
          md:w-12 md:h-12
          rounded-full
          shadow-lg
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-0
          border-[1px] border-gray-800
          ${props.darkMode
            ? 'bg-[#222222] text-white hover:bg-gray-700 hover:shadow-xl' 
            : 'bg-white text-gray-800 hover:bg-gray-100 hover:shadow-xl'
          }
        `}
        aria-label={props.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {props.darkMode ? <Sun size={24} color='white' /> : <Moon size={24} color='black' />}
      </button>
    </div>
  )
}

export default ButtonSetTheme