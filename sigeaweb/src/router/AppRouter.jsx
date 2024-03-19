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
import TeacherLayout from '../components/layout/TeacherLayout';
import DashboardPage from '../modules/admin/DashboardPage';
import SettingsStudents from '../modules/admin/SettingsStudents';
import SettingsTeachers from '../modules/admin/SettingsTeachers';
import UnitPage from '../modules/teacher/UnitPage';
import ProfilePage from '../modules/teacher/ProfilePage'
import ExamPage from '../modules/teacher/ExamPage';
import CodeAccess from '../modules/student/CodeAccess';
import Exam from '../modules/student/Exam';
import History from '../modules/student/History';
import StudentLayout from '../components/layout/StudentLayout';

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  const routesFromRole = (role) => {
    switch (role) {
      case 'ADMIN_ROLE':
        return (
          <>
            <Route path="/" element={<AdminLayout user={user} />}>
            <Route path='dashboard' element={<DashboardPage />} /> 
            <Route path="teachers" element={<SettingsTeachers/>} />
            <Route path="students" element={<SettingsStudents/>} />
            </Route>
          </>
        );
      case 'USER_ROLE':
        return (
          <>
            <Route path="/" element={<TeacherLayout user={user} />}>
              <Route path="dashboard" element={<DashboardTeaceher/>} />
              <Route path="profile" element={<ProfilePage/>} />
              <Route path='exam' element={<ExamPage/>}/>
              <Route path='unit' element={<UnitPage/>} />
            </Route>
          </>
        );
      case 'CLIENT_ROLE':
        return (
          <>
            <Route path="/" element={<StudentLayout user={user} />}>
              <Route path="access" element={<CodeAccess user={user}/>}/>
              <Route path="exam" element={<Exam/>} />
              <Route path='history' element={<History/>}/>    
            </Route>
          </>
        );
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user.signed ? (
          <>
            {routesFromRole(user?.roles[0]?.name)}
          </>
        ) : (
          <Route path="/" element={<SignInPage />} />
        )}
        <Route path="/*" element={<>404 not found</>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;
