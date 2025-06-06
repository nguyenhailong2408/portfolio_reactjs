function FlagUS(props) {
  return (
    <svg width='24' height='24' viewBox='0 -4 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_503_3486)'>
        <rect width='28' height='20' rx='2' fill='white' />
        <mask
          id='mask0_503_3486'
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='28'
          height='20'
        >
          <rect width='28' height='20' rx='2' fill='white' />
        </mask>
        <g mask='url(#mask0_503_3486)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z'
            fill='#D02F44'
          />
          <rect width='12' height='9.33333' fill='#46467F' />
          <g filter='url(#filter0_d_503_3486)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M2.66665 1.99999C2.66665 2.36818 2.36817 2.66666 1.99998 2.66666C1.63179 2.66666 1.33331 2.36818 1.33331 1.99999C1.33331 1.63181 1.63179 1.33333 1.99998 1.33333C2.36817 1.33333 2.66665 1.63181 2.66665 1.99999Z ... (rút gọn cho dễ nhìn) ...'
              fill='url(#paint0_linear_503_3486)'
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d_503_3486'
          x='1.33331'
          y='1.33333'
          width='9.33331'
          height='7.66667'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_503_3486' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_503_3486' result='shape' />
        </filter>
        <linearGradient
          id='paint0_linear_503_3486'
          x1='1.33331'
          y1='1.33333'
          x2='1.33331'
          y2='7.99999'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='1' stopColor='#F0F0F0' />
        </linearGradient>
        <clipPath id='clip0_503_3486'>
          <rect width='28' height='20' rx='2' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FlagUS
