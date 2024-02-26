/*Navegar entre componentes por medio de URL*/
import React from 'react'
import { useContext } from 'react';
import AuthContext from '../config/context/auth-context';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SingInPage from '../modules/auth/SingInPage';
const AppRouter = () => {
    const { user } = useContext(AuthContext);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {user.signed ? (
                    <>
                        <Route path='/' element={<>Admin Layout</>}>
                            <Route path='dashboard' element={<>Dashboard</>} />
                            <Route path='users' element={<>Dashboard</>} />
                            <Route path='products' element={<>Dashboard</>} />
                        </Route>
                    </>
                ) : (
                    <Route path="/" element={<SingInPage />} />
                )}
                <Route path='/*' element={<>404 not found</>} />
            </>
        )
    );
    return (
        < RouterProvider router={router} />
    );
}

export default AppRouter;