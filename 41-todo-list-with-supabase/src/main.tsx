import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import { ErrorBoundary } from '@/components'
import App from './app'
import { AuthProvider } from './context/auth'
import './styles/main.css'

const root = document.getElementById('root')
if (!root) throw new Error('문서에 #root 요소가 존재하지 않습니다.')

createRoot(root).render(
  // toast 중복 발생으로 StrictMode 해제
  <>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
      <Toaster position="top-center" />
    </ErrorBoundary>
  </>
)
