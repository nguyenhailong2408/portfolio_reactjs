export default function Contact(props) {
  return (
    <section
      id={props.elementID}
      className='my-5 md:my-10 p-4 md:p-10 pt-6 min-h-screen flex flex-col'
    >
      <div className='container mx-auto'>
        {/* Title is left-aligned within this container */}
        <h2 className='text-3xl md:text-5xl font-semibold mb-12 relative title-section text-left'>Contact</h2>

        <div
          className='w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700
                        transform transition-all duration-300 hover:shadow-2xl'
        >
          <p className='text-center md:text-lg text-gray-700 dark:text-gray-300 mb-6'>
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <form className='space-y-4'>
            <input type='text' placeholder='Your Name' className='input-base' aria-label='Your Name' />
            <input type='email' placeholder='Your Email' className='input-base' aria-label='Your Email' />
            <textarea
              placeholder='Your Message'
              rows='5'
              className='input-base resize-none'
              aria-label='Your Message'
            ></textarea>

            <div className='flex justify-center pt-2'>
              {' '}
              <button
                type='submit'
                className='mt-6 px-8 py-3 rounded-full md:text-lg font-semibold text-white 
                           bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
                           transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75'
              >
                Send Messages
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
