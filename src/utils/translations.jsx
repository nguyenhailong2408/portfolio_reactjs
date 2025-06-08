import { useTranslation } from 'react-i18next'

export const useTranslations = () => {
  const { t } = useTranslation()

  return {
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
    company: t('company'),
    CHPlay: t('CHPlay'),
    AppStore: t('AppStore')
  }
}
