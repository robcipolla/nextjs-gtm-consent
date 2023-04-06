import React from 'react'
import { setCookie } from 'cookies-next'
import { useNGTMConsentContext } from './NGTMContext'

interface DeclineButtonProps {
  className?: string
  children?: React.ReactNode
}

const NGTMConsentDeclineButton = function ({ children, className }: DeclineButtonProps) {
  const { onDecline, setConsent, acceptedCookieName } = useNGTMConsentContext()

  const denyCookie = () => {
    setConsent(true)
    setCookie(acceptedCookieName, 'false', {
      maxAge: 60 * 60 * 24 * 365,
    })
  }

  const handleClick = () => {
    denyCookie()
    if (typeof onDecline === 'function') {
      onDecline()
    }
  }

  return (
    <button className={className} onClick={() => handleClick()}>
      {children}
    </button>
  )
}

export default NGTMConsentDeclineButton
