/*navegar entre componentes 
por medio de URL*/
import React, { useContext } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import SignInPage from '../modules/auth/SignInPage';
import AuthContext from '../config/context/auth-context';
import AdminLayout from '../components/layout/AdminLayout';
import DashboardPage from '../modules/admin/DashboardPage';
import SettingsStudents from '../modules/admin/SettingsStudents';
import SettingsTeachers from '../modules/admin/SettingsTeachers';
const AppRouter = () => {
  const { user } = useContext(AuthContext);
  // const routesFromRole = (role) => {
  //   switch (role) {
  //     case 'ADMIN_ROLE':
  //       return (
  //         <>
  //           <Route
  //             path="admin"
  //             element={
  //               <>
  //                 {user.user.person?.name +
  //                   ' ' +
  //                   user.user.person?.surname +
  //                   `${user.user.person?.lastname ?? ''}` +
  //                   ' - ' +
  //                   user?.roles[0]?.name}
  //               </>
  //             }
  //           />
  //         </>
  //       );
  //     case 'CLIENT_ROLE':
  //       return (
  //         <Route
  //           path="admin"
  //           element={
  //             <>
  //               {user.user.person?.name +
  //                 ' ' +
  //                 user.user.person?.surname +
  //                 `${user.user.person?.lastname ?? ''}` +
  //                 ' - ' +
  //                 user?.roles[0]?.name}
  //             </>
  //           }
  //         />
  //       );
  //     case 'USER_ROLE':
  //       return (
  //         <Route
  //           path="admin"
  //           element={
  //             <>
  //               {user.user.person?.name +
  //                 ' ' +
  //                 user.user.person?.surname +
  //                 `${user.user.person?.lastname ?? ''}` +
  //                 ' - ' +
  //                 user?.roles[0]?.name}
  //             </>
  //           }
  //         />
  //       );
  //   }
  // };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user.signed ? (
          <>
            <Route path="/" element={<AdminLayout />}>
              {
                // routesFromRole(user?.roles[0]?.name)
              }
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="users" element={<SettingsTeachers/>} />
              <Route path="products" element={<SettingsStudents/>} />
            </Route>
          </>
        ) : (
          <Route path="/" element={<SignInPage />} />
        )}
        <Route path="/*" element={<> 404 not found</>} />
      </>
    )
  );
  //RouterProvider -> Context
  return <RouterProvider router={router} />;
};
export default AppRouter;
