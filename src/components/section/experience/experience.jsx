import { useTranslation } from 'react-i18next'
import IconLink from './../../icon/iconLink'

const experiences = [
  {
    position: 'Procurement System Developer (ERP)',
    company: 'Công ty cổ phần Thế giới Di động (MWG)',
    extraDesc: '(Company\'s internal project)',
    urlCompany: 'https://mwg.vn/',
    duration: '04/2022 - 04/2024',
    description: [
      'Participated in developing, upgrading, and optimizing the ERP system for over 3000 stores, covering procurement, allocation, inventory balancing, and supplier communication.',
      'Took part in migrating Winform modules to web, building backend APIs based on microservices architecture and maintaining existing modules.',
    ],
    techStack:
      'ASP.NET Core,HTML, Css, Javascript, Bootstrap, AngularJS, Kendo UI, API (REST/SOAP), Winform, Dapper, PostgreSQL, Oracle, Redis, Elasticsearch, Hazelcast.',
  },
  {
    position: 'Mid-level Software Developer / Fresher Leader',
    company: 'DTP EDUCATION SOLUTION',
    urlCompany: 'https://dtp-education.com/',
    extraDesc: '(Company\'s internal project)',
    duration: '02/2021 - 03/2022',
    description: [
      'Participated in developing Eduhome website from scratch, serving over 300,000 users, using ASP.NET MVC, MSSQL, etc.',
      'My responsibilities included leading the team, assigning tasks, and being the main developer in the project.',
      'Designed and managed databases and developed backend APIs for Web, Desktop, and Mobile versions using Entity Framework and MS SQL Server.',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
  },
  {
    position: 'Developer',
    company: 'DTP EDUCATION SOLUTION',
    urlCompany: 'https://dtp-education.com/',
    extraDesc: '(Company\'s internal project)',
    duration: '06/2019 - 02/2021',
    description: [
      'Participated in researching and developing the first version of the DHA (Digital Homework Activities) mobile application using React Native.',
      'Participated in developing LMS (Learning Management System) website from scratch using ASP.NET MVC, MSSQL, etc.',
    ],
    techStack:
      'React Native, ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
  },
]
const experiences_vi = [
  {
    position: 'Procurement System Developer (ERP)',
    company: 'Công ty cổ phần Thế giới Di động (MWG)',
    extraDesc: '(Dự án nội bộ của công ty)',
    urlCompany: 'https://mwg.vn/',
    duration: '04/2022 - 04/2024',
    description: [
      'Tham gia phát triển, nâng cấp và tối ưu hệ thống ERP phục vụ hơn 3000 cửa hàng, bao gồm quy trình mua hàng, chia hàng, cân bằng hàng tồn kho, giao tiếp với NCC.',
      'Tham gia chuyển đổi module Winform sang Web, xây dựng API theo kiến trúc Microservice và bảo trì các module hiện có.',
    ],
    techStack:
      'ASP.NET Core, HTML, CSS, Javascript, Bootstrap, AngularJS, Kendo UI, API (REST/SOAP), Winform, Dapper, PostgreSQL, Oracle, Redis, Elasticsearch, Hazelcast.',
  },
  {
    position: 'Mid-level Software Developer / Fresher Leader',
    company: 'DTP EDUCATION SOLUTION',
    // extraDesc: '(Dự án nội bộ của công ty)',
    urlCompany: 'https://dtp-education.com/',
    duration: '02/2021 - 03/2022',
    description: [
      'Tham gia phát triển website Eduhome từ đầu, phục vụ hơn 300.000 người dùng, sử dụng ASP.NET MVC, HTML, CSS, Bootstrap, JQuery,...',
      'Trách nhiệm của tôi là quản lý nhóm, phân chia công việc và là nhà phát triển chính trong dự án',
      'Thiết kế và quản lý cơ sở dữ liệu, đồng thời phát triển API backend cho các phiên bản Web, Desktop và Mobile sử dụng Entity Framework và MS SQL Server.',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ, Firebase',
  },
  {
    position: 'Full Stack Developer',
    company: 'DTP EDUCATION SOLUTION',
    urlCompany: 'https://dtp-education.com/',
    extraDesc: '(Dự án nội bộ của công ty)',
    duration: '06/2019 - 02/2021',
    description: [
      'Tham gia nghiên cứu và phát triển phiên bản đầu của ứng dụng di động DHA (Digital Homework Activities) với React Native.',
      'Tham gia phát triển website Hệ thống Quản lý Học tập (LMS) từ đầu bằng ASP.NET MVC, MSSQL, HTML, CSS, Bootstrap, Jquery,...',
    ],
    techStack:
      'React Native, ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ, Firebase',
  },
]

const Experience = (props) => {
  const { t, i18n } = useTranslation()
  const experienceData = i18n.language === 'vi' ? experiences_vi : experiences
  const tranlations = { technologies: t('technologies') }
  return (
    <div id={props.elementID} className='my-5 md:my-10 p-4 md:p-10 pt-6 min-h-screen'>
      <h2 className='text-3xl md:text-5xl font-semibold mb-10 relative title-section'>{t('experience')}</h2>
      <div className='relative pl-8 md:pl-16'>
        {/* Đường kẻ timeline */}
        <div className='absolute left-2 md:left-8 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700 rounded-full'></div>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className='mb-12 last:mb-0 flex items-start group' // Added group for hover effects on child
          >
            {/* Điểm tròn trên timeline */}
            <div
              className='absolute left-[0.5rem] md:left-[2rem] -translate-x-1/2 mt-1.5 w-4 h-4 bg-[#db2727] dark:bg-[#05fdd0] rounded-full border-2 border-white dark:border-gray-900 z-10
                            transition-all duration-300 group-hover:scale-125 group-hover:bg-[#0f13e2] dark:group-hover:bg-blue-300'
            ></div>

            {/* Nội dung kinh nghiệm */}
            <div
              className='shadow-xl rounded-xl p-6 lg:p-8 bg-white/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/80  border border-gray-300 dark:border-gray-700 flex-1
                            transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl'
            >
              {/* Duration được đặt trước Position và Company */}
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'>
                <span className='bg-indigo-100 dark:bg-blue-900 text-indigo-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium'>
                  {exp.duration}
                </span>
              </p>
              <a href={exp.urlCompany} target='blank' className='text_title_gradient'>
                <span style={{ width: '24px', marginTop: '5px' }}>
                  <IconLink />
                </span>

                {exp.company}
              </a>
              <p className='md:text-lg text-gray-700 dark:text-gray-300 mt-1 mb-4'>{exp.position}</p>
              <p className='md:text-lg text-gray-700 dark:text-gray-300 mt-1 mb-4'>{exp.extraDesc}</p>

              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-5 space-y-2 leading-relaxed'>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {exp.techStack && (
                <div className='mb-0'>
                  <p className='text-md font-semibold text-gray-800 dark:text-gray-200 mb-2'>
                    {tranlations.technologies}:
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {exp.techStack.split(',').map((tech, i) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
