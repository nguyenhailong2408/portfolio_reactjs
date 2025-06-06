import Fontend from './fontend'
import Backend from './backend'
import UIUX from './UIUX'
import VersionControl from './versionControl'
import ToolAndTech from './toolAndTech'
import CreativeSkill from './creativeSkill'
import { useTranslation } from 'react-i18next'

const Skills = (props) => {
  const { t, i18n } = useTranslation()
  return (
    <section id={props.elementID} className='my-5 md:my-10 p-4 md:p-10 pt-6 min-h-screen flex flex-col'>
      <h2 className='text-3xl md:text-5xl font-semibold mb-10 relative title-section'>{t('skill')}</h2>
      <h2 className='text-[18px] md:text-2xl my-1 md:my-5'>{t('programmingLanguagesAndTools')}:</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
        <Fontend />
        <Backend />
        <UIUX />
        <VersionControl />
        <ToolAndTech />
        <CreativeSkill />
      </div>
      {/* <h2 className='text-[18px] md:text-2xl my-1 md:my-5'>Others:</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>

      </div> */}
    </section>
  )
}

export default Skills
