import { Svg, Path } from '@react-pdf/renderer'
function BirthDayIcon({ size = 12, color = '#000' }) {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24'>
      <Path
        d='M12 2C11.45 2 11 2.45 11 3s.45 1 1 1 1-.45 1-1-.45-1-1-1zm5 6V6c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2H5v14h14V8h-2zm-8 0V6h6v2h-6zm8 12H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7v-2h10v2z'
        fill={color}
      />
    </Svg>
  )
}

export default BirthDayIcon
