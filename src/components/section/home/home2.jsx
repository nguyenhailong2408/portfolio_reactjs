/* eslint-disable react/no-unescaped-entities */
import Button from '../../button'
import { Github, Mail, Linkedin } from 'lucide-react'
import avatar from '../../assets/Image/1213221.png'
import { useEffect, useRef, useState } from 'react'
export default function Home2(props) {
  const imgRef = useRef(null)
  // const [imgWidth, setImgWidth] = useState(0)

  useEffect(() => {
    // const handleLoad = () => {
    //   if (imgRef.current) {
    //     const width = imgRef.current.offsetWidth
    //     setImgWidth(imgRef.current.offsetWidth)
    //     const element = document.querySelector('.coverTopImage')
    //     const element2 = document.querySelector('.coverBottomImage')
    //     element.style.width = `${0.35 * width}px`
    //     element.style.height = `${0.35 * width}px`
    //     element.style.top = `-${0.16 * width}px`
    //     element.style.left = `-${0.35 * width}px`
    //     element.style.borderTopWidth = `${0.043 * width}px`
    //     element.style.borderLeftWidth = `${0.043 * width}px`

    //     element2.style.width = `${0.35 * width}px`
    //     element2.style.height = `${0.35 * width}px`
    //     element2.style.bottom = `-${0.16 * width}px`
    //     element2.style.right = `-${0.16 * width}px`
    //     element2.style.borderRightWidth = `${0.043 * width}px`
    //     element2.style.borderBottomWidth = `${0.043 * width}px`
    //   }
    // }

    // const imgElement = imgRef.current
    // if (imgElement && imgElement.complete) {
    //   // Ảnh đã load sẵn
    //   handleLoad()
    // } else if (imgElement) {
    //   // Đợi ảnh load xong
    //   imgElement.addEventListener('load', handleLoad)
    // }

    // Hiệu ứng chữ
    var x = 0
    var y = 0
    var textEffect = 'Nguyễn Hải Long'
    var textEffect2 = 'Fullstack Developer | .Net'
    var eleTxtName = document.getElementById('txtName')
    var eleTxtPosition = document.getElementById('txtPosition')
    const animationText = () => {
      if (x < textEffect.length) {
        eleTxtName.innerHTML += textEffect.charAt(x)
        x++
        setTimeout(animationText, 150)
      }
    }
    const animationText2 = () => {
      if (y < textEffect2.length) {
        eleTxtPosition.innerHTML += textEffect2.charAt(y)
        y++
        setTimeout(animationText2, 150)
      }
    }

    animationText()
    animationText2()

    // return () => {
    //   imgElement?.removeEventListener('load', handleLoad)
    // }
  }, [])

  return (
    <section id={props.elementID} className='min-h-screen flex flex-wrap items-center'>
      <div className='w-full md:w-2/3'>
        <h1 className='text-4xl font-bold my-5'>
          Hello, my name is <span id='txtName'></span>
        </h1>
        <h1 className='text-4xl font-bold my-5'>
          I'm a&nbsp;
          <span id='txtPosition' className='text-[red] opacity-1 animate-fadeInUp'></span>
        </h1>
        <div className='flex space-x-4 my-4'>
          <Button variant='outline' size='icon'>
            <a href='https://github.com/your-github' target='_blank' rel='noreferrer'>
              <Github />
            </a>
          </Button>
          <Button variant='outline' size='icon'>
            <a href='mailto:nguyenhailong2408@gmail.com'>
              <Mail />
            </a>
          </Button>
          <Button variant='outline' size='icon'>
            <a href='https://linkedin.com/in/your-linkedin' target='_blank' rel='noreferrer'>
              <Linkedin />
            </a>
          </Button>
        </div>
        <p className='text-lg my-4'>
          I'm a Full Stack Developer with over 4 years of experience in developing web applications from frontend to
          backend. Passionate about creating high-quality products and using new technologies to solve technical
          challenges.
        </p>
        <Button onClick={() => props.handleNavClick('about')}>About me</Button>
      </div>
      <div className='w-full md:w-1/3 flex items-center justify-center p-10'>
        <div className='relative w-full'>
          <img ref={imgRef} src={avatar} alt='Avatar' className='object-cover  mb-4 md:mb-0' />
          {/* <div className='coverTopImage absolute border-[#fa3f3f] origin-top-left scale-0 animate-drawTopLeft will-change-transform'></div>
          <div className='coverBottomImage absolute border-[#fa3f3f] origin-bottom-right scale-0 animate-drawBottomRight will-change-transform'></div> */}
        </div>
      </div>
    </section>
  )
}
