import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from './myDocument'
import cvDataVi from '../../mockData/mockDataVi'
import cvDataEn from '../../mockData/mockData'
import { useTranslation } from 'react-i18next'

export default function BtnDowloadPDF() {
  const { t, i18n } = useTranslation()
  const translations = {
    name: t('name'),
    role: t('role'),
    project: t('project'),
    skill: t('skill'),
    education: t('education'),
    experience: t('cvExperience'),
    personalProject: t('personalProject'),
    certificate: t('certificate'),
    page: t('page'),
    profciency: t('profciency'),
    description: t('description'),
    responsibilities: t('responsibilities'),
    techStack: t('techStack'),
    teamSize: t('teamSize'),
    download: t('download')
  }
  return (
    <PDFDownloadLink
      document={<MyDocument data={i18n.language === 'vi' ? cvDataVi : cvDataEn} translations={translations} />}
      fileName='CV_NguyenHaiLong_Fullstack.pdf'
    >
      <button
        className='
            mt-6 px-8 py-3 rounded-full text-sm md:text-lg font-semibold text-white
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-700 hover:to-pink-700
            transform hover:scale-105 transition-all duration-300
            shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75
          '
      >
        {t('download')} CV (PDF)
      </button>
    </PDFDownloadLink>
  )
}
