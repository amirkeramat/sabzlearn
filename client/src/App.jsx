import {useRoutes} from 'react-router-dom'
import './App.css'
import routs from './routes/routes'

function App() {
  const router = useRoutes(routs)
  return (
  <div className='app'>
      
  
      {router}
  </div>
  )
}

export default App
