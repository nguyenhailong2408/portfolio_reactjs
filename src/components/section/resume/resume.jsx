import cvDataEn from '../../../mockData/mockData'
import cvDataVi from '../../../mockData/mockDataVi'
import PDFExport from '../../PDFexport'
import { useTranslation } from 'react-i18next'
import CVViewer from '../../PDFviewer'
import BtnDowloadPDF from '../../PDFexport/btnDowloadPDF'
// import PDFExport2 from '../PDFexport/pdf2'
// import PDFExport2 from '../PDFexport/template3'

export default function Resume(props) {
  // console.log(props)
  const { t, i18n } = useTranslation()
  return (
    <div id={props.elementID} className='my-5 md:my-10 p-4 md:p-10 pt-6 min-h-screen flex flex-col'>
      <h1 className='text-3xl md:text-5xl font-semibold mb-10 relative title-section'>{t('resume')}</h1>
      <div className={props.isMobile ? 'block' : 'hidden'}>
        <CVViewer data={i18n.language === 'vi' ? cvDataVi : cvDataEn}></CVViewer>
      </div>
      <div className={props.isMobile ? 'hidden' : ''}>
        <PDFExport data={i18n.language === 'vi' ? cvDataVi : cvDataEn}/>
      </div>
      <div className='mt-6 flex justify-center'>
        <BtnDowloadPDF />
      </div>
      {/* <PDFExport2 data={cvData} /> */}
    </div>
  )
}
