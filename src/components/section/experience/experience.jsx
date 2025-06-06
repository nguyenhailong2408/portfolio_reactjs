import { useTranslation } from 'react-i18next'

const experiences = [
  {
    position: 'Procurement System Developer (ERP)',
    company: 'Công ty cổ phần Thế giới Di động (MWG)',
    duration: '04/2022 - 04/2024',
    description: [
      'Collaborated with BAs, DBAs, QAs to develop, deploy, maintain, upgrade, test, and optimize software (procurement - allocation - inventory balancing - supplier communication) in the ERP system for over 3000 stores nationwide.',
      'Maintained, optimized, and upgraded existing ERP Winform modules and features.',
      'Migrated modules from Winform to Web versions.',
      'Built multiple backend APIs following Microservices architecture.',
      'Team Size: 16 members (4 BAs, 2 QAs, 2 DBAs, 6 Developers, and 2 Deployment Staff)',
    ],
    techStack:
      'ASP.NET Core,HTML, Css, Javascript, Bootstrap, AngularJS, Kendo UI, API (REST/SOAP), Winform, Dapper, PostgreSQL, Oracle, Redis, Elasticsearch, Hazelcast.',
  },
  {
    position: 'Mid-level Software Developer / Fresher Leader',
    company: 'DTP EDUCATION SOLUTION',
    duration: '02/2021 - 03/2022',
    description: [
      'Received and analyzed project requirements from the PM.',
      'Developed and deployed web applications from scratch using ASP.NET MVC, MSSQL, etc.',
      'Designed and implemented databases with MS SQL Server.',
      'Built backend APIs and managed databases using Entity Framework.',
      'Worked with designers and editors to develop UI and digital content.',
      'Developed user interfaces using HTML, CSS, JavaScript, jQuery, Bootstrap.',
      'Managed project progress, assigned tasks, provided technical support, and reviewed code for team members.',
      'Split large systems into smaller subsystems such as Notification Management, SMS, User Account Management, Digital Content, Shortlinks, Reports, etc.',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
  },
  {
    position: 'Developer',
    company: 'DTP EDUCATION SOLUTION',
    duration: '06/2019 - 02/2021',
    description: [
      'Received, analyzed, and designed systems based on requirements from Leader / PM.',
      'Researched and developed mobile applications using React Native.',
      'Developed and deployed web applications from scratch using ASP.NET MVC.',
      'Built backend APIs and managed databases with Entity Framework and MS SQL Server.',
      'Worked with designers and editors to develop digital content and user interfaces.',
      'Developed UI using HTML, CSS, jQuery, and JavaScript.',
    ],
    techStack:
      'React Native, ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
  },
]
const experiences_vi = [
  {
    position: 'Procurement System Developer (ERP)',
    company: 'Công ty cổ phần Thế giới Di động (MWG)',
    duration: '04/2022 - 04/2024',
    description: [
      'Phối hợp với BA, DBA, QA để phát triển, triển khai, bảo trì, nâng cấp, kiểm thử và tối ưu phần mềm (mua hàng - phân bổ - cân bằng tồn kho - giao tiếp nhà cung cấp) trong hệ thống ERP cho hơn 3000 cửa hàng toàn quốc.',
      'Bảo trì, tối ưu và nâng cấp các module và tính năng Winform ERP hiện có.',
      'Chuyển đổi các module từ Winform sang phiên bản Web.',
      'Xây dựng nhiều API backend theo kiến trúc Microservices.',
      'Nhóm: 16 thành viên (4 BA, 2 QA, 2 DBA, 6 DEV, 2 nhân sự triển khai)',
    ],
    techStack:
      'ASP.NET Core, HTML, CSS, Javascript, Bootstrap, AngularJS, Kendo UI, API (REST/SOAP), Winform, Dapper, PostgreSQL, Oracle, Redis, Elasticsearch, Hazelcast.',
  },
  {
    position: 'Mid-level Software Developer / Fresher Leader',
    company: 'DTP EDUCATION SOLUTION',
    duration: '02/2021 - 03/2022',
    description: [
      'Tiếp nhận và phân tích yêu cầu dự án từ PM.',
      'Phát triển và triển khai ứng dụng web từ đầu bằng ASP.NET MVC, MSSQL, v.v.',
      'Thiết kế và triển khai cơ sở dữ liệu với MS SQL Server.',
      'Xây dựng API backend và quản lý dữ liệu bằng Entity Framework.',
      'Phối hợp với thiết kế và biên tập viên để phát triển giao diện và nội dung số.',
      'Xây dựng giao diện người dùng bằng HTML, CSS, JavaScript, jQuery, Bootstrap.',
      'Quản lý tiến độ dự án, phân chia công việc, hỗ trợ kỹ thuật và review code cho các thành viên trong nhóm.',
      'Tách hệ thống lớn thành các phân hệ nhỏ như Quản lý Thông báo, SMS, Tài khoản người dùng, Nội dung số, Shortlink, Báo cáo,...',
    ],
    techStack:
      'ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
  },
  {
    position: 'Developer',
    company: 'DTP EDUCATION SOLUTION',
    duration: '06/2019 - 02/2021',
    description: [
      'Tiếp nhận, phân tích và thiết kế hệ thống theo yêu cầu từ Leader / PM.',
      'Nghiên cứu và phát triển ứng dụng di động bằng React Native.',
      'Phát triển và triển khai ứng dụng web từ đầu bằng ASP.NET MVC.',
      'Xây dựng API backend và quản lý cơ sở dữ liệu bằng Entity Framework và MS SQL Server.',
      'Phối hợp với thiết kế và biên tập viên để xây dựng nội dung số và giao diện người dùng.',
      'Phát triển UI bằng HTML, CSS, Bootstrap, jQuery và JavaScript.',
    ],
    techStack:
      'React Native, ASP.NET MVC, Entity Framework, MS SQLSERVER, IIS Server, HTML, CSS, Jquery, Javascript, Bootstrap, Razor, LinQ',
  },
];

const Experience = (props) => {
  const { t, i18n } = useTranslation()
  const experienceData = i18n.language === 'vi'? experiences_vi: experiences;
  const tranlations = { technologies : t('technologies')}
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
              className='bg-white/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/80 shadow-xl rounded-xl p-6 lg:p-8 border border-gray-300 dark:border-gray-700 flex-1
                            transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl'
            >
              {/* Duration được đặt trước Position và Company */}
              <p className='text-sm font-medium text-gray-500 dark:text-gray-400 mb-2'>
                <span className='bg-indigo-100 dark:bg-blue-900 text-indigo-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium'>
                  {exp.duration}
                </span>
              </p>
              <h3 className='text_title_gradient'>{exp.position}</h3>
              <p className='md:text-lg text-gray-700 dark:text-gray-300 mt-1 mb-4'>{exp.company}</p>

              <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-5 space-y-2 leading-relaxed'>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {exp.techStack && (
                <div className='mb-0'>
                  <p className='text-md font-semibold text-gray-800 dark:text-gray-200 mb-2'>{tranlations.technologies}:</p>
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
