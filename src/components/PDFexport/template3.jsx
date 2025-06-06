import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Svg,
  Path,
} from '@react-pdf/renderer'
import avatar from '../../assets/Image/avatar.jpg'
import RobotoRegular from '../../assets/Font/Roboto-Regular.ttf'
import RobotoBold from '../../assets/Font/Roboto-Bold.ttf'
import LexendBold from '../../assets/Font/Lexend-Bold.ttf'
import LexendRegular from '../../assets/Font/Lexend-Regular.ttf'

Font.register({
  family: 'Roboto',
  fonts: [
    { src: RobotoRegular, fontWeight: 'normal' },
    { src: RobotoBold, fontWeight: 'bold' },
  ],
})

Font.register({
  family: 'Lexend',
  fonts: [
    { src: LexendRegular, fontWeight: 'normal' },
    { src: LexendBold, fontWeight: 'bold' },
  ],
})

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Lexend',
  },
  sidebar: {
    width: '100%',
    backgroundColor: '#f4f4f4',
  },
  main: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 0,
    textTransform: 'uppercase',
    color: '#333',
  },
  text: {
    fontSize: 10,
    marginBottom: 0,
    marginLeft: 5,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#93163c',
  },
  role: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '100px',
    marginBottom: 10,
  },
  summary: {
    marginBottom: 0,
    fontSize: 10,
    width: '100%',
  },
  contact: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // border: '1px solid #ccc',
    padding: 5,
  },
  boxSection: {
    width: '100%',
    // border: '1px solid #ccc',
  },
  boxSectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  markIcon_title: {
    width: 7,
    height: 7,
    backgroundColor: 'black',
    transform: 'rotate(45deg)',
    marginTop: 0,
    marginBottom: -4,
    marginRight: 5,
    marginLeft: 5,
  },
  lineTitle: {
    // width: '',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 17,
    marginRight: 17,
  },
  markIcon_Circle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#000',
    marginRight: 4,
    marginBottom: 0,
    marginTop: 4.5,
  },
  markIcon_content: {
    width: 3,
    height: 3,
    backgroundColor: '#ccc',
    transform: 'rotate(45deg)',
    marginTop: 0,
    marginBottom: -4,
    marginRight: 5,
    marginLeft: 5,
  },
  footer: {
    position: 'absolute',
    right: 30,
    bottom: 20,
    fontSize: 10,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
})

const MyDocument = ({ data }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View>
        <View style={styles.sidebar}>
          {/* <Image style={styles.avatar} src={avatar} />
                <Text style={styles.sectionTitle}>Liên hệ</Text> */}
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.role}>{data.role}</Text>
          <View className='contact' style={styles.contact}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Svg width='12' height='12' viewBox='0 0 24 24'>
                <Path
                  d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.39 21 3 13.61 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.74 3.88a1 1 0 01-.27 1.11l-2.35 2.8z'
                  fill='black'
                />
              </Svg>
              <Text style={styles.text}>{data.phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Svg width='12' height='12' viewBox='0 0 24 24'>
                <Path
                  d='M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8 7l8-5H4l8 5zm0 2l-8-5v10h16V8l-8 5z'
                  fill='#000'
                />
              </Svg>
              <Text style={styles.text}>{data.email}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Svg width='12' height='12' viewBox='0 0 24 24'>
                <Path
                  d='M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8 7l8-5H4l8 5zm0 2l-8-5v10h16V8l-8 5z'
                  fill='#000'
                />
              </Svg>
              <Text style={styles.text}>24/08/1997</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Svg width='12' height='12' viewBox='0 0 24 24'>
                <Path
                  d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z'
                  fill='#000'
                />
              </Svg>
              <Text style={styles.text}>{data.address}</Text>
            </View>
          </View>
          <View className='boxSection' style={styles.boxSection}>
            {/* <View className='boxSectionTitle' style={styles.boxSectionTitle}>
                    <View style={styles.markIcon} />
                    <Text style={styles.sectionTitle}>Giới thiệu</Text>
                  </View> */}
            <View className='lineTitle' style={styles.lineTitle} />
            <View style={{ width: '100%' }}>
              {data.summary.map((line, i) => (
                <Text key={i} style={styles.summary}>
                  {line}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.main}>
          <View className='boxSection' style={styles.boxSection}>
            <View className='boxSectionTitle' style={styles.boxSectionTitle}>
              <View style={styles.markIcon_title} />
              <Text style={styles.sectionTitle}>Kỹ năng</Text>
            </View>
            <View className='lineTitle' style={styles.lineTitle} />
            <View>
              {data.skill.map((skill, i) => (
                <View key={i} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
                  <View style={styles.markIcon_Circle} />
                  <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>{skill.name}: </Text>
                    {skill.skills}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View className='boxSection' style={styles.boxSection}>
            <View className='boxSectionTitle' style={styles.boxSectionTitle}>
              <View style={styles.markIcon_title} />
              <Text style={styles.sectionTitle}>Kinh nghiệm làm việc</Text>
            </View>
            <View className='lineTitle' style={styles.lineTitle} />
            {data.experiences.map((experience, i) => (
              <>
                <View
                  key={i}
                  className='experienceItem'
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginRight: 30,
                      width: '20%',
                    }}
                  >
                    <View style={styles.markIcon_content} />
                    <Text style={styles.text}>{experience.duration}</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      width: '80%',
                      border: '1px solid #ccc',
                    }}
                  >
                    <Text style={{ ...styles.text, fontWeight: 'bold', fontSize: 11 }}>{experience.position}</Text>
                    <Text style={styles.text}>{experience.company}</Text>
                    <View className='description' style={{ marginTop: 5 }}>
                      {experience.description.map((desc, j) => (
                        <View
                          key={j}
                          className='descriptionEx'
                          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', marginLeft: 10 }}
                        >
                          <View style={styles.markIcon_Circle} />
                          <Text style={{ ...styles.text }}>{desc}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
                <View
                  className='projects'
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginRight: 30,
                      width: '20%',
                    }}
                  >
                    <View style={styles.markIcon_content} />
                    <Text style={styles.text}>Projects</Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      width: '80%',
                      border: '1px solid #ccc',
                    }}
                  >
                    <Text style={{ ...styles.text, fontWeight: 'bold', fontSize: 11 }}>{experience.position}</Text>
                    <Text style={styles.text}>{experience.company}</Text>
                    <View className='description' style={{ marginTop: 5 }}>
                      {experience.description.map((desc, j) => (
                        <View
                          key={j}
                          className='descriptionEx'
                          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', marginLeft: 10 }}
                        >
                          <View style={styles.markIcon_Circle} />
                          <Text style={{ ...styles.text }}>{desc}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </>
            ))}
          </View>
        </View>
      </View>

      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) => `Trang ${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    {/* <Page size='A4' style={styles.page}>
      <Text>Đây là nội dung trang 2</Text>

      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) => `Trang ${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page> */}
  </Document>
)
export default function PDFExport2({ data }) {
  return (
    <div id='resume' className='w-full md:max-w-[80%] my-10 m-auto'>
      <h1>My Resume</h1>
      <div className='w-full md:h-[100vh] h-[50vh]'>
        <PDFViewer width='100%' height='100%'>
          <MyDocument data={data} />
        </PDFViewer>
      </div>
    </div>
  )
}
