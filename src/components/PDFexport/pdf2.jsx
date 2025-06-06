import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Svg,
  Path,
} from '@react-pdf/renderer'
import RobotoRegular from '../../assets/Font/Roboto-Regular.ttf'
import RobotoBold from '../../assets/Font/Roboto-Bold.ttf'
import LexendBold from '../../assets/Font/Lexend-Bold.ttf'
import LexendRegular from '../../assets/Font/Lexend-Regular.ttf'
// Đăng ký Font
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

// Định nghĩa Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row', // Chuyển thành hàng để chia 2 cột
    fontFamily: 'Lexend',
    fontSize: 10, // Điều chỉnh cỡ chữ tổng thể nhỏ hơn để CV gọn gàng
    lineHeight: 1.4,
    color: '#333',
  },
  sidebar: {
    width: '35%', // Cột bên trái rộng hơn một chút
    backgroundColor: '#f4f4f4',
    padding: 20,
    paddingTop: 30,
  },
  main: {
    width: '65%', // Cột bên phải
    padding: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 13, // Cỡ chữ tiêu đề lớn hơn
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
    color: '#333',
  },
  text: {
    fontSize: 9, // Cỡ chữ nội dung
    marginBottom: 3,
    marginLeft: 5,
    marginRight: 0, // Không cần marginRight quá lớn
  },
  name: {
    fontSize: 26, // Tên to và nổi bật
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#93163c', // Màu nổi bật
    fontFamily: 'Roboto', // Dùng Roboto cho tên để tạo sự khác biệt
  },
  role: {
    fontSize: 15,
    color: '#555',
    marginBottom: 20,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
  },
  summary: {
    marginBottom: 5,
    fontSize: 9,
    width: '100%',
    lineHeight: 1.4,
    textAlign: 'justify', // Căn đều hai bên cho phần giới thiệu
  },
  contact: {
    width: '100%',
    marginBottom: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  boxSection: {
    width: '100%',
    marginBottom: 15,
  },
  boxSectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  markIcon: {
    width: 8, // Icon lớn hơn
    height: 8,
    backgroundColor: '#93163c', // Màu icon trùng với tên
    transform: 'rotate(45deg)',
    marginRight: 8, // Khoảng cách tới tiêu đề
    marginLeft: 0,
  },
  lineTitle: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  markIcon_Circle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#333',
    marginRight: 6,
    marginTop: 3, // Căn chỉnh với text
  },
  // Style cho Kinh nghiệm làm việc
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  companyName: {
    fontSize: 9,
    // fontStyle: 'italic',
    color: '#555',
  },
  duration: {
    fontSize: 9,
    color: '#555',
  },
  projectDescription: {
    fontSize: 9,
    marginBottom: 2,
    marginLeft: 15, // Thụt vào một chút
  },
  responsibilityItem: {
    flexDirection: 'row',
    marginBottom: 2,
    marginLeft: 15, // Thụt vào cho các gạch đầu dòng
    alignItems: 'flex-start',
  },
  responsibilityText: {
    fontSize: 9,
    flexShrink: 1,
    lineHeight: 1.3,
  },
  educationItem: {
    marginBottom: 8,
  },
  degree: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  university: {
    fontSize: 9,
    // fontStyle: 'italic',
    color: '#555',
  },
  educationDuration: {
    fontSize: 9,
    color: '#555',
  },
})

