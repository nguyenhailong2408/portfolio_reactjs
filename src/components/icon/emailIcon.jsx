import { Svg, Path } from '@react-pdf/renderer'
function EmailIcon({ size = 12, color = '#000' }) {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24'>
      <Path
        d='M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8 7l8-5H4l8 5zm0 2l-8-5v10h16V8l-8 5z'
        fill={color}
      />
    </Svg>
  )
}

export default EmailIcon
