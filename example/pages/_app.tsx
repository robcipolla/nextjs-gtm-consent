import '@/styles/globals.css'
import { NGTMConsent, NGTMScripts, NGTMConsentAcceptButton, NGTMConsentDeclineButton } from 'next-gtm-consent'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NGTMScripts gtmId='EXAMPLE' />
      <Component {...pageProps} />
      <NGTMConsent
        acceptedCookieName='test'
        className='bg-white rounded-md p-4 w-fit fixed bottom-4 left-4'
        onAccept={() => alert('accepted cookies')}
        onDecline={() => alert('rejected cookies')}
      >
        <p className='text-black'>This site uses cookies.</p>
        <div className='flex space-x-4'>
          <NGTMConsentAcceptButton className='p-2 text-white bg-green-500'>Accept</NGTMConsentAcceptButton>
          <NGTMConsentDeclineButton className='p-2 text-white bg-red-500'>Reject</NGTMConsentDeclineButton>
        </div>
      </NGTMConsent>
    </>
  )
}
