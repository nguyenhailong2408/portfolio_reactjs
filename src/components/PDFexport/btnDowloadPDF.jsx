import { PDFDownloadLink } from '@react-pdf/renderer'
import MyDocument from './pdfTemplate2'
import cvDataVi from '../../mockData/mockDataVi'
import cvDataEn from '../../mockData/mockData'
import { useTranslation } from 'react-i18next'
export default function BtnDowloadPDF() {
  const { t, i18n } = useTranslation()

  function getFormattedDateTime() {
    const now = new Date()

    const pad = (n) => n.toString().padStart(2, '0')

    const day = pad(now.getDate())
    const month = pad(now.getMonth() + 1) // getMonth() trả 0-11
    const year = now.getFullYear()
    const hours = pad(now.getHours())
    const minutes = pad(now.getMinutes())
    const seconds = pad(now.getSeconds())

    return `${day}${month}${year}${hours}${minutes}${seconds}`
  }

  return (
    <PDFDownloadLink
      document={<MyDocument data={i18n.language === 'vi' ? cvDataVi : cvDataEn} />}
      fileName={`CV_NguyenHaiLong_Fullstack_${getFormattedDateTime()}_${i18n.language}.pdf`}
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
