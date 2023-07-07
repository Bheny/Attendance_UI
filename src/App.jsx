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

// import ContactPage from './components/ContactPage';

const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPageLayout />}>
        <Route path="" element={<MainDashboard />} />
        <Route path="myEvents" element={<EventsPage />} />
        <Route path="classes" element={<ClassPage />} />
        <Route path="students" element={<StudentPage />} />
      </Route>
      <Route path="/event" element={<Attendance />}>
        <Route path="" element={<MyEvents />} />
        <Route path="detail" element={<RegisterList />} />
      </Route>
      <Route path="notifications" element={<Attendance />}>
        <Route path="" element={<NotificationsPage />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  );
};

export default App;
