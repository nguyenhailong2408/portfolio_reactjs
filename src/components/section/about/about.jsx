import imageUrl from '@assets/Image/97112.png'
import { Code, GraduationCap } from 'lucide-react'
import { Github, Mail, Linkedin } from 'lucide-react'
import Button from '../../button'
import BtnDowloadPDF from '../../PDFexport/btnDowloadPDF'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
const AboutMe = (props) => {
  const { t, i18n } = useTranslation()
  const btnDownloadPDF = useMemo(() => <BtnDowloadPDF />, [])
  const summaryData = [
    t('summary1'),
    // t('summary2'),
    // t('summary3'),
    t('summary4')
  ]
  return (
    <section id={props.elementID} className='my-5 md:my-10 p-4 md:p-10 pt-6 min-h-screen flex flex-col'>
      <h2 className='text-3xl md:text-5xl font-semibold mb-10 relative title-section'>{t('aboutMe')}</h2>
      {/* Các nút mạng xã hội */}
      <div className='flex space-x-3 sm:space-x-4 my-2 sm:my-2'>
        <Button className='inline-flex items-center justify-center font-medium rounded w-10 h-10 group border border-gray-300 text-gray-700 hover:bg-gray-200'>
          <a href='https://github.com/nguyenhailong2408' target='_blank' rel='noreferrer' aria-label='GitHub'>
            <Github className='w-6 h-6 text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors' />
          </a>
        </Button>
        <Button className='inline-flex items-center justify-center font-medium rounded w-10 h-10 group border border-gray-300 text-gray-700 hover:bg-gray-200'>
          <a href='mailto:nguyenhailong2408@gmail.com' aria-label='Send email to me'>
            <Mail className='w-6 h-6 text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors' />
          </a>
        </Button>
        <Button className='inline-flex items-center justify-center font-medium rounded w-10 h-10 group border border-gray-300 text-gray-700 hover:bg-gray-200'>
          <a
            href='https://www.linkedin.com/in/nguyen-hai-long-294b16235/'
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
          >
            <Linkedin className='w-6 h-6 text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-black transition-colors' />
          </a>
        </Button>
      </div>

      <div className='flex md:flex-row flex-col-reverse'>
        <div className='w-full md:w-2/3 flex flex-col'>
          <div className='summary md:text-lg text-gray-700 dark:text-gray-300'>
            {summaryData.map((item,idx) => {
              return (
                <div key={idx}>
                  <p className='leading-relaxed flex items-start gap-2'>
                    <span className='w-1 h-1 min-w-[5px] min-h-[5px] rounded-full dark:bg-white bg-black mt-[10px]'></span>
                    {item}
                  </p>
                </div>
              )
            })}
          </div>
          <div className='infomation col-info w-full flex flex-row flex-wrap md:text-lg'>
            <p className='w-full md:w-1/2 my-1 py-2 relative before-line'>
              <b>{t('brithday')}:&nbsp;</b>
              <span className='text-gray-700 dark:text-gray-300'>24/08/1997</span>
            </p>
            <p className='w-full md:w-1/2 my-1 py-2 relative before-line'>
              <b className='font-semibold'>{t('phone')}:&nbsp;</b>
              <span className='text-gray-700 dark:text-gray-300'>(+84) 0336389966</span>
            </p>
            <p className='w-full md:w-1/2 my-1 py-2 relative before-line'>
              <b>{t('age')}:&nbsp;</b>
              <span className='text-gray-700 dark:text-gray-300'>{new Date().getFullYear() - 1997}</span>
            </p>
            <p className='w-full md:w-1/2 my-1 py-2 relative before-line'>
              <b>Email:&nbsp;</b>
              <span className='text-gray-700 dark:text-gray-300'>nguyenhailong2408@gmail.com</span>
            </p>
            <p className='w-full md:w-1/2 my-1 py-2 relative before-line'>
              <b>{t('address')}:&nbsp;</b>
              <span className='text-gray-700 dark:text-gray-300'>{t('addressContent')}</span>
            </p>
          </div>
          <div className='flex flex-row flex-wrap gap-0.5 md:gap-3'>
            {btnDownloadPDF}
            <button
              onClick={() => props.handleNavClick('resume')}
              className='
            mt-6 px-8 py-3 rounded-full text-sm md:text-lg font-semibold text-white
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-700 hover:to-pink-700
            transform hover:scale-105 transition-all duration-300
            shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
          '
            >
              {t('myResume')}
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/3'>
          <img src={imageUrl} alt='' />
        </div>
      </div>

      {/* Kỹ năng công nghệ */}
      <div className='techSkill mt-10 p-6 dark:bg-[#222] rounded-xl border border-[#c4c4c4] dark:border-[#393939] transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700'>
        <h3 className='text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-gray-900 dark:text-white flex items-center'>
          <Code size={30} className='mr-3' /> {t('skills')}
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 md:text-lg'>
          <div className='bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-[#c4c4c4] dark:border-gray-600'>
            <b className=''>Front-end:</b>{' '}
            <span className='text-gray-700 dark:text-gray-300'>
              HTML, CSS, JavaScript, Jquery, Ajax, Bootstrap, Tailwind CSS, Kendo UI, AngularJS, ReactJS
            </span>
          </div>
          <div className='bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-[#c4c4c4] dark:border-gray-600'>
            <b className=''>Back-end:</b>{' '}
            <span className='text-gray-700 dark:text-gray-300'>
              C#, ASP.NET, .NET Core, REST API, Linq, Entity Framework, Razor (View Engine), Dapper
            </span>
          </div>
          <div className='bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-[#c4c4c4] dark:border-gray-600'>
            <b className=''>{t('serverAndDatabase')}</b>{' '}
            <span className='text-gray-700 dark:text-gray-300'>IIS Server, MSSQL, PostgreSQL, MongoDB</span>
          </div>
        </div>
      </div>

      {/* Học vấn */}
      <div className='education mt-10 p-6 dark:bg-[#222] rounded-xl border border-[#c4c4c4] dark:border-[#393939] transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700'>
        <h3 className='text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-gray-900 dark:text-white flex items-center'>
          <GraduationCap size={30} className='mr-3' /> {t('education')}
        </h3>
        <div className='space-y-1 md:space-y-4 md:text-lg'>
          <p className='flex flex-col sm:flex-row sm:items-center md:gap-2'>
            <b className='text-[18px] md:text-2xl'>{t('schoolName')}</b>
            <span className='text-gray-700 dark:text-gray-300'>10/2015 - 02/2019</span>
          </p>
          <p className='flex flex-col sm:flex-row sm:items-center'>
            <b className='mr-2'>{t('major')}:</b>{' '}
            <span className='text-gray-700 dark:text-gray-300'>{t('informationTechnology')}</span>
          </p>
          <p className='flex flex-col sm:flex-row sm:items-center'>
            <b className='mr-2'>{t('degree')}:</b>{' '}
            <span className='text-gray-700 dark:text-gray-300'>{t('good')}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
