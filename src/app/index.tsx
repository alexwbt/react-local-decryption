import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import IndexPage from "./pages";
import SettingsPage from "./pages/settings";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return <StrictMode>
    <ToastContainer
      theme="colored"
      position="top-center"
      hideProgressBar
    />
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>;
};

export default App;
