import React from 'react';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/outline";
import {useTranslation} from "next-i18next";

export default function Status() {
  const router = useRouter()
  if (!router.query.hasOwnProperty('success')) return null;
  if (router.query.success === 'true') return <Success/>;
  else if (router.query.success === 'false') return <Failure/>;
  else {
    router.push('/')
    return null;
  }
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'checkout']),
  },
})

const Success = () => {
  const {t} = useTranslation("checkout")
  return (
    <StatusCard>
      <div className="card-body">
        <CheckCircleIcon className={"text-green-500 w-1/4 mx-auto mb-4"}/>
        <h2 className="card-title">{t("payment-success")}</h2>
        <p>{t("confirmation-email")}</p>
        <p>{t("thank-you")}</p>
      </div>
    </StatusCard>
  )
}

const Failure = () => {
  const {t} = useTranslation("checkout")
  return (
    <StatusCard>
      <div className="card-body">
        <XCircleIcon className={"text-red-500 w-1/4 mx-auto mb-4"}/>
        <h2 className="card-title">{t("payment-failure")}</h2>
        <p>{t("payment-failure-message")}</p>
      </div>
    </StatusCard>
  )
}

const StatusCard = ({children}) => (
  <div className="mt-10 mb-20 px-5 sm:px-0 sm:mx-auto sm:w-full sm:max-w-xl">
    <div className="flex space-y-4 w-full p-2 mx-auto bg-base-100 shadow-xl rounded-2xl">
      {children}
    </div>
  </div>
)

