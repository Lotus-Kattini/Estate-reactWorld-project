import { Route, Routes } from 'react-router-dom'
import Listpage from './routes/listpage/Listpage'
import Homepage from './routes/homepage/Homepage'
import Layout from './routes/layout/Layout'
import Singlepage from './routes/singlepage/Singlepage'
import Profile from './routes/profile/Profile'
import Signup from './routes/signup/Signup'
import Signin from './routes/signin/Signin'
function App() {

  return (
    <div >
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/list' element={<Listpage/>}/>
          <Route path='/list/:id' element={<Singlepage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App