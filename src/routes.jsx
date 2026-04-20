import App from "./App"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from "./pages/RegisterPage"
import { EmotionsPage } from "./pages/EmotionsPage"
import { SongPage } from "./pages/SongPage"
// import { AdminPage } from "./pages/AdminPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ProtectedRoute } from './components/ProtectedRoute'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'emotions/:slug', element: <ProtectedRoute><EmotionsPage /></ProtectedRoute> },
      { path: 'song/:id', element: <ProtectedRoute><SongPage /></ProtectedRoute> },
      // { path: 'admin', element: <ProtectedRoute><AdminPage /></ProtectedRoute> },
      {
        path: 'auth',
        children: [
          { path: 'login', element: <LoginPage /> },
          { path: 'register', element: <RegisterPage /> },
        ]
      },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]