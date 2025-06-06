import IconFirebase from '../../icon/iconFirebase'
import IconJira from '../../icon/iconJira'
import IconRedux from '../../icon/iconRedux'
import IconTool from '../../icon/iconTool'
import IconTrello from '../../icon/iconTrello'
import IconVisualStudio from '../../icon/iconVisualStudio'
import IconVite from '../../icon/iconVite'
import IconVScode from '../../icon/iconVScode'

export default function ToolAndTech() {
  return (
    <div className='group card-base'>
      <div className='card-hover animate-shimmer'></div>
      <div className='p-6 relative z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='text-pink-400 card-title-icon'>
            <IconTool />
          </div>
          <h3 className='card-title'>Tools &amp; Technologies</h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconVisualStudio />
            </span>
            <span className='font-medium'>Visual Studio</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconVScode />
            </span>
            <span className='font-medium'>VS Code</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconRedux />
            </span>
            <span className='font-medium'>Redux</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconFirebase />
            </span>
            <span className='font-medium'>Firebase</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconVite />
            </span>
            <span className='font-medium'>Vite</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconJira />
            </span>
            <span className='font-medium'>Jira</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconTrello />
            </span>
            <span className='font-medium'>Trello</span>
          </div>
        </div>
      </div>
    </div>
  )
}
