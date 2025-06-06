import { motion, AnimatePresence } from 'framer-motion'

const commonLightGradient = 'linear-gradient(rgb(255, 255, 255) 0%, rgb(253, 253, 254) 7.692%, rgb(250, 250, 252) 7.692%, rgb(250, 250, 252) 15.385%, rgb(247, 247, 249) 15.385%, rgb(247, 247, 249) 23.077%, rgb(244, 244, 246) 23.077%, rgb(244, 244, 246) 30.769%, rgb(241, 241, 243) 30.769%, rgb(241, 241, 243) 38.462%, rgb(238, 238, 240) 38.462%, rgb(238, 238, 240) 46.154%, rgb(235, 235, 237) 46.154%, rgb(235, 235, 237) 53.846%, rgb(232, 232, 234) 53.846%, rgb(232, 232, 234) 61.538%, rgb(229, 229, 231) 61.538%, rgb(229, 229, 231) 69.231%, rgb(226, 226, 228) 69.231%, rgb(226, 226, 228) 76.923%, rgb(223, 223, 225) 76.923%, rgb(223, 223, 225) 84.615%, rgb(220, 220, 222) 84.615%, rgb(220, 220, 222) 92.308%, rgb(217, 217, 219) 92.308%, rgb(217, 217, 219) 100%)';
const commonDarkGradient = 'linear-gradient(rgb(21, 21, 21) 0%, rgb(20, 20, 20) 7.692%, rgb(19, 19, 19) 7.692%, rgb(19, 19, 19) 15.385%, rgb(18, 18, 18) 15.385%, rgb(18, 18, 18) 23.077%, rgb(17, 17, 17) 23.077%, rgb(17, 17, 17) 30.769%, rgb(16, 16, 16) 30.769%, rgb(16, 16, 16) 38.462%, rgb(15, 15, 15) 38.462%, rgb(15, 15, 15) 46.154%, rgb(14, 14, 14) 46.154%, rgb(14, 14, 14) 53.846%, rgb(13, 13, 13) 53.846%, rgb(13, 13, 13) 61.538%, rgb(12, 12, 12) 61.538%, rgb(12, 12, 12) 69.231%, rgb(11, 11, 11) 69.231%, rgb(11, 11, 11) 76.923%, rgb(10, 10, 10) 76.923%, rgb(10, 10, 10) 84.615%, rgb(9, 9, 9) 84.615%, rgb(9, 9, 9) 92.308%, rgb(8, 8, 8) 92.308%, rgb(8, 8, 8) 100%)';

const lightVariants = {
  home: {
    background: commonLightGradient,
  },
  about: {
    background: commonLightGradient,
  },
  experience: {
    background: commonLightGradient,
  },
  project: {
    background: commonLightGradient,
  },
  skill: {
    background: commonLightGradient,
  },
  contact: {
    background: commonLightGradient,
  },
  resume: {
    background: commonLightGradient,
  },
}

const darkVariants = {
  home: {
    // Chuyển từ màu đậm hơn (rgb(27 28 29)) đến các tông màu tương tự
    background: commonDarkGradient,
  },
  about: {
    background: commonDarkGradient,
  },
  experience: {
    background: commonDarkGradient,
  },
  project: {
    background: commonDarkGradient,
  },
  skill: {
    background: commonDarkGradient,
  },
  contact: {
    background: commonDarkGradient,
  },
  resume: {
    background: commonDarkGradient,
  },
}

export default function BackgroundMotion({ activeBg, darkMode }) {
  const variants = darkMode ? darkVariants : lightVariants
  const currentBackground = variants[activeBg]?.background || (darkMode ? '#0f172a' : '#f8fafc');

  return (
    <>
      {/* Lớp nền tĩnh (fallback) và hiệu ứng chuyển đổi màu toàn trang */}
      <div
        className='fixed inset-0 -z-20'
        style={{
          background: darkMode ?  commonDarkGradient : commonLightGradient, // Màu nền cơ bản
        }}
      />
      {/* Lớp động với Framer Motion để chuyển đổi gradient mượt mà */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={`${activeBg}-${darkMode ? 'dark' : 'light'}`}
          initial={{ opacity: 0, background: currentBackground }}
          animate={{ opacity: 1, background: currentBackground }}
          exit={{ opacity: 0, background: currentBackground }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='pointer-events-none'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -10,
          }}
        />
      </AnimatePresence>
    </>
  )
}