import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Calendar: React.FC = () => {
    const [showConflict, setShowConflict] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // --- STATE FOR POPUP ---
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

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

    // Activity Data
    const events: { [key: number]: { title: string; time: string; color: string; desc?: string }[] } = {
        2: [{ title: '🎨 Watercolor', time: '10:00 AM', color: '#FFDAC1', desc: 'Bring your own brushes! Room 4.' }],
        4: [{ title: '🧘 Chair Yoga', time: '02:00 PM', color: '#E2F0CB', desc: 'Gentle stretching for all levels.' }],
        6: [{ title: '💃 Salsa', time: '05:00 PM', color: '#FFB7B2', desc: 'No partner required. Let’s dance!' }],
    };

    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    // --- SIGN UP LOGIC (Saves to LocalStorage) ---
    const handleSignUp = (event: any, day: number) => {
        const newActivity = {
            id: Date.now(),
            title: event.title,
            emoji: event.title.split(' ')[0],
            month: monthNames[currentMonth.getMonth()],
            day: day.toString(),
            weekday: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                .toLocaleDateString('en-US', { weekday: 'short' }),
            time: event.time,
            location: "Activity Center",
            doodleColor: "border-doodle-purple bg-doodle-purple/10 text-doodle-purple"
        };

        const existing = JSON.parse(localStorage.getItem('myActivities') || '[]');
        localStorage.setItem('myActivities', JSON.stringify([...existing, newActivity]));

        setSelectedDay(null); // Close modal
        alert(`Signed up for ${event.title}! It is now in your schedule.`);
    };

    return (
        <div className="bg-cream text-charcoal font-display min-h-screen overflow-x-hidden selection:bg-doodle-yellow selection:text-ink bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            {/* Navigation */}
            <nav className="w-full bg-white/80 backdrop-blur-md border-b-2 border-dashed border-paper-line p-4 h-20 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-doodle-purple text-4xl">palette</span>
                    <h1 className="text-2xl font-bold text-doodle-purple tracking-tight">Great Minds Hub</h1>
                </div>

                <div className="flex gap-8 font-hand text-2xl">
                    <Link to="/dashboard" className="text-charcoal hover:text-doodle-teal transition-colors">Home</Link>
                    <Link to="/calendar" className="text-doodle-purple underline underline-offset-8 decoration-4">Calendar</Link>
                    <Link to="/schedule" className="text-charcoal hover:text-doodle-teal transition-colors">Schedule</Link>
                </div>
            </nav>

            <div className="layout-container flex flex-col items-center w-full py-10 px-4 md:px-10">
                <div className="w-full max-w-[1280px] flex flex-col gap-8">

                    {/* Header / Month Controls */}
                    <div className="flex justify-center items-center gap-6 bg-white p-6 rounded-3xl shadow-doodle border-2 border-paper-line">
                        <button onClick={prevMonth} className="size-12 flex items-center justify-center rounded-full bg-cream-dark hover:bg-doodle-purple hover:text-white transition-all">
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </button>
                        <div className="text-center">
                            <h1 className="text-doodle-purple text-4xl font-bold">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </h1>
                        </div>
                        <button onClick={nextMonth} className="size-12 flex items-center justify-center rounded-full bg-cream-dark hover:bg-doodle-purple hover:text-white transition-all">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="bg-white rounded-[2rem] shadow-doodle border-2 border-paper-line overflow-hidden">
                        <div className="grid grid-cols-7 border-b-2 border-dashed border-paper-line bg-cream/30">
                            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
                                <div key={day} className="p-4 text-doodle-purple font-hand text-xl font-bold text-center border-r-2 border-dashed border-paper-line last:border-r-0">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7">
                            {calendarGrid.map((day, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => day && setSelectedDay(day)}
                                    className={`border-r-2 border-b-2 border-dashed border-paper-line last:border-r-0 p-2 h-[130px] transition-all relative ${day ? 'cursor-pointer hover:bg-cream/50' : 'bg-cream/10'}`}
                                >
                                    {day && (
                                        <>
                                            <span className="block text-right font-hand text-2xl text-charcoal/40 mb-1">{day}</span>
                                            {events[day]?.map((event, i) => (
                                                <div key={i} className="text-xs p-1.5 rounded-lg mb-1 truncate font-bold border border-black/5 shadow-sm" style={{ backgroundColor: event.color }}>
                                                    {event.title}
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

            {/* EVENT DETAILS MODAL */}
            {selectedDay !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-[500px] rounded-[3rem] border-4 border-charcoal shadow-doodle overflow-hidden transform animate-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="bg-doodle-purple p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="font-hand text-3xl">Activities for:</h3>
                                <p className="text-4xl font-bold">{monthNames[currentMonth.getMonth()]} {selectedDay}</p>
                            </div>
                            <button onClick={() => setSelectedDay(null)} className="bg-white/20 hover:bg-white/40 size-12 rounded-full flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                            {events[selectedDay] ? (
                                events[selectedDay].map((event, i) => (
                                    <div key={i} className="p-6 rounded-3xl border-2 border-charcoal shadow-sm flex flex-col gap-2 bg-white" style={{ backgroundColor: event.color }}>
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-2xl font-bold">{event.title}</h4>
                                            <span className="bg-white/50 px-3 py-1 rounded-full font-bold text-sm">
                                                {event.time}
                                            </span>
                                        </div>
                                        <p className="font-hand text-xl text-charcoal/80">{event.desc || 'Join us for some fun!'}</p>

                                        <button
                                            onClick={() => handleSignUp(event, selectedDay!)}
                                            className="mt-4 bg-doodle-teal text-white py-4 rounded-2xl font-bold hover:bg-doodle-teal/80 transition-all w-full shadow-doodle text-xl"
                                        >
                                            Sign Up for This! 👋
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <span className="material-symbols-outlined text-6xl text-charcoal/20">event_busy</span>
                                    <p className="font-hand text-2xl text-charcoal/50 mt-4">No events scheduled for today.</p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 bg-cream border-t-2 border-dashed border-paper-line text-center">
                            <button onClick={() => setSelectedDay(null)} className="font-hand text-2xl text-doodle-purple underline font-bold">
                                Back to Calendar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;