import { useEffect, useState, useRef, memo } from 'react'

// Star component nhỏ để tối ưu hiệu suất
const Star = memo(({ id, style }) => (
  <div key={id} className='absolute rounded-full bg-black dark:bg-gray-300 opacity-0' style={style}></div>
))

const FallingStars = ({ numberOfStars = 50, darkMode }) => {
  const [stars, setStars] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const newStars = []
    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 2 + 1 // Kích thước từ 1px đến 3px
      const delay = Math.random() * 5 // Độ trễ animation ngẫu nhiên
      const duration = Math.random() * 5 + 5 // Thời gian rơi từ 5s đến 10s
      const left = Math.random() * 100 // Vị trí ngang ngẫu nhiên

      newStars.push({
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          animation: `fall ${duration}s linear ${delay}s infinite, twinkle ${
            Math.random() * 2 + 1
          }s infinite alternate`,
          filter: `blur(${Math.random() * 0.5}px)`, // Làm mờ nhẹ để tạo cảm giác lung linh
          opacity: Math.random() * 0.8 + 0.2, // Độ mờ ngẫu nhiên
        },
      })
    }
    setStars(newStars)
  }, [numberOfStars]) // Re-generate stars if numberOfStars changes

  // Định nghĩa keyframes cho animation rơi và lấp lánh (twinkle)
  // Tailwind không hỗ trợ @keyframes trực tiếp, nên chúng ta sẽ thêm vào CSS chung
  useEffect(() => {
    const styleSheet = document.styleSheets[0] || document.createElement('style')
    if (!document.styleSheets[0]) {
      document.head.appendChild(styleSheet)
    }

    const fallKeyframes = `
      @keyframes fall {
        0% { transform: translateY(-10vh) scale(0.8); opacity: 0; }
        5% { opacity: 1; }
        95% { opacity: 1; }
        100% { transform: translateY(110vh) scale(1); opacity: 0; }
      }
    `

    const twinkleKeyframes = `
      @keyframes twinkle {
        from { opacity: 0.2; }
        to { opacity: 0.8; }
      }
    `

    // Add rules if they don't exist
    if (![...styleSheet.cssRules].some((rule) => rule.cssText.includes('@keyframes fall'))) {
      styleSheet.insertRule(fallKeyframes, styleSheet.cssRules.length)
    }
    if (![...styleSheet.cssRules].some((rule) => rule.cssText.includes('@keyframes twinkle'))) {
      styleSheet.insertRule(twinkleKeyframes, styleSheet.cssRules.length)
    }
  }, []) // Run once on mount

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 overflow-hidden pointer-events-none -z-9' // Đặt z-index thấp hơn background chính
    >
      {stars.map((star) => (
        <Star key={star.id} id={star.id} style={star.style} />
      ))}
    </div>
  )
}

export default FallingStars
