import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminCalendar: React.FC = () => {
    const [showConflict, setShowConflict] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const getMonthInfo = (year: number, month: number) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        return { daysInMonth, firstDayIndex };
    };

    const generateCalendar = () => {
        const { daysInMonth, firstDayIndex } = getMonthInfo(currentMonth.getFullYear(), currentMonth.getMonth());
        const grid: (number | null)[] = [];

        for (let i = 0; i < firstDayIndex; i++) grid.push(null);
        for (let day = 1; day <= daysInMonth; day++) grid.push(day);
        while (grid.length % 7 !== 0) grid.push(null);

        return grid;
    };

    const calendarGrid = generateCalendar();

    const prevMonth = () => {
        const newDate = new Date(currentMonth);
        newDate.setMonth(currentMonth.getMonth() - 1);
        setCurrentMonth(newDate);
    };

    const nextMonth = () => {
        const newDate = new Date(currentMonth);
        newDate.setMonth(currentMonth.getMonth() + 1);
        setCurrentMonth(newDate);
    };

    const events: { [key: number]: { title: string; time: string; color: string }[] } = {
        2: [{ title: '🎨 Watercolor', time: '10:00 AM', color: '#FFDAC1' }],
        4: [{ title: '🧘 Chair Yoga', time: '02:00 PM', color: '#E2F0CB', border: '#82C790' }],
        6: [{ title: '💃 Salsa', time: '', color: '#FFB7B2', text: '#8B0000' }],
    };

    const monthNames = [
        'January','February','March','April','May','June',
        'July','August','September','October','November','December'
    ];

    return (
        <div className="bg-cream text-charcoal font-display min-h-screen overflow-x-hidden selection:bg-doodle-yellow selection:text-ink">
            {/* Navigation */}
            <nav className="w-full bg-white/80 backdrop-blur-md border-b-2 border-dashed border-paper-line p-4 h-20 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-doodle-purple text-4xl">palette</span>
                    <h1 className="text-2xl font-bold text-doodle-purple tracking-tight">ADMIN Great Minds Hub</h1>
                </div>

                <button
                    onClick={() => setShowConflict(true)}
                    className="flex items-center justify-center h-12 gap-1 px-6 rounded-full bg-cream-dark hover:bg-doodle-yellow text-charcoal transition-all shadow-sm hover:shadow-doodle"
                >
                    <span className="material-symbols-outlined">warning</span>
                    <span className="font-bold">Show Conflict</span>
                </button>

                <div className="flex gap-8 font-hand text-2xl">
                    <Link to="/adminCalendar" className="text-doodle-purple underline underline-offset-8 decoration-4">AdminCalendar</Link>
                    <Link to="/adminSchedule" className="text-charcoal hover:text-doodle-teal transition-colors">AdminSchedule</Link>
                    <Link to="/adminAttendance" className="text-charcoal hover:text-doodle-teal transition-colors">AdminAttendance</Link>
                </div>
            </nav>

            {/* Calendar Content */}
            <div className="layout-container flex flex-col items-center w-full py-10 px-4 md:px-10 lg:px-20">
                <div className="w-full max-w-[1280px] flex flex-col gap-8">

                    {/* Header / Month Controls */}
                    <div className="flex flex-col md:flex-row flex-wrap flex justify-center items-center gap-6 bg-white p-6 rounded-3xl shadow-doodle border-2 border-paper-line">
                        <div className="flex items-center gap-6">
                            <button
                                className="size-12 flex items-center justify-center rounded-full bg-cream-dark hover:bg-doodle-purple hover:text-white transition-all"
                                onClick={prevMonth}
                            >
                                <span className="material-symbols-outlined">arrow_back_ios_new</span>
                            </button>

                            <div className="text-center md:text-left min-w-[220px]">
                                <h1 className="text-doodle-purple text-4xl font-bold tracking-tight">
                                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                </h1>
                                <p className="text-charcoal/70 font-hand text-xl mt-1">Pick something fun to do!</p>
                            </div>

                            <button
                                className="size-12 flex items-center justify-center rounded-full bg-cream-dark hover:bg-doodle-purple hover:text-white transition-all"
                                onClick={nextMonth}
                            >
                                <span className="material-symbols-outlined">arrow_forward_ios</span>
                            </button>
                        </div>


                    </div>

                    {/* Calendar Grid using CSS Grid for fixed size cells */}
                    <div className="bg-white rounded-[2rem] shadow-[8px_8px_0px_rgba(0,0,0,0.05)] border-2 border-paper-line overflow-hidden relative">
                        <div className="grid grid-cols-7 border-b-2 border-dashed border-paper-line">
                            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
                                <div key={day} className="p-4 text-doodle-purple font-hand text-xl font-bold text-center border-r-2 border-dashed border-paper-line last:border-r-0">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 grid-rows-6">
                            {calendarGrid.map((day, idx) => (
                                <div
                                    key={idx}
                                    className="border-r-2 border-b-2 border-dashed border-paper-line last:border-r-0 p-2 h-[120px] flex flex-col justify-start overflow-hidden"
                                    style={{ backgroundColor: day ? 'white' : 'rgba(255,250,240,0.3)' }}
                                >
                                    {day && (
                                        <>
                                            <span className="block text-right font-hand text-2xl text-charcoal/60 mb-2 mr-2">{day}</span>
                                            {events[day]?.map((event, i) => (
                                                <div
                                                    key={i}
                                                    className="flex flex-col gap-1 p-2 rounded-2xl cursor-pointer transition-all transform hover:-translate-y-1"
                                                    style={{
                                                        backgroundColor: event.color,
                                                        border: event.border ? `2px solid ${event.border}` : undefined,
                                                        color: event.text || undefined
                                                    }}
                                                >
                                                    <span className="text-sm font-bold">{event.title}</span>
                                                    {event.time && <span className="text-xs font-bold">{event.time}</span>}
                                                </div>
                                            ))}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Modal */}
            {showConflict && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/30 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-[480px] rounded-[2rem] shadow-2xl border-4 border-white ring-4 ring-doodle-red/20 transform rotate-1">
                        <div className="h-40 bg-doodle-red flex flex-col items-center justify-center text-center p-4">
                            <h3 className="text-3xl font-hand font-bold text-white">Oops! Time Conflict</h3>
                            <button onClick={() => setShowConflict(false)} className="mt-4 bg-white px-4 py-1 rounded-full text-doodle-red font-bold">Close Preview</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCalendar;
