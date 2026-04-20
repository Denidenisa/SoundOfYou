import { Navigate } from 'react-router'
import { useAtom } from 'jotai'
import { isConnectedAtom } from '../atoms/auth.atom'

export const ProtectedRoute = ({ children }) => {
  const [isConnected] = useAtom(isConnectedAtom)

  if (!isConnected) return <Navigate to="/auth/login" />

  return children
}