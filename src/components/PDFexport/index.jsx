import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './myDocument'

export default function PDFExport({ data, translations }) {
  return (
    <>
      <div className='w-full md:h-[100vh] h-[50vh]'>
        <PDFViewer width='100%' height='100%'>
          <MyDocument data={data} translations={translations} />
        </PDFViewer>
      </div>
    </>
  )
}
