
function ScrollToTop() {
  const ClickToTop = () => {
    // $('html, body').animate({ scrollTop: 0 }, 800);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      id='wrapper'
      onClick={ClickToTop}
      className='fixed bottom-[30px] right-[15px] z-[9999] bg-black w-12 h-12 cursor-pointer rounded-full flex items-center justify-center'
    >
      <div
        id='back_to_top'
        className='text-white'
        // style='display:none;width: 40px; height: 40px; border-radius: 50%; border: 2px solid rgb(255, 255, 255); box-shadow: rgba(19, 19, 19, 0.3) 0px 0px 10px; background: rgba(70, 70, 70, 0.84);'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-chevron-up'
          viewBox='0 0 16 16'
          // style={{'top': '25%', 'left': '25%', 'position': 'absolute', 'color': 'white'}}
        >
          <path
            fillRule='evenodd'
            d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
          />
        </svg>
      </div>
    </button>
  )
}

export default ScrollToTop
