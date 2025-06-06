/* eslint-disable react/no-unescaped-entities */
import { Github, Mail, Linkedin } from 'lucide-react'
import avatar from '@assets/Image/beautifuloffice.jpg'
import { useEffect, useRef } from 'react'
import Button from '../../button'
import { useTranslation } from 'react-i18next'

export default function Home(props) {
  const { t, i18n } = useTranslation()
  // const imgRef = useRef(null)

  // Phần hiệu ứng chữ vẫn được giữ nguyên nhưng đang bị comment.
  useEffect(() => {
    // var x = 0
    // var y = 0
    // var textEffect = 'Nguyễn Hải Long'
    // var textEffect2 = 'Fullstack Developer | .Net'
    // var eleTxtName = document.getElementById('txtName')
    // var eleTxtPosition = document.getElementById('txtPosition')
    // const animationText = () => {
    //   if (x < textEffect.length) {
    //     eleTxtName.innerHTML += textEffect.charAt(x)
    //     x++
    //     setTimeout(animationText, 150)
    //   }
    // }
    // const animationText2 = () => {
    //   if (y < textEffect2.length) {
    //     eleTxtPosition.innerHTML += textEffect2.charAt(y)
    //     y++
    //     setTimeout(animationText2, 150)
    //   }
    // }
    // animationText()
    // animationText2()
  }, [])

  return (
    <section
      id={props.elementID}
      className='relative min-h-screen flex items-center bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${avatar})` }}
    >
      {/* Lớp phủ đã được làm tối hơn để text nổi bật */}
      <div className='absolute inset-0 bg-black bg-opacity-30 z-0'></div>

      {/* Container chứa nội dung */}
      <div className='relative z-10 w-full px-4 py-20 md:px-20 lg:px-40'>
        {/* Lời chào */}
        <h1 className='text-3xl sm:text-4xl font-bold my-3 sm:my-5'>{t('welcome')}!</h1>

        {/* Tiêu đề động cho tên/vị trí */}
        <h2 className='text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight my-3 sm:my-5'>
          {t('iam')} <span className='home_title_name'>{t('name')}</span>
          <br />
          <span className='text-2xl sm:text-4xl lg:text-5xl font-semibold home_title_role'>
            Full-Stack Developer | .Net
          </span>
        </h2>

        {/* Các nút mạng xã hội */}
        <div className='flex space-x-3 sm:space-x-4 my-4 sm:my-6'>
          <Button variant='outline' size='icon'>
            <a href='https://github.com/your-github' target='_blank' rel='noreferrer' aria-label='Hồ sơ GitHub'>
              <Github className='w-6 h-6' />
            </a>
          </Button>
          <Button variant='outline' size='icon'>
            <a href='mailto:nguyenhailong2408@gmail.com' aria-label='Gửi email cho tôi'>
              <Mail className='w-6 h-6' />
            </a>
          </Button>
          <Button variant='outline' size='icon'>
            <a
              href='https://linkedin.com/in/your-linkedin'
              target='_blank'
              rel='noreferrer'
              aria-label='Hồ sơ LinkedIn'
            >
              <Linkedin className='w-6 h-6' />
            </a>
          </Button>
        </div>

        {/* Mô tả bản thân */}
        <p className='text-base sm:text-lg max-w-xl my-4 sm:my-6'>{t('homeDesc')}</p>

        {/* Nút "Về tôi" với hiệu ứng gradient mới */}
        <button
          onClick={() => props.handleNavClick('about')}
          className='
            mt-6 px-8 py-3 rounded-full text-md md:text-lg font-semibold
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-700 hover:to-pink-700
            transform hover:scale-105 transition-all duration-300
            shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
          '
        >
          {t('moreAboutMe')}
        </button>
      </div>
    </section>
  )
}
