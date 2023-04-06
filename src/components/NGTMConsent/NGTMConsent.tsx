import React, { useEffect, useState } from 'react'
import { hasCookie } from 'cookies-next'
import NGTMConsentContext from './NGTMContext'

interface NGTMConsentProps {
  className?: string
  children?: React.ReactNode | React.ReactNode[]
  onAccept?: () => void
  onDecline?: () => void
  acceptedCookieName: string
}

const NGTMConsent = function ({ className, children, onAccept, onDecline, acceptedCookieName }: NGTMConsentProps) {
  const [consent, setConsent] = useState(true)
  useEffect(() => {
    setConsent(hasCookie(acceptedCookieName))
  }, [acceptedCookieName])

  if (consent === true) {
    return null
  }

  return (
    <NGTMConsentContext.Provider value={{ onAccept, onDecline, setConsent, acceptedCookieName }}>
      <div className={className}>{children}</div>
    </NGTMConsentContext.Provider>
  )
}

export default NGTMConsent
