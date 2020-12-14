import { Router } from '@reach/router'
import { AuthProvider } from './contexts/useAuth'
import LoginPage from './pages/LoginPage'

const App: React.FC = () => {
  return(
    <AuthProvider>
      <Router>
        <LoginPage path='login' />
      </Router>
    </AuthProvider>
  )
}

export default App
