import { useTranslation } from 'react-i18next'

const projectsEn = [
  {
    name: 'EDUHOME',
    duration: '02/2021 - 03/2022',
    url: ['https://eduhome.com.vn'],
    description:
      'Eduhome is a cross-platform education application offering comprehensive teaching resources and assignments for teachers, parents, and students. It streamlines the learning process by providing a centralized platform for various educational activities.',
    role: 'Fresher Leader / Full Stack Developer',
    responsibilities: [
      'Developed and deployed the web application using ASP.NET MVC, ensuring robust performance and scalability.',
      'Designed and managed the database with MS SQL Server, optimizing queries for efficient data retrieval.',
      'Built backend APIs using Entity Framework for seamless integration across Web, Desktop, and Mobile versions.',
      'Designed responsive UI using HTML, CSS, JavaScript, jQuery, and Bootstrap to ensure a consistent user experience on all devices.',
      'Managed project progress, assigned tasks, provided technical support, and conducted code reviews for team members, fostering a collaborative environment.',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
    teamSize: '9 members (4 Web Devs, 1 BA, 2 Designers, 2 Testers)',
  },
  {
    name: 'Learning Manager Systems (LMS)',
    duration: '02/2020 - 02/2021',
    url: ['https://i-course.vn', 'https://dtpteacher.vn/lms-i-course-learning-management-system/'],
    description:
      'The LMS system provides comprehensive management solutions for educational institutions, covering schools, classes, students, teachers, schedules, attendance, payroll, and reporting. It aims to streamline administrative tasks and enhance educational operations.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developed and deployed web applications from scratch using ASP.NET MVC, ensuring robust and scalable solutions.',
      'Built backend APIs and managed databases with Entity Framework and MS SQL Server for efficient data handling.',
      'Developed user interfaces using HTML, CSS, jQuery, and JavaScript, focusing on user-friendability and modern aesthetics.',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
    teamSize: '9 members (1 Lead, 4 Devs, 2 Designers, 2 Testers)',
  },
  {
    CHPlay: 'https://play.google.com/store/apps/details?id=vn.dtponline.dhamobile&hl=vi',
    AppStore: 'https://apps.apple.com/vn/app/digital-homework-activities/id1504632625?l=vi',
    name: 'Digital Homework Activities (DHA)',
    duration: '08/2019 - 02/2020',
    description:
      'DHA is an educational app for learning English through interactive games, allowing students to practice and complete homework in a fun and engaging way. It aims to make learning more enjoyable and accessible.',
    role: 'Developer | React Native',
    responsibilities: [
      'Participated in research and development of the first version of the application, laying the foundation for future enhancements.',
      'Developed user interfaces according to design specifications and user experience requirements, focusing on responsiveness and intuitiveness.',
    ],
    techStack: 'React Native',
    teamSize: '9 members (1 Manager, 1 Tech Lead, 3 React Native Devs, 1 Tester, 3 Game Devs)',
  },
]

const projectsVi = [
  {
    name: 'EDUHOME',
    duration: '02/2021 - 03/2022',
    url: ['https://eduhome.com.vn'],
    description:
      'Eduhome là một ứng dụng giáo dục đa nền tảng cung cấp tài nguyên giảng dạy và bài tập toàn diện cho giáo viên, phụ huynh và học sinh. Ứng dụng giúp đơn giản hóa quá trình học tập bằng cách cung cấp một nền tảng tập trung cho các hoạt động giáo dục.',
    role: 'Fresher Leader / Full Stack Developer',
    responsibilities: [
      'Phát triển và triển khai ứng dụng web sử dụng ASP.NET MVC, đảm bảo hiệu suất và khả năng mở rộng.',
      'Thiết kế và quản lý cơ sở dữ liệu với MS SQL Server, tối ưu hóa truy vấn để truy xuất dữ liệu hiệu quả.',
      'Xây dựng API backend bằng Entity Framework để tích hợp mượt mà giữa các phiên bản Web, Desktop và Mobile.',
      'Thiết kế giao diện UI responsive bằng HTML, CSS, JavaScript, jQuery và Bootstrap, đảm bảo trải nghiệm đồng nhất trên mọi thiết bị.',
      'Quản lý tiến độ dự án, phân chia công việc, hỗ trợ kỹ thuật và review code cho các thành viên trong nhóm.',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
    teamSize: '9 thành viên (4 Web Devs, 1 BA, 2 Designers, 2 Testers)',
  },
  {
    name: 'Learning Manager Systems (LMS)',
    duration: '02/2020 - 02/2021',
    url: ['https://i-course.vn', 'https://dtpteacher.vn/lms-i-course-learning-management-system/'],
    description:
      'Hệ thống LMS cung cấp giải pháp quản lý toàn diện cho các cơ sở giáo dục, bao gồm trường học, lớp học, học sinh, giáo viên, thời khóa biểu, điểm danh, bảng lương và báo cáo. Hệ thống giúp tối ưu hóa công tác quản trị và nâng cao hiệu quả vận hành giáo dục.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Phát triển và triển khai ứng dụng web từ đầu bằng ASP.NET MVC, đảm bảo giải pháp mạnh mẽ và có khả năng mở rộng.',
      'Xây dựng API backend và quản lý cơ sở dữ liệu bằng Entity Framework và MS SQL Server.',
      'Phát triển giao diện người dùng bằng HTML, CSS, jQuery và JavaScript với giao diện hiện đại và thân thiện.',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
    teamSize: '9 thành viên (1 Lead, 4 Devs, 2 Designers, 2 Testers)',
  },
  {
    CHPlay: 'https://play.google.com/store/apps/details?id=vn.dtponline.dhamobile&hl=vi',
    AppStore: 'https://apps.apple.com/vn/app/digital-homework-activities/id1504632625?l=vi',
    name: 'Digital Homework Activities (DHA)',
    duration: '08/2019 - 02/2020',
    description:
      'DHA là ứng dụng giáo dục giúp học sinh học tiếng Anh thông qua các trò chơi tương tác, tạo điều kiện cho việc luyện tập và làm bài tập về nhà một cách vui nhộn và hiệu quả.',
    role: 'Developer | React Native',
    responsibilities: [
      'Tham gia nghiên cứu và phát triển phiên bản đầu tiên của ứng dụng, đặt nền móng cho các bản nâng cấp sau.',
      'Phát triển giao diện người dùng theo thiết kế và yêu cầu trải nghiệm, đảm bảo khả năng phản hồi và dễ sử dụng.',
    ],
    techStack: 'React Native',
    teamSize: '9 thành viên (1 Manager, 1 Tech Lead, 3 React Native Devs, 1 Tester, 3 Game Devs)',
  },
]

const personalProjectsEn = [
  {
    name: 'BEEDECOR',
    duration: '01/2025 - 03/2025',
    url: ['https://beedecor.net'],
    description: 'BEEDECOR is a website for an interior design and construction service company.',
    role: 'Full Stack Developer',
    responsibilities: ['Developed and deployed end-to-end web applications.'],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
    teamSize: '1 members',
  },
]
const personalProjectsVi = [
  {
    name: 'BEEDECOR',
    duration: '01/2025 - 03/2025',
    url: ['https://beedecor.net'],
    description: 'BEEDECOR là trang web giới thiệu dịch vụ thiết kế và thi công nội thất.',
    role: 'Full Stack Developer',
    responsibilities: ['Phát triển và triển khai ứng dụng web end-to-end.'],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
    teamSize: '1 thành viên',
  },
]
export default function Projects(props) {
  const { t, i18n } = useTranslation()
  const projectsData = i18n.language === 'vi' ? projectsVi : projectsEn
  const personalProjectsData = i18n.language === 'vi' ? personalProjectsVi : personalProjectsEn
  const tranlations = {
    role: t('role'),
    responsibilities: t('responsibilities'),
    technologies: t('technologies'),
    teamSize: t('teamSize'),
  }

  return (
    <section id={props.elementID} className='my-5 md:my-10 p-4 md:p-10 pt-6 min-h-screen flex flex-col'>
      <h2 className='text-3xl md:text-5xl font-semibold mb-10 relative title-section'>{t('project')}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectsData.map((project, index) => {
          return (
            <div
              key={index}
              className='bg-white/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/80
                       border border-gray-300 dark:border-gray-700
                       rounded-xl shadow-lg p-6 flex flex-col justify-between
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
            >
              <div>
                <h3 className='text_title_gradient'>{project.name}</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
                  <span className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium'>
                    {project.duration}
                  </span>
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify'>
                  {project.description}
                </p>
                {project.url && (
                  <p className='mb-2 flex flex-row'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>URL:&nbsp;</strong>
                    <span>
                      {project.url.map((link, i) => {
                        return (
                          <a
                            key={i}
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='items-center text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 transition-colors duration-200'
                          >
                            {link}
                            <br />
                          </a>
                        )
                      })}
                    </span>
                  </p>
                )}
                {project.CHPlay && (
                  <p className='mb-2'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>CHPlay:&nbsp;</strong>
                    <a
                      href={project.CHPlay}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='items-center break-all text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 transition-colors duration-200'
                    >
                      {project.CHPlay}
                    </a>
                  </p>
                )}
                {project.AppStore && (
                  <p className='mb-2'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>AppStore:&nbsp;</strong>
                    <a
                      href={project.AppStore}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='items-center break-all text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 transition-colors duration-200'
                    >
                      {project.AppStore}
                    </a>
                  </p>
                )}
                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                  <strong className='font-semibold text-gray-800 dark:text-gray-200'>{tranlations.role}:</strong>{' '}
                  {project.role}
                </p>
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className='mb-4'>
                    <p className='text-gray-600 dark:text-gray-300 mb-1'>
                      <strong className='font-semibold text-gray-800 dark:text-gray-200'>
                        {tranlations.responsibilities}:
                      </strong>
                    </p>
                    <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1'>
                      {project.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.techStack && (
                  <div className='mb-4'>
                    <p className='text-md font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                      {tranlations.technologies}:
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.techStack.split(',').map((tech, i) => (
                        <span
                          key={i}
                          className='bg-purple-100 dark:bg-teal-700 text-purple-800 dark:text-teal-100 text-sm px-3 py-1 rounded-full shadow-sm'
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.teamSize && (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>{tranlations.teamSize}:</strong>{' '}
                    {project.teamSize}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <h2 className='text-2xl md:text-3xl font-bold my-6 md:my-6 text-gray-900 dark:text-white flex items-center'>
        {' '}
        <span className='w-3 h-3 bg-rose-700 rotate-45 mr-2 ml-1'></span>
        {t('personalProject')}:
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {personalProjectsData.map((project, index) => {
          return (
            <div
              key={index}
              className='bg-white/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/80
                       border border-gray-300 dark:border-gray-700
                       rounded-xl shadow-lg p-6 flex flex-col justify-between
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
            >
              <div>
                <h3 className='text_title_gradient'>{project.name}</h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
                  <span className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium'>
                    {project.duration}
                  </span>
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify'>
                  {project.description}
                </p>
                {project.url && (
                  <p className='mb-2 flex flex-row'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>URL:&nbsp;</strong>
                    <span>
                      {project.url.map((link, i) => {
                        return (
                          <a
                            key={i}
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='items-center text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 transition-colors duration-200'
                          >
                            {link}
                            <br />
                          </a>
                        )
                      })}
                    </span>
                  </p>
                )}
                {project.CHPlay && (
                  <p className='mb-2'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>CHPlay:&nbsp;</strong>
                    <a
                      href={project.CHPlay}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='items-center break-all text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 transition-colors duration-200'
                    >
                      {project.CHPlay}
                    </a>
                  </p>
                )}
                {project.AppStore && (
                  <p className='mb-2'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>AppStore:&nbsp;</strong>
                    <a
                      href={project.AppStore}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='items-center break-all text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100 transition-colors duration-200'
                    >
                      {project.AppStore}
                    </a>
                  </p>
                )}
                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                  <strong className='font-semibold text-gray-800 dark:text-gray-200'>{tranlations.role}:</strong>{' '}
                  {project.role}
                </p>
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className='mb-4'>
                    <p className='text-gray-600 dark:text-gray-300 mb-1'>
                      <strong className='font-semibold text-gray-800 dark:text-gray-200'>
                        {tranlations.responsibilities}:
                      </strong>
                    </p>
                    <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-1'>
                      {project.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.techStack && (
                  <div className='mb-4'>
                    <p className='text-md font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                      {tranlations.technologies}:
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.techStack.split(',').map((tech, i) => (
                        <span
                          key={i}
                          className='bg-purple-100 dark:bg-teal-700 text-purple-800 dark:text-teal-100 text-sm px-3 py-1 rounded-full shadow-sm'
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {project.teamSize && (
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    <strong className='font-semibold text-gray-800 dark:text-gray-200'>{tranlations.teamSize}:</strong>{' '}
                    {project.teamSize}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
