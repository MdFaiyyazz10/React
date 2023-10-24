import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import UserContextProvider from './context/UserContextProvider';

function App() {
  

  return (
    <UserContextProvider>
    <h1>I am Faiyyazz</h1>
    <Login />
    <Signup />
    <Profile />
    </UserContextProvider>
  )
}

export default App;
