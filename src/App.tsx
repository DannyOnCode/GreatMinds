import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.tsx';
import Calendar from './calendar.tsx';
import Dashboard from "./Dashboard.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;