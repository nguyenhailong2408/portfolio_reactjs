/* eslint-disable comma-dangle */
/* eslint-disable indent */
import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer'
// import avatar from '../../assets/Image/avatar.jpg'
import RobotoRegular from '../../assets/Font/Roboto-Regular.ttf'
import RobotoBold from '../../assets/Font/Roboto-Bold.ttf'
import LexendBold from '../../assets/Font/Lexend-Bold.ttf'
import LexendSemiBold from '../../assets/Font/Lexend-SemiBold.ttf'
import LexendRegular from '../../assets/Font/Lexend-Regular.ttf'
import LexendThin from '../../assets/Font/Lexend-Thin.ttf'
import LexendLight from '../../assets/Font/Lexend-Light.ttf'
import PhoneIcon from '../icon/phoneIcon'
import EmailIcon from '../icon/emailIcon'
import AddressIcon from '../icon/iconAddress'
import BirthDayIcon from '../icon/iconBirthDay'
import CvOnlineIcon from '../icon/cvonlineIcon'
import { useTranslations } from '../../utils/translations'
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
    { src: LexendLight, fontWeight: 'light' },
    { src: LexendThin, fontWeight: 'thin' },
    { src: LexendRegular, fontWeight: 'normal' },
    { src: LexendBold, fontWeight: 'bold' },
    { src: LexendSemiBold, fontWeight: 'semibold' },
  ],
})

