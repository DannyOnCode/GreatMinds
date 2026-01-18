import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.tsx';
import Calendar from './calendar.tsx';
import Dashboard from "./Dashboard.tsx";
import Schedule from "./schedule.tsx";
import AdminPanel from "./admin-panel.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1. The Landing Page (Login) */}
                <Route path="/" element={<Login />} />

                {/* 2. The Dashboard (Change path from "/" to "/dashboard") */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* 3. The Calendar */}
                <Route path="/calendar" element={<Calendar />} />

                {/* 4. The Schedule */}
                <Route path="/schedule" element={<Schedule />} />

                <Route path="/admin-panel" element={<AdminPanel />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;