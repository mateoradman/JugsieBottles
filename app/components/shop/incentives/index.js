import { CalendarIcon, RefreshIcon, TruckIcon } from '@heroicons/react/outline'
import { useTranslation } from 'next-i18next'


export default function Incentives() {
  const { t } = useTranslation('shop')
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto divide-y divide-gray-200 lg:py-8 lg:flex lg:justify-center lg:divide-y-0 lg:divide-x">
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <CalendarIcon height={30} />
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <p className="text-2xs text-gray-500">{t('incentiveDisclaimerOne')}</p>
              <h3 className="font-medium text-gray-900">{t('incentiveTitleOne')}</h3>
              <p className="text-sm text-gray-500">{t('incentiveSubtitleOne')}</p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <RefreshIcon height={30} />
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <p className="text-2xs text-gray-500">{t('incentiveDisclaimerTwo')}</p>
              <h3 className="font-medium text-gray-900">{t('incentiveTitleTwo')}</h3>
              <p className="text-sm text-gray-500">{t('incentiveSubtitleTwo')}</p>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none lg:px-8">
            <TruckIcon height={30} />
            <div className="ml-4 flex-auto flex flex-col-reverse">
              <p className="text-2xs text-gray-500">{t('incentiveDisclaimerThree')}</p>
              <h3 className="font-medium text-gray-900">{t('incentiveTitleThree')}</h3>
              <p className="text-sm text-gray-500">{t('incentiveSubtitleThree')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
