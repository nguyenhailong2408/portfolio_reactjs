import { Svg, Path } from '@react-pdf/renderer';

function CvOnlineIcon({ size = 12, color = '#000' }) {
  return (
     <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
           10-4.48 10-10S17.52 2 12 2z"
        fill={color}
      />
      <Path
        d="M12 2c2.21 0 4 4.48 4 10s-1.79 10-4 10
           -4-4.48-4-10 1.79-10 4-10z"
        fill="#fff"
      />
      <Path
        d="M2.05 9h19.9a10.03 10.03 0 0 1 0 6h-19.9a10.03 10.03 0 0 1 0-6z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CvOnlineIcon;
