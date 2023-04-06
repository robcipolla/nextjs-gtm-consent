import React from 'react'
import { setCookie } from 'cookies-next'
import { useNGTMConsentContext } from './NGTMContext'

interface AcceptButtonProps {
  className?: string
  children?: React.ReactNode
}

const NGTMConsentAcceptButton = function ({ children, className }: AcceptButtonProps) {
  const { onAccept, setConsent, acceptedCookieName } = useNGTMConsentContext()

  const acceptCookie = () => {
    setConsent(true)
    setCookie(acceptedCookieName, 'true', { maxAge: 60 * 60 * 24 * 365 })
    // @ts-ignore
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    })
  }

  const handleClick = () => {
    acceptCookie()
    if (typeof onAccept === 'function') {
      onAccept()
    }
  }

  return (
    <button className={className} onClick={() => handleClick()}>
      {children}
    </button>
  )
}

export default NGTMConsentAcceptButton
