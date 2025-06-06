import { Menu, X, Home, User, Folder, BadgeCheck, Mail, FileText, Briefcase } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import avatar from '../../assets/Image/avatar.jpg'

const sectionIcons = {
  home: <Home size={20} />, // <-- Tăng kích thước icon
  about: <User size={20} />, // <-- Tăng kích thước icon
  experience: <Briefcase size={20} />, // <-- Tăng kích thước icon
  project: <Folder size={20} />, // <-- Tăng kích thước icon
  skill: <BadgeCheck size={20} />, // <-- Tăng kích thước icon
  contact: <Mail size={20} />, // <-- Tăng kích thước icon
  resume: <FileText size={20} />, // <-- Tăng kích thước icon
}

const NavBar = ({ navOpen, setNavOpen, activeSection, handleNavClick, darkMode }) => {
  const sections = ['home', 'about', 'experience', 'project', 'skill', 'resume']
  const { t, i18n } = useTranslation()
  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <nav
      className={`
        fixed top-0 left-0 z-20 w-80 h-full p-6
        transform transition-transform duration-300
        ${navOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${
          darkMode
            ? 'bg-[#222222] text-white backdrop-blur-md shadow-xl ring-1 ring-white/10'
            : 'bg-white text-gray-900 backdrop-blur-md shadow-md ring-1 ring-black/10'
        }
        flex flex-col items-center
      `}
    >
      {/* Mobile Toggle Button */}
      <div className='md:hidden absolute top-4 -right-[50px] z-30'>
        <button
          onClick={toggleNav}
          className='p-2 rounded-full shadow bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition'
        >
          {navOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Avatar Section */}
      <div
        className={`
          w-40 h-40 rounded-full overflow-hidden
          border-8 ${darkMode ? 'border-gray-700' : 'border-gray-200'}
          relative
          glowing-avatar-border
        `}
      >
        <img
          src={avatar}
          alt='Your Avatar'
          className='w-full h-full object-cover rounded-full'
          style={{ objectPosition: 'center bottom' }}
        />
      </div>
      {/* Title */}
      <h1 className='text-2xl font-bold mb-8 tracking-tight'>Nguyen Hai Long</h1>

      {/* Navigation List */}
      <ul className='space-y-4 w-full'>
        {sections.map((id) => {
          const active = activeSection === id
          return (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2 rounded-full
                  font-medium capitalize relative overflow-hidden z-10 shadow-sm
                  text-lg
                  ${
                    active
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow'
                      : 'bg-transparent text-gray-700 dark:text-gray-300'
                  }
                  ${!active && 'nav-button-hover-effect'}
                `}
              >
                {sectionIcons[id]}
                <span className='relative z-10'>{t(id)}</span>
              </button>
              {/* <button
            className='
            mt-6 px-8 py-3 rounded-full text-sm md:text-lg font-semibold text-white
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-700 hover:to-pink-700
            transform hover:scale-105 transition-all duration-300
            shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
          '
          >
            Tải xuống CV (PDF)
          </button> */}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
