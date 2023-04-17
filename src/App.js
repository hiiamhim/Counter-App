import Counter from './components/Counter';
import Auth from "./components/Auth"
import UserProfile from "./components/UserProfile"
import Header from "./components/Header"
import { useSelector } from 'react-redux';


function App() {
  const loggedin=useSelector(state=>state.auth.isAuthenticated)
  return (
    <>
   {loggedin && <Header/>}
   {!loggedin && <Auth/>}
   {loggedin && <UserProfile/>}
    <Counter />
    </>
  );
}

export default App;
