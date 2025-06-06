import { Svg, Path } from '@react-pdf/renderer'
function PhoneIcon({ size = 12, color = '#000' }) {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24'>
      <Path
        d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.39 21 3 13.61 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.74 3.88a1 1 0 01-.27 1.11l-2.35 2.8z'
        fill={color}
      />
    </Svg>
  )
}

export default PhoneIcon
