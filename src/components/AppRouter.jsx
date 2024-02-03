import React, {useContext} from 'react';
import { Redirect, Routes, Route, Link, Switch, Navigate } from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from './UI/Loader/Loader';



const AppRouter = () => {
const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);
    
if (isLoading){
  return <Loader/>
}

    return (
        isAuth
        ? 
        <Routes>
        {privateRoutes.map((route, index) => (
          <Route key={index} element={<route.element />} path={route.path} exact={route.exact} />
        ))}
        <Route path="/*" element={<Navigate to="/posts" replace />} />
        </Routes>
        :
        <Routes>
        {publicRoutes.map((route, index) => (
          <Route key={index} element={<route.element />} path={route.path} exact={route.exact} />
        ))}
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
       
    );
};

export default AppRouter;
