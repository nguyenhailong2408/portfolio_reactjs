import { IconAjax } from '../../icon/iconAjax'
import IconAngularJs from '../../icon/iconAngularJs'
import { IconBootstrap } from '../../icon/iconBootstrap'
import IconCSS3 from '../../icon/iconCss3'
import IconFontEnd from '../../icon/iconFontEnd'
import IconHTML5 from '../../icon/IconHtml5'
import { IconJQuery } from '../../icon/iconJquery'
import IconKendoUI from '../../icon/iconKendoUI'
import IconReact from '../../icon/iconReactjs'
import IconTailwind from '../../icon/iconTailwind'

export default function Fontend() {
  return (
    <div className='group card-base'>
      <div className='card-hover animate-shimmer'></div>
      <div className='p-6 relative z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='card-title-icon text-blue-400'>
            <IconFontEnd />
          </div>
          <h3 className='card-title'>Frontend Development</h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconHTML5 />
            </span>
            <span className='font-medium'>HTML5</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconCSS3 />
            </span>
            <span className='font-medium'>CSS3</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconJQuery />
            </span>
            <span className='font-medium'>JQuery</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconAjax />
            </span>
            <span className='font-medium'>Ajax</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconBootstrap />
            </span>
            <span className='font-medium'>Bootstrap</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconTailwind />
            </span>
            <span className='font-medium'>Tailwind CSS</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconReact />
            </span>
            <span className='font-medium'>ReactJS</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconAngularJs />
            </span>
            <span className='font-medium'>AngularJS</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconKendoUI />
            </span>
            <span className='font-medium'>KendoUI</span>
          </div>
        </div>
      </div>
    </div>
  )
}
