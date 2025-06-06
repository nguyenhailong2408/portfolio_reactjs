import { useTranslation } from 'react-i18next';
import FlagUS from '../icon/flagUS';
import FlagVN from '../icon/flagVN';

function ButtonChangeLangague(props) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className='fixed top-16 md:top-4 right-3 z-50'>
      <button
        onClick={() => toggleLanguage(i18n.language === 'vi' ? 'en' : 'vi')}
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
            ? 'bg-[#222222] text-white  hover:bg-gray-700 hover:shadow-xl'
            : 'bg-white text-gray-800 hover:bg-gray-100 hover:shadow-xl'
          }
        `}
        aria-label={i18n.language === 'vi' ? 'Change to English' : 'Change to Vietnamese'}
      >
        {i18n.language === 'vi' ? (
          <FlagUS color={props.darkMode ? 'white' : 'black'} className="w-6 h-6" />
        ) : (
          <FlagVN color={props.darkMode ? 'white' : 'black'} className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

export default ButtonChangeLangague;