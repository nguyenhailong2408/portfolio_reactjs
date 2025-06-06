import IconCloud from '../../icon/iconCloud'
import IconGit from '../../icon/iconGit'
import IconGithub from '../../icon/iconGithub'
import IconGitlab from '../../icon/iconGitlab'

export default function VersionControl() {
  return (
    <div className='group card-base'>
      <div className='card-hover animate-shimmer'></div>
      <div className='p-6 relative z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='text-orange-400 card-title-icon'>
            <IconCloud />
          </div>
          {/* <h3 className='card-title'>Cloud &amp; DevOps</h3> */}
          <h3 className='card-title'>Version Control</h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          {/* <div className='card-list-item'>
                    <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
                      <IconAWS />
                    </span>
                    <span className='font-medium'>AWS</span>
                  </div>
                  <div className='card-list-item'>
                    <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
                      <IconDocker />
                    </span>
                    <span className='font-medium'>Docker</span>
                  </div>
                  <div className='card-list-item'>
                    <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
                      <IconCICD />
                    </span>
                    <span className='font-medium'>CI/CD</span>
                  </div>
                  <div className='card-list-item'>
                    <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
                      <IconKubernetes />
                    </span>
                    <span className='font-medium'>Kubernetes</span>
                  </div>
                  <div className='card-list-item'>
                    <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
                      <IconLinux />
                    </span>
                    <span className='font-medium'>Linux</span>
                  </div> */}
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconGit />
            </span>
            <span className='font-medium'>Git</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconGithub />
            </span>
            <span className='font-medium'>Github</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconGitlab />
            </span>
            <span className='font-medium'>Gitlab</span>
          </div>
        </div>
      </div>
    </div>
  )
}
