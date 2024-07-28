import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  webRoutes } from './routes'
import DefaultLayout from './components/Layout/Default'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {
            webRoutes.map((route, index) => {
              const Component = route.component;
              const Layout = (route.layout ? route.layout : DefaultLayout);
              return <Route key={index} path={route.path} element={<Layout><Component/></Layout>} />
            })
          }
        </Routes> 
      </div>
    </Router>
  )
}

export default App