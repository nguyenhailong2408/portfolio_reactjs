import IconPrototyping from '../../icon/iconPrototyping'
import IconResponsiveDesgin from '../../icon/iconResponsiveDesgin'
import IconUI from '../../icon/iconUI'
import IconWireframing from '../../icon/iconWireframing'

export default function UIUX() {
  return (
    <div className='group card-base'>
      <div className='card-hover animate-shimmer'></div>
      <div className='p-6 relative z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='text-purple-400 card-title-icon'>
            <IconUI />
          </div>
          <h3 className='card-title'>UI/UX Design</h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          {/* <div className='card-list-item'>
                    <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
                      <IconFigma />
                    </span>
                    <span className='font-medium'>Figma</span>
                  </div> */}
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconResponsiveDesgin />
            </span>
            <span className='font-medium'>Responsive Design</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconWireframing />
            </span>
            <span className='font-medium'>Wireframing</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconPrototyping />
            </span>
            <span className='font-medium'>Prototyping</span>
          </div>
        </div>
      </div>
    </div>
  )
}
