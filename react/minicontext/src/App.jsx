import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContentProvider'

function App() {


  return (
    <>
    <UserContextProvider>
  <Login/>
  <Profile/>
    </UserContextProvider> 
    </>
  )
}

export default App
