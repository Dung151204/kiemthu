import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/users/homePage'


createRoot(document.getElementById('root')).render(
  <>
    <h2>Header</h2>
    <HomePage/>
    <h2>Footer</h2>
  </>,
)
