import { BrowserRouter, Routes, Route, Link, Switch, Navigate } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import React, {useEffect, useState} from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
if (localStorage.getItem('auth')){
    setIsAuth(true)
}
setLoading(false)}, [] )
    
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
    }}>
        <BrowserRouter>
       <Navbar/>
      <AppRouter/>
      </BrowserRouter>
      </AuthContext.Provider>
    )
  }

export default App;


// function App() {
//     return (
//         <BrowserRouter>
//        <Navbar/>
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/posts" element={<Posts />} />
//           <Route path="/posts/:id" element={<PostIdPage/>} />
//           <Route path="/error" element={<Error />} />
//           <Route path="/*" element={<Error />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
