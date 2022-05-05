import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import SettingsPage from "./pages/settings";

const App: React.FC = () => {
  return <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>;
};

export default App;
