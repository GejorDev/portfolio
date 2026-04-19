import { useTranslation, Trans } from 'react-i18next'
import { getLocalizedField } from '../i18n/utils'
import { Language } from '../types'

// Props para el About
interface AboutProps {
  person: {
    name: string
    fullBio?: string
    fullBio_en?: string
  }
}

function About({ person }: AboutProps) {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language as Language
  const fullBio = getLocalizedField(person, 'fullBio', currentLang)
  
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">{t('about.title')}</h2>
        
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <p className="text-gray-300 mb-6 leading-relaxed">
            <Trans i18nKey="about.intro" values={{ name: person.name }} components={{ strong: <strong className="text-blue-500" /> }} />
          </p>
          
          {fullBio && (
            <>
              <hr className="border-gray-700 my-4" />
              <div className="mt-6">
                <p className="text-gray-300 leading-relaxed">
                  {fullBio}
                </p>
              </div>
            </>
          )}
          
          {!fullBio && (
            <div className="mt-6">
              <p className="text-gray-300 leading-relaxed">
                {t('about.fallbackBio')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
