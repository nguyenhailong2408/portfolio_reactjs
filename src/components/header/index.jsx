import NavBar from '../navbar/navbar'

const Header = () => {
  const listNav = { arrayName: ['ABOUT ME', 'EXPERIENCE', 'SKILLS', 'PROJECTS', 'CONTACT'] }
  return (
    <header className='text-black text-center py-4 flex justify-center w-[100%]'>
      <div className='container flex justify-between'>
        <div className='p-[2px] rounded-full bg-white'>
          <div className='flex-none w-14 h-14 rounded-full shadow-md relative overflow-hidden'>
            <img src='/src/assets/Image/avatar.jpg' alt='' className='absolute top-[-30%]' />
          </div>
        </div>
        <NavBar listNav={listNav}/>
      </div>
    </header>
  )
}

export default Header