function MyDocument({ data }) {
  const translations = useTranslations()
  return (
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
                <PhoneIcon size={12} color='#000' />
                <Text style={styles.text}>{data.phone}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <EmailIcon size={12} color='#000' />
                <Text style={styles.text}>{data.email}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <BirthDayIcon size={12} color='#000' />
                <Text style={styles.text}>24/08/1997</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <AddressIcon size={12} color='#000' />
                <Text style={styles.text}>{data.address}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <CvOnlineIcon size={12} color='#000' />
              <Text style={styles.text}>{data.cvonline}</Text>
            </View>
          </View>

          <View style={styles.main}>
            <View className='boxSection introduce' style={styles.boxSection}>
              {/* <View className='boxSectionTitle' style={styles.boxSectionTitle}>
                    <View style={styles.markIcon} />
                    <Text style={styles.sectionTitle}>Giới thiệu</Text>
                  </View> */}
              {/* <View className='lineTitle' style={styles.lineTitle} /> */}
              <View style={{ width: '100%' }}>
                {data.summary.map((line, i) => (
                  <Text key={i} style={styles.summary}>
                    {line}
                  </Text>
                ))}
              </View>
            </View>
            <View className='boxSection tech-skills' style={styles.boxSection}>
              <View className='boxSectionTitle' style={styles.boxSectionTitle}>
                <View style={styles.markIcon_title} />
                <Text style={styles.sectionTitle}>{translations.skill}</Text>
              </View>
              <View className='lineTitle' style={styles.lineTitle} />
              <View>
                {data.skill.map((skill, i) => (
                  <View key={i} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
                    <View style={styles.markIcon_Circle} />
                    <Text style={styles.text}>
                      <Text style={{ fontWeight: 'semibold' }}>{skill.name}: </Text>
                      {skill.skills}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View className='boxSection education' style={styles.boxSection}>
              <View className='boxSectionTitle' style={styles.boxSectionTitle}>
                <View style={styles.markIcon_title} />
                <Text style={styles.sectionTitle}>{translations.education}</Text>
              </View>
              <View className='lineTitle' style={styles.lineTitle} />
              {data.education.map((edu, i) => (
                <View
                  key={i}
                  className='educationItem'
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}
                >
                  <View
                    // wrap={false}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginRight: 10,
                      width: '25%',
                      flexWrap: 'nowrap',
                    }}
                  >
                    <View style={styles.markIcon_content} />
                    <Text style={{ ...styles.text, flexWrap: 'nowrap' }}>{edu.year}</Text>
                  </View>
                  <View
                    // wrap={false}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      width: '75%',
                    }}
                  >
                    <Text style={{ ...styles.text, fontWeight: 'semibold', fontSize: 11 }}>{edu.school}</Text>
                    <Text style={{ ...styles.text, fontWeight: 'normal' }}>{edu.degree}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View className='boxSection experiences' style={styles.boxSection}>
              <View className='boxSectionTitle' style={styles.boxSectionTitle}>
                <View style={styles.markIcon_title} />
                <Text style={styles.sectionTitle}>{translations.experience}</Text>
              </View>
              <View className='lineTitle' style={styles.lineTitle} />
              {data.experiences.map((experience, i) => (
                <View key={i}>
                  <View
                    // key={i}
                    className='experienceCompany'
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}
                  >
                    <View
                      // wrap={false}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginRight: 10,
                        width: '25%',
                        flexWrap: 'nowrap',
                      }}
                    >
                      <View style={styles.markIcon_content} />
                      <Text style={{ ...styles.text, flexWrap: 'nowrap' }}>{experience.duration}</Text>
                    </View>
                    <View
                      // wrap={false}
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '75%',
                      }}
                    >
                      <Text style={{ ...styles.text, fontWeight: 'semibold', fontSize: 11 }}>
                        {experience.position}
                      </Text>
                      <Text style={{ ...styles.text, fontWeight: 'normal' }}>{experience.company}</Text>
                      <View className='description' style={{ marginTop: 5 }}>
                        {experience.description.map((desc, d) => (
                          <View key={d} wrap={false}>
                            <View
                              className='descriptionEx'
                              style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', marginLeft: 10 }}
                              wrap={false}
                            >
                              <View style={styles.markIcon_Circle} />
                              <Text style={{ ...styles.text }}>{desc}</Text>
                            </View>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>

                  {/* Check hiển thị projects */}
                  {Array.isArray(experience.projects) && experience.projects.length > 0 && (
                    <View
                      className='projects'
                      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}
                    >
                      <View
                        // wrap={false}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'flex-start',
                          marginRight: 30,
                          width: '20%',
                        }}
                      >
                        <View style={styles.markIcon_content} />
                        <Text style={{ ...styles.text, fontWeight: 'semibold' }}>{translations.project}</Text>
                      </View>
                      <View
                        // wrap={false}
                        className='project'
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          flexWrap: 'wrap',
                          width: '80%',
                        }}
                      >
                        {experience.projects.map((proj, j) => {
                          const keys = Object.keys(proj) // ['name', 'age', 'city']
                          return (
                            <View
                              key={j}
                              className='projectItem'
                              style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}
                              // wrap={false}
                            >
                              <View
                                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}
                              >
                                <Text style={{ ...styles.text, fontWeight: 'semibold' }}>{proj.name}</Text>
                                <View style={styles.markIcon_Between} />
                                <Text style={{ ...styles.text }}>{proj.duration}</Text>
                              </View>

                              {keys.map((key, k) => {
                                if (key === 'name' || key === 'duration') return null // Skip 'name' and 'duration'
                                return (
                                  <View
                                    key={k}
                                    className='desProject'
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'col',
                                      alignItems: 'flex-start',
                                      flexWrap: 'wrap',
                                      marginLeft: 10,
                                      width: '100%',
                                    }}
                                    wrap={false}
                                  >
                                    <View
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        width: '100%',
                                      }}
                                    >
                                      {(() => {
                                        switch (key) {
                                          case 'url':
                                            return (
                                              <>
                                                <View style={styles.markIcon_Circle} />
                                                <Text
                                                  style={{
                                                    ...styles.text,
                                                    textTransform: 'uppercase',
                                                    fontWeight: 'semibold',
                                                  }}
                                                >
                                                  {key}:&nbsp;
                                                </Text>
                                                <View
                                                  style={{
                                                    display: 'flex',
                                                    flexDirection: 'col',
                                                    alignItems: 'flex-start',
                                                    marginLeft: -16,
                                                    marginTop: -3,
                                                    marginBottom: 3,
                                                  }}
                                                >
                                                  {proj[key].map((url, i) => (
                                                    <Text key={i}>
                                                      <Link
                                                        src={url}
                                                        style={{
                                                          ...styles.text,
                                                          fontWeight: 'light',
                                                          textTransform: 'none',
                                                        }}
                                                      >
                                                        {url}
                                                      </Link>
                                                      &nbsp;
                                                    </Text>
                                                  ))}
                                                </View>
                                              </>
                                            )
                                          case 'CHPlay':
                                            return (
                                              <>
                                                <View style={styles.markIcon_Circle} />
                                                <Text style={{ ...styles.text, fontWeight: 'semibold' }}>
                                                  {key}:&nbsp;
                                                  <Link
                                                    src={proj[key]}
                                                    style={{
                                                      ...styles.text,
                                                      fontWeight: 'light',
                                                      textTransform: 'none',
                                                    }}
                                                  >
                                                    {proj[key]}
                                                  </Link>
                                                </Text>
                                              </>
                                            )
                                          case 'AppStore':
                                            return (
                                              <>
                                                <View style={styles.markIcon_Circle} />
                                                <Text style={{ ...styles.text, fontWeight: 'semibold' }}>
                                                  {key}:&nbsp;
                                                  <Link
                                                    src={proj[key]}
                                                    style={{
                                                      ...styles.text,
                                                      fontWeight: 'light',
                                                      textTransform: 'none',
                                                    }}
                                                  >
                                                    {proj[key]}
                                                  </Link>
                                                </Text>
                                              </>
                                            )
                                          case 'responsibilities':
                                            return (
                                              <View style={{ display: 'flex', flexDirection: 'column' }}>
                                                <View
                                                  style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                  }}
                                                >
                                                  <View style={styles.markIcon_Circle} />
                                                  <Text
                                                    style={{
                                                      ...styles.text,
                                                      fontWeight: 'semibold',
                                                      textTransform: 'upperfirst',
                                                    }}
                                                  >
                                                    {translations[key]}:&nbsp;
                                                  </Text>
                                                </View>
                                                <View style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                  {proj[key].map((line, index) => (
                                                    <View
                                                      key={index}
                                                      style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'flex-start',
                                                        marginLeft: 20,
                                                      }}
                                                    >
                                                      <View style={styles.markIcon_Circle_InsideWhite} />
                                                      <Text key={index} style={{ ...styles.text, fontWeight: 'light' }}>
                                                        {line}
                                                      </Text>
                                                    </View>
                                                  ))}
                                                </View>
                                              </View>
                                            )
                                          default:
                                            return (
                                              <>
                                                <View style={styles.markIcon_Circle} />
                                                <Text
                                                  style={{
                                                    ...styles.text,
                                                    textTransform: 'upperfirst',
                                                    fontWeight: 'semibold',
                                                  }}
                                                >
                                                  {translations[key]}:{' '}
                                                  <Text style={{ ...styles.text, fontWeight: 'light' }}>
                                                    {proj[key]}
                                                  </Text>
                                                </Text>
                                              </>
                                            )
                                        }
                                      })()}
                                    </View>
                                  </View>
                                )
                              })}
                            </View>
                          )
                        })}
                      </View>
                    </View>
                  )}
                </View>
              ))}
            </View>

            <View className='boxSection personalProject' style={styles.boxSection}>
              <View className='boxSectionTitle' style={styles.boxSectionTitle}>
                <View style={styles.markIcon_title} />
                <Text style={styles.sectionTitle}>{translations.personalProject}</Text>
              </View>
              <View className='lineTitle' style={styles.lineTitle} />
              {data.personalProjects.map((personalProj, i) => (
                <View
                  key={i}
                  className='educationItem'
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}
                >
                  <View
                    // wrap={false}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginRight: 10,
                      width: '25%',
                      flexWrap: 'nowrap',
                    }}
                  >
                    <View style={styles.markIcon_content} />
                    <Text style={{ ...styles.text, flexWrap: 'nowrap' }}>{personalProj.duration}</Text>
                  </View>
                  <View
                    // wrap={false}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      width: '75%',
                    }}
                  >
                    <Text style={{ ...styles.text, fontWeight: 'semibold', fontSize: 11 }}>{personalProj.name}</Text>
                    <Text
                      style={{
                        ...styles.text,
                        textTransform: 'uppercase',
                        fontWeight: 'normal',
                      }}
                    >
                      URL:&nbsp;
                      <Link
                        src={personalProj.url}
                        style={{
                          ...styles.text,
                          fontWeight: 'normal',
                          textTransform: 'none',
                        }}
                      >
                        {personalProj.url}
                      </Link>
                    </Text>
                    <Text style={{ ...styles.text, fontWeight: 'normal' }}>{personalProj.description}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View className='boxSection certificates' style={styles.boxSection}>
              <View className='boxSectionTitle' style={styles.boxSectionTitle}>
                <View style={styles.markIcon_title} />
                <Text style={styles.sectionTitle}>{translations.certificate}</Text>
              </View>
              <View className='lineTitle' style={styles.lineTitle} />
              {data.certificates.map((certificate, i) => (
                <View
                  key={i}
                  className='certificateItem'
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}
                >
                  <View
                    // wrap={false}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginRight: 10,
                      width: '25%',
                      flexWrap: 'nowrap',
                    }}
                  >
                    <View style={styles.markIcon_content} />
                    <Text style={{ ...styles.text, flexWrap: 'nowrap' }}>{certificate.date}</Text>
                  </View>
                  <View
                    // wrap={false}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexWrap: 'wrap',
                      width: '75%',
                    }}
                  >
                    <Text style={{ ...styles.text, fontWeight: 'semibold', fontSize: 11 }}>{certificate.name}</Text>
                    <Text style={{ ...styles.text, fontWeight: 'normal' }}>{certificate.organization}</Text>
                    <Text style={{ ...styles.text, fontWeight: 'normal' }}>
                      {translations.profciency}: {certificate.proficiency}
                    </Text>
                    <Text style={{ ...styles.text, fontWeight: 'normal' }}>{certificate.abilities}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) => `${translations.page} ${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  )
}

export default MyDocument

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Lexend',
    fontWeight: 'light',
    // lineHeight: 1.2
  },
  sidebar: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  main: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'semibold',
    marginTop: 5,
    marginBottom: 0,
    textTransform: 'uppercase',
    color: '#93163c',
  },
  text: {
    fontSize: 10,
    marginBottom: 0,
    marginLeft: 5,
    marginRight: 15,
    lineHeight: 1.5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'semibold',
    marginBottom: 10,
    color: '#93163c',
  },
  role: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 'normal',
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
    fontWeight: 'light',
    lineHeight: 1.5,
  },
  contact: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontWeight: 'semibold',
    // border: '1px solid #ccc',
    padding: 5,
  },
  boxSection: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
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
    backgroundColor: '#93163c',
    transform: 'rotate(45deg)',
    marginTop: 0,
    marginBottom: -4,
    marginRight: 10,
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
    marginTop: 5,
    marginBottom: 0,
    marginRight: 5,
    marginLeft: 5,
  },
  markIcon_Between: {
    height: 12,
    borderLeft: '1px solid black',
  },
  markIcon_Circle_InsideWhite: {
    width: 4,
    height: 4,
    borderRadius: 2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    marginTop: 4.5,
    marginRight: 4,
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
