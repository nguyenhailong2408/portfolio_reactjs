export default function CreativeSkill() {
  return (
    <div className='group card-base'>
      <div className='card-hover animate-shimmer'></div>
      <div className='p-6 relative z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='text-yellow-400 card-title-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-paintbrush w-8 h-8'
            >
              <path d='m14.622 17.897-10.68-2.913'></path>
              <path d='M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z'></path>
              <path d='M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15'></path>
            </svg>
          </div>
          <h3 className='card-title'>Creative Skills</h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                className='w-4 h-4 text-[#FF4081]'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path d='M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.062 7.062 0 0 0-3 3A7.014 7.014 0 0 0 2 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78a7.062 7.062 0 0 0 3-3A7.014 7.014 0 0 0 22 9c0-3.87-3.13-7-7-7zM9 20a5.002 5.002 0 0 1-4-8c0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3a5.002 5.002 0 0 1-4-8c0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 0 1 7 7z'></path>
                <path fill='none' d='M0 0h24v24H0zm0 0h24v24H0z'></path>
              </svg>
            </span>
            <span className='font-medium'>UI Animation</span>
          </div>
        </div>
      </div>
    </div>
  )
}
