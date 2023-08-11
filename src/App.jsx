import { useState } from "react";
import {
  Route,
  Routes,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentPage from "./pages/dashboard/StudentPage";

import DashboardPageLayout from "./layouts/Dashboard";

import ImageAnalysis from "./pages/dashboard/ImageAnalysis";

import EventsPage from "./pages/dashboard/EventsPage";
import ClassPage from "./pages/dashboard/ClassPage";
import MainDashboard from "./pages/dashboard/MainDashboard";
import RegisterList from "./pages/Attendance/RegisterList";
import Attendance from "./layouts/Attendance";
import MyEvents from "./pages/Attendance/MyEvents";
import NotificationsPage from "./pages/Attendance/NotificationsPage";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AnalyticsPage from "./pages/Analytics/AnalyticsPage";
import BiometricAttendance from "./pages/Attendance/biometric/attendance";
import { AuthProvider } from "./context/auth";

// import ContactPage from './components/ContactPage';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPageLayout />}>
        <Route index element={<MainDashboard />} />
        <Route path="myEvents" element={<EventsPage />} />
        <Route path="classes" element={<ClassPage />} />
        <Route path="students" element={<StudentPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
      </Route>
      <Route path="/event" element={<Attendance />}>
        <Route path="" element={<MyEvents />} />
        <Route path="detail" element={<RegisterList />} />
      </Route>
      <Route path="/biometric">
        <Route path="attendance" element={<BiometricAttendance />} />
      </Route>
      <Route path="notifications" element={<Attendance />}>
        <Route path="" element={<NotificationsPage />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
    </AuthProvider>
  );
};

export default App;
