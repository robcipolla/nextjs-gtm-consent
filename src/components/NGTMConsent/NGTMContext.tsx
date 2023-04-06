import { createContext, useContext } from 'react'

const NGTMConsentContext = createContext<any>(null)

export function useNGTMConsentContext() {
  const context = useContext(NGTMConsentContext)
  return context
}

export default NGTMConsentContext
