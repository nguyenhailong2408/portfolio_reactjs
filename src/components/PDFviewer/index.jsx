/* eslint-disable indent */
import avatar from '../../assets/Image/avatar.jpg'
import { useTranslations } from '../../utils/translations'

export default function CVViewer({ data }) {
  const translations = useTranslations()
  return (
    <div className='p-4 md:p-8 mb-10 font-lexend max-w-4xl mx-auto bg-white text-black shadow-lg text-xs md:text-sm lg:text-base'>
      <div className='flex flex-col'>
        {/* Sidebar */}
        <div className='w-full bg-gray-100 p-4 md:p-5'>
          <h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-2 text-rose-700'>{data.name}</h1>
          <h2 className='text-sm md:text-base font-lexend-semibold text-gray-700 mb-4 uppercase'>{data.role}</h2>

          <div className='contact flex flex-row flex-wrap gap-y-1 gap-x-3 md:gap-7'>
            <div className='flex items-center justify-start'>
              <span className='font-lexend-semibold'>{data.phone}</span>
            </div>
            <div className='flex items-center justify-start'>
              <span className='font-lexend-semibold'>{data.email}</span>
            </div>
            <div className='flex items-center justify-start'>
              <span className='font-lexend-semibold'>24/08/1997</span>
            </div>
            <div className='flex items-center justify-start'>
              <span className='font-lexend-semibold'>{data.address}</span>
            </div>
            <div className='flex items-center justify-start'>
              <span className='break-all'>{data.cvonline}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='w-full md:pl-5'>
          {/* Summary */}
          <div className='boxSection pt-4 pb-2'>
            {data.summary.map((line, i) => (
              <p key={i} className='mb-1 leading-relaxed font-lexend-light'>
                {line}
              </p>
            ))}
          </div>

          {/* Skills */}
          <div className='boxSection pt-2 pb-2'>
            <div className='boxSectionTitle flex items-center mb-1'>
              <div className='w-2 h-2 bg-rose-700 rotate-45 mr-2 ml-1'></div>
              <h3 className='text-sm md:text-base font-lexend-semibold uppercase text-rose-700'>
                {translations.skill}
              </h3>
            </div>
            <div className='w-[calc(100%-1rem)] h-px bg-gray-300 mb-2 ml-4 mr-4'></div>
            <div>
              {data.skill.map((skill, i) => (
                <div key={i} className='flex flex-row items-start ml-5 mb-1 gap-1'>
                  <div className='w-1 h-1 min-w-[4px] min-h-[4px] rounded-full bg-black mt-[7px]'></div>
                  <p className='leading-relaxed'>
                    <span className='font-lexend-semibold'>{skill.name}: </span>
                    <span className='font-lexend-light'>{skill.skills}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className='boxSection pt-2 pb-2'>
            <div className='boxSectionTitle flex items-center mb-1'>
              <div className='w-2 h-2 bg-rose-700 rotate-45 mr-2 ml-1'></div>
              <h3 className='text-sm md:text-base font-lexend-semibold uppercase text-rose-700'>
                {translations.education}
              </h3>
            </div>
            <div className='w-[calc(100%-1rem)] h-px bg-gray-300 mb-2 ml-4 mr-4'></div>
            {data.education.map((edu, i) => (
              <div key={i} className='flex justify-end mb-2'>
                <div className='flex items-start mr-2 w-1/4 flex-nowrap'>
                  <div className='w-1 h-1 min-w-[4px] min-h-[4px] bg-gray-400 rotate-45 mt-1.5 mr-1.5 ml-1'></div>
                  <span>{edu.year}</span>
                </div>
                <div className='flex flex-col flex-wrap w-3/4'>
                  <span className='font-lexend-semibold'>{edu.school}</span>
                  <span className='font-normal'>{edu.degree}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Experiences */}
          <div className='boxSection pt-2 pb-2'>
            <div className='boxSectionTitle flex items-center mb-1'>
              <div className='w-2 h-2 bg-rose-700 rotate-45 mr-2 ml-1'></div>
              <h3 className='text-sm md:text-base font-lexend-semibold uppercase text-rose-700'>
                {translations.experience}
              </h3>
            </div>
            <div className='w-[calc(100%-1rem)] h-px bg-gray-300 mb-2 ml-4 mr-4'></div>
            {data.experiences.map((experience, i) => (
              <div key={i}>
                <div className='flex justify-end mb-2'>
                  <div className='flex items-start mr-2 w-1/4'>
                    <div className='w-1 h-1 min-w-[4px] min-h-[4px] bg-gray-400 rotate-45 mt-1.5 mr-1.5 ml-1'></div>
                    <span>{experience.duration}</span>
                  </div>
                  <div className='flex flex-col flex-wrap w-3/4'>
                    <span className='font-lexend-semibold'>{experience.position}</span>
                    <span className='font-normal'>{experience.company}</span>
                    <div className='mt-1'>
                      {experience.description.map((desc, d) => (
                        <div key={d} className='flex flex-row flex-nowrap ml-2 gap-1'>
                          <div className='w-1 h-1 min-w-[4px] min-h-[4px] rounded-full bg-black mt-1.5'></div>
                          <span className='font-lexend-light'>{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project */}
          <div className='boxSection pt-2 pb-2'>
            <div className='boxSectionTitle flex items-center mb-1'>
              <div className='w-2 h-2 bg-rose-700 rotate-45 mr-2 ml-1'></div>
              <h3 className='text-sm md:text-base font-lexend-semibold uppercase text-rose-700'>
                {translations.project}
              </h3>
            </div>
            <div className='w-[calc(100%-1rem)] h-px bg-gray-300 mb-2 ml-4 mr-4'></div>
            {data.experiences.map((experience, i) => (
              <div key={i}>
                {Array.isArray(experience.projects) && experience.projects.length > 0 && (
                  <div className='flex justify-end mb-2'>
                    <div className='flex flex-col flex-wrap w-full'>
                      {experience.projects.map((proj, j) => {
                        const keys = Object.keys(proj)
                        return (
                          <div key={j} className='flex flex-col flex-wrap mb-1'>
                            <span className='font-lexend-semibold'>{proj.name}</span>
                            <span>({proj.duration})</span>
                            <table className='table-auto border-collapse w-full border border-gray-300'>
                              {keys.map((key, k) => {
                                if (key === 'name' || key === 'duration') return null
                                return (
                                  <tbody key={k}>
                                    {(() => {
                                      switch (key) {
                                        case 'url':
                                          return (
                                            <tr>
                                              <td className='w-1/5 border border-gray-300 px-4 py-2'>
                                                <p className='font-lexend-semibold uppercase'>
                                                  {translations[key] || key}:{' '}
                                                </p>
                                              </td>
                                              <td className='w-4/5 border border-gray-300 px-4 py-2'>
                                                {proj[key].map((url, urlIndex) => (
                                                  <p key={urlIndex}>
                                                    <a
                                                      href={url}
                                                      className='underline text-blue-600 break-all font-lexend-light lowercase'
                                                    >
                                                      {url}
                                                    </a>
                                                  </p>
                                                ))}
                                              </td>
                                            </tr>
                                          )
                                        case 'CHPlay':
                                        case 'AppStore':
                                          return (
                                            <tr>
                                              <td className='w-1/5 border border-gray-300 px-4 py-2'>
                                                <p className='font-lexend-semibold'>{translations[key] || key}: </p>
                                              </td>
                                              <td className='w-4/5 border border-gray-300 px-4 py-2'>
                                                <a
                                                  href={proj[key]}
                                                  className='underline text-blue-600 break-all font-lexend-light lowercase'
                                                >
                                                  {proj[key]}
                                                </a>
                                              </td>
                                            </tr>
                                          )
                                        case 'responsibilities':
                                          return (
                                            <tr>
                                              <td className='w-1/5 border border-gray-300 px-4 py-2'>
                                                <p className='font-lexend-semibold capitalize'>
                                                  {translations[key] || key}:
                                                </p>
                                              </td>
                                              <td className='w-4/5 border border-gray-300 px-4 py-2'>
                                                {proj[key].map((line, index) => (
                                                  <div key={index} className='flex items-start ml-2 gap-1'>
                                                    <div className='w-1 h-1 min-w-[4px] min-h-[4px] rounded-full border border-black mt-1.5 bg-white'></div>
                                                    <p className='font-lexend-light'>{line}</p>
                                                  </div>
                                                ))}
                                              </td>
                                            </tr>
                                          )
                                        default:
                                          return (
                                            <tr>
                                              <td className='w-1/5 border border-gray-300 px-4 py-2'>
                                                <p className='capitalize font-lexend-semibold'>
                                                  {translations[key] || key}:{' '}
                                                </p>
                                              </td>
                                              <td className='w-4/5 border border-gray-300 px-4 py-2'>
                                                <span className='font-lexend-light'>{proj[key]}</span>
                                              </td>
                                            </tr>
                                          )
                                      }
                                    })()}
                                  </tbody>
                                )
                              })}
                            </table>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Personal Projects */}
          <div className='boxSection pt-2 pb-2'>
            <div className='boxSectionTitle flex items-center mb-1'>
              <div className='w-2 h-2 bg-rose-700 rotate-45 mr-2 ml-1'></div>
              <h3 className='text-sm md:text-base font-lexend-semibold uppercase text-rose-700'>
                {translations.personalProject}
              </h3>
            </div>
            <div className='w-[calc(100%-1rem)] h-px bg-gray-300 mb-2 ml-4 mr-4'></div>
            {data.personalProjects.map((personalProj, i) => (
              <div key={i} className='flex justify-end mb-2'>
                <div className='flex items-start mr-2 w-1/4'>
                  <div className='w-1 h-1 bg-gray-400 rotate-45 mt-1.5 mr-1.5 ml-1'></div>
                  <span>{personalProj.duration}</span>
                </div>
                <div className='flex flex-col w-3/4'>
                  <span className='font-lexend-semibold'>{personalProj.name}</span>
                  <p className='font-normal'>
                    URL:{' '}
                    <a href={personalProj.url} className='underline text-blue-600 break-all'>
                      {personalProj.url}
                    </a>
                  </p>
                  <span className='font-lexend-light'>{personalProj.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className='boxSection pt-2 pb-2'>
            <div className='boxSectionTitle flex items-center mb-1'>
              <div className='w-2 h-2 bg-rose-700 rotate-45 mr-2 ml-1'></div>
              <h3 className='text-sm md:text-base font-lexend-semibold uppercase text-rose-700'>
                {translations.certificate}
              </h3>
            </div>
            <div className='w-[calc(100%-1rem)] h-px bg-gray-300 mb-2 ml-4 mr-4'></div>
            {data.certificates.map((certificate, i) => (
              <div key={i} className='flex justify-end mb-2'>
                <div className='flex items-start mr-2 w-1/4'>
                  <div className='w-1 h-1 bg-gray-400 rotate-45 mt-1.5 mr-1.5 ml-1'></div>
                  <span>{certificate.date}</span>
                </div>
                <div className='flex flex-col w-3/4'>
                  <span className='font-lexend-semibold'>{certificate.name}</span>
                  <span className='font-normal'>{certificate.organization}</span>
                  <span className='font-lexend-light'>
                    {translations.profciency}: {certificate.proficiency}
                  </span>
                  <span className='font-lexend-light'>{certificate.abilities}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