// Component Document chính
const MyDocument = ({ data }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      {/* Sidebar - Cột bên trái */}
      <View style={styles.sidebar}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.role}>{data.role}</Text>

        <View className='contact' style={styles.contact}>
          <View style={styles.contactItem}>
            <Svg width='10' height='10' viewBox='0 0 24 24'>
              <Path
                d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.39 21 3 13.61 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.67.74 3.88a1 1 0 01-.27 1.11l-2.35 2.8z'
                fill='#333'
              />
            </Svg>
            <Text style={styles.text}>{data.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Svg width='10' height='10' viewBox='0 0 24 24'>
              <Path
                d='M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8 7l8-5H4l8 5zm0 2l-8-5v10h16V8l-8 5z'
                fill='#333'
              />
            </Svg>
            <Text style={styles.text}>{data.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Svg width='10' height='10' viewBox='0 0 24 24'>
              <Path
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 13H11v-4h1.5v4zm0-5H11V7h1.5v3z' // Icon thông tin
                fill='#333'
              />
            </Svg>
            <Text style={styles.text}>{data.dob}</Text>
          </View>
          <View style={styles.contactItem}>
            <Svg width='10' height='10' viewBox='0 0 24 24'>
              <Path
                d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z'
                fill='#333'
              />
            </Svg>
            <Text style={styles.text}>{data.address}</Text>
          </View>
          {data.linkedin && (
            <View style={styles.contactItem}>
              <Svg width='10' height='10' viewBox='0 0 24 24'>
                <Path
                  d='M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zm10 12.3h-3V13.5c0-1.4-.6-2-1.9-2-1.1 0-1.7.7-1.9 1.4v5.1H9.5V8h3v1.7h.1c.5-.8 1.7-1.6 3.3-1.6 3.5 0 4 2.3 4 5.8V19z'
                  fill='#333'
                />
              </Svg>
              <Text style={styles.text}>{data.linkedin}</Text>
            </View>
          )}
          {data.github && (
            <View style={styles.contactItem}>
              <Svg width='10' height='10' viewBox='0 0 24 24'>
                <Path
                  d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.08-.73.08-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.13-3.18 0 0 1-.32 3.3.09.955-.264 1.956-.396 2.956-.396.99 0 1.99.132 2.945.396 2.29-1.41 3.29-1.09 3.29-1.09.67 1.657.26 2.877.13 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.365.815 1.09.815 2.195 0 1.59-.015 2.875-.015 3.25.0 0 .21.19.82.26C20.565 22.1 24 17.592 24 12.297c0-6.627-5.373-12-12-12z'
                  fill='#333'
                />
              </Svg>
              <Text style={styles.text}>{data.github}</Text>
            </View>
          )}
        </View>

        {/* Giới thiệu */}
        <View style={styles.boxSection}>
          <View style={styles.boxSectionTitle}>
            <View style={styles.markIcon} />
            <Text style={styles.sectionTitle}>Giới thiệu</Text>
          </View>
          <View style={styles.lineTitle} />
          <View style={{ width: '100%' }}>
            {data.summary.map((line, i) => (
              <Text key={i} style={styles.summary}>
                {line}
              </Text>
            ))}
          </View>
        </View>

        {/* Kỹ năng mềm */}
        <View style={styles.boxSection}>
          <View style={styles.boxSectionTitle}>
            <View style={styles.markIcon} />
            <Text style={styles.sectionTitle}>Kỹ năng mềm</Text>
          </View>
          <View style={styles.lineTitle} />
          <View>
            {data.softSkills.map((skill, i) => (
              <View key={i} style={{ display: 'flex', flexDirection: 'row', marginLeft: 5 }}>
                <View style={styles.markIcon_Circle} />
                <Text style={styles.text}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Học vấn */}
        <View style={styles.boxSection}>
          <View style={styles.boxSectionTitle}>
            <View style={styles.markIcon} />
            <Text style={styles.sectionTitle}>Học vấn</Text>
          </View>
          <View style={styles.lineTitle} />
          <View>
            {data.education.map((edu, i) => (
              <View key={i} style={styles.educationItem}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.university}>{edu.university}</Text>
                <Text style={styles.educationDuration}>{edu.duration}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Main Content - Cột bên phải */}
      <View style={styles.main}>
        {/* Kỹ năng kỹ thuật */}
        <View style={styles.boxSection}>
          <View style={styles.boxSectionTitle}>
            <View style={styles.markIcon} />
            <Text style={styles.sectionTitle}>Kỹ năng kỹ thuật</Text>
          </View>
          <View style={styles.lineTitle} />
          <View>
            {data.technicalSkills.map((skill, i) => (
              <View key={i} style={{ display: 'flex', flexDirection: 'row', marginLeft: 5 }}>
                <View style={styles.markIcon_Circle} />
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold', fontFamily: 'Roboto' }}>{skill.name}: </Text>
                  {skill.skills}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Kinh nghiệm làm việc */}
        <View style={styles.boxSection}>
          <View style={styles.boxSectionTitle}>
            <View style={styles.markIcon} />
            <Text style={styles.sectionTitle}>Kinh nghiệm làm việc</Text>
          </View>
          <View style={styles.lineTitle} />
          <View>
            {data.workExperience.map((exp, i) => (
              <View key={i} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
                  <Text style={styles.duration}>{exp.duration}</Text>
                </View>
                <Text style={styles.companyName}>{exp.company}</Text>
                {exp.projects &&
                  exp.projects.map((project, idx) => (
                    <View key={idx} style={{ marginBottom: 5 }}>
                      <Text style={styles.projectDescription}>
                        <Text style={{ fontWeight: 'bold' }}>Dự án:</Text> {project.name}
                      </Text>
                      {project.responsibilities.map((res, idy) => (
                        <View key={idy} style={styles.responsibilityItem}>
                          <Text style={styles.markIcon_Circle} />
                          <Text style={styles.responsibilityText}>{res}</Text>
                        </View>
                      ))}
                    </View>
                  ))}
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

// Component Wrapper để hiển thị và tải PDF
export default function PDFExport({ data }) {
  // Dữ liệu mẫu cho CV
  const sampleData = {
    name: 'Nguyễn Văn A',
    role: 'Fullstack Developer',
    phone: '09xxxxxxxx',
    email: 'nguyenvana@example.com',
    dob: '24/08/1997',
    address: 'TP. Hồ Chí Minh',
    linkedin: 'linkedin.com/in/nguyenvana',
    github: 'github.com/nguyenvana',
    summary: [
      'Lập trình viên Fullstack với 4 năm kinh nghiệm phát triển phần mềm, chuyên sâu về cả Frontend và Backend.',
      'Thành thạo xây dựng các ứng dụng web hiệu suất cao, có khả năng học hỏi công nghệ mới nhanh chóng và làm việc độc lập hoặc theo nhóm.',
      'Đã tham gia nhiều dự án từ nhỏ đến lớn, từ khởi nghiệp đến các công ty quy mô vừa, luôn chú trọng chất lượng sản phẩm và tối ưu hóa hiệu suất.',
    ],
    technicalSkills: [
      {
        name: 'Frontend',
        skills:
          'ReactJS, Next.js, Angular, Vue.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap',
      },
      {
        name: 'Backend',
        skills: 'Node.js (Express, NestJS), Python (Django, Flask), Java (Spring Boot), PHP (Laravel)',
      },
      { name: 'Database', skills: 'MongoDB, PostgreSQL, MySQL, Redis, Elasticsearch' },
      {
        name: 'DevOps & Cloud',
        skills: 'Docker, AWS (EC2, S3, RDS, Lambda), GCP (Compute Engine, Cloud Storage), CI/CD (Jenkins, GitLab CI)',
      },
      { name: 'Tools & Others', skills: 'Git, Webpack, Babel, Jest, Cypress, Postman, Jira, Agile/Scrum' },
    ],
    softSkills: [
      'Tư duy logic và giải quyết vấn đề',
      'Kỹ năng làm việc nhóm hiệu quả',
      'Giao tiếp rõ ràng và trình bày tốt',
      'Tự học và thích nghi nhanh',
      'Quản lý thời gian và ưu tiên công việc',
    ],
    workExperience: [
      {
        jobTitle: 'Fullstack Developer',
        company: 'Công ty ABC Tech',
        duration: '03/2022 - Hiện tại',
        projects: [
          {
            name: 'Hệ thống quản lý E-commerce',
            responsibilities: [
              'Phát triển và duy trì các tính năng Frontend sử dụng ReactJS và Redux, tối ưu hóa giao diện người dùng.',
              'Xây dựng API Backend bằng Node.js (Express) và MongoDB, thiết kế cơ sở dữ liệu và quản lý các tác vụ bất đồng bộ.',
              'Tích hợp các cổng thanh toán (Stripe, PayPal) và dịch vụ bên thứ ba.',
              'Thực hiện unit test và integration test, đảm bảo chất lượng code và giảm thiểu lỗi.',
            ],
          },
          {
            name: 'Ứng dụng quản lý dự án nội bộ',
            responsibilities: [
              'Phát triển ứng dụng web từ đầu với Angular và Spring Boot.',
              'Thiết kế và triển khai cơ sở dữ liệu PostgreSQL, tối ưu hóa các truy vấn phức tạp.',
              'Xây dựng các module quản lý người dùng, dự án, và tác vụ.',
              'Đảm bảo bảo mật ứng dụng bằng cách triển khai xác thực JWT và mã hóa dữ liệu.',
            ],
          },
        ],
      },
      {
        jobTitle: 'Junior Fullstack Developer',
        company: 'Công ty XYZ Solutions',
        duration: '06/2020 - 02/2022',
        projects: [
          {
            name: 'Website giới thiệu sản phẩm',
            responsibilities: [
              'Tham gia phát triển Frontend bằng Vue.js và Backend bằng Laravel.',
              'Thiết kế responsive layout và tối ưu hóa trải nghiệm người dùng trên các thiết bị.',
              'Xây dựng các tính năng CRUD cho quản trị viên.',
              'Hỗ trợ triển khai ứng dụng lên server Linux.',
            ],
          },
        ],
      },
    ],
    education: [
      {
        degree: 'Cử nhân Công nghệ thông tin',
        university: 'Đại học Bách Khoa TP.HCM',
        duration: '09/2016 - 06/2020',
      },
    ],
  }

  return (
    <div id='resume' className='w-full md:max-w-[80%] my-10 m-auto'>
      <h1>My Resume</h1>
      <div className='w-full md:h-[100vh] h-[50vh]'>
        <PDFViewer width='100%' height='100%'>
          <MyDocument data={sampleData} /> {/* Sử dụng data truyền vào hoặc sampleData */}
        </PDFViewer>
      </div>
      <div className='mt-6 flex justify-center'>
        <PDFDownloadLink document={<MyDocument data={sampleData} />} fileName='CV_NguyenVanA_Fullstack.pdf'>
          <button className='flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
            Tải xuống CV (PDF)
          </button>
        </PDFDownloadLink>
      </div>
    </div>
  )
}
