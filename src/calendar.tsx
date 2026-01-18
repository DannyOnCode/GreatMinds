import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Calendar: React.FC = () => {
    // Modal is hidden by default so you can see the background/grid
    const [showConflict, setShowConflict] = useState(false);

    return (
        <div className="bg-cream text-charcoal font-display min-h-screen overflow-x-hidden selection:bg-doodle-yellow selection:text-ink">
            {/* Background Texture Wrapper */}
            <div className="relative flex min-h-screen w-full flex-col group/design-root bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">

                {/* Navigation Bar */}
                <div className="w-full bg-white/80 backdrop-blur-md border-b-2 border-dashed border-paper-line sticky top-0 z-40">
                    <div className="px-6 md:px-10 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-ink">
                            <div className="size-12 bg-doodle-purple text-white rounded-full shadow-doodle flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>palette</span>
                            </div>
                            <h2 className="text-2xl font-bold tracking-wide text-doodle-purple">Activity Hub</h2>
                        </div>
                        <div className="flex items-center gap-8">
                            <nav className="hidden md:flex items-center gap-6">
                                <Link to="/dashboard" className="text-charcoal hover:text-doodle-teal font-medium text-lg transition-colors font-hand text-xl">Home</Link>
                                <Link to="/calendar" className="text-doodle-purple font-bold text-lg border-b-4 border-doodle-purple pb-0.5">Calendar</Link>
                            </nav>
                            <button
                                onClick={() => setShowConflict(true)}
                                className="flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-cream-dark hover:bg-doodle-yellow text-charcoal transition-all shadow-sm hover:shadow-doodle"
                            >
                                <span className="material-symbols-outlined">warning</span>
                                <span className="font-bold">Show Conflict</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Calendar Content */}
                <div className="layout-container flex flex-col items-center w-full py-10 px-4 md:px-10 lg:px-20">
                    <div className="w-full max-w-[1280px] flex flex-col gap-8">

                        {/* Header / Month Controls */}
                        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 bg-white p-6 rounded-3xl shadow-doodle border-2 border-paper-line">
                            <div className="flex items-center gap-6">
                                <button className="size-12 flex items-center justify-center rounded-full bg-cream-dark hover:bg-doodle-purple hover:text-white transition-all">
                                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                                </button>
                                <div className="text-center md:text-left min-w-[220px]">
                                    <h1 className="text-doodle-purple text-4xl font-bold tracking-tight">October 2023</h1>
                                    <p className="text-charcoal/70 font-hand text-xl mt-1">Pick something fun to do!</p>
                                </div>
                                <button className="size-12 flex items-center justify-center rounded-full bg-cream-dark hover:bg-doodle-purple hover:text-white transition-all">
                                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                                </button>
                            </div>

                            {/* Category Filters */}
                            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
                                <button className="h-11 px-5 rounded-2xl bg-doodle-purple text-white font-bold shadow-doodle">All</button>
                                <button className="h-11 px-5 rounded-2xl bg-[#FFDAC1] text-[#A64B2A] font-bold">🎨 Arts</button>
                                <button className="h-11 px-5 rounded-2xl bg-[#E2F0CB] text-[#4A7C59] font-bold">🧘 Yoga</button>
                            </div>
                        </div>

                        {/* THE CALENDAR GRID */}
                        <div className="bg-white rounded-[2rem] shadow-[8px_8px_0px_rgba(0,0,0,0.05)] border-2 border-paper-line overflow-hidden relative">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[900px] border-collapse grid-dashed">
                                    <thead>
                                    <tr className="bg-cream-dark border-b-2 border-dashed border-paper-line">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                            <th key={day} className="p-4 text-doodle-purple font-hand text-xl font-bold">{day}</th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* Row 1 */}
                                    <tr>
                                        <td className="calendar-cell p-3 align-top bg-cream/30">
                                            <span className="block text-right font-hand text-2xl text-charcoal/40 mb-2 mr-2">1</span>
                                        </td>
                                        <td className="calendar-cell p-3 align-top">
                                            <span className="block text-right font-hand text-2xl text-charcoal/60 mb-2 mr-2">2</span>
                                            <div className="flex flex-col gap-1 p-3 rounded-2xl bg-[#FFDAC1] hover:shadow-md cursor-pointer transition-all transform hover:-translate-y-1">
                                                <span className="text-sm font-bold text-[#A64B2A]">🎨 Watercolor</span>
                                                <span className="text-xs font-bold text-[#A64B2A]/70">10:00 AM</span>
                                            </div>
                                        </td>
                                        <td className="calendar-cell p-3 align-top"><span className="block text-right font-hand text-2xl text-charcoal/60 mb-2 mr-2">3</span></td>
                                        <td className="calendar-cell p-3 align-top">
                                            <span className="block text-right font-hand text-2xl text-charcoal/60 mb-2 mr-2">4</span>
                                            <div className="flex flex-col gap-1 p-3 rounded-2xl bg-[#E2F0CB] border-2 border-[#82C790] cursor-pointer hover:shadow-md">
                                                <span className="text-sm font-bold text-[#4A7C59]">🧘 Chair Yoga</span>
                                                <span className="text-xs font-bold text-[#4A7C59]/80">02:00 PM</span>
                                            </div>
                                        </td>
                                        <td className="calendar-cell p-3 align-top"><span className="block text-right font-hand text-2xl text-charcoal/60 mb-2 mr-2">5</span></td>
                                        <td className="calendar-cell p-3 align-top">
                                            <span className="block text-right font-hand text-2xl text-charcoal/60 mb-2 mr-2">6</span>
                                            <div className="bg-[#FFB7B2] p-3 rounded-2xl transition-all hover:-translate-y-1 cursor-pointer">
                                                <span className="text-sm font-bold text-[#8B0000]">💃 Salsa</span>
                                            </div>
                                        </td>
                                        <td className="calendar-cell p-3 align-top bg-cream/30"><span className="block text-right font-hand text-2xl text-charcoal/40 mb-2 mr-2">7</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex gap-8 px-4 py-4 rounded-2xl bg-white/50 border-2 border-dashed border-paper-line text-sm font-bold">
                            <div className="flex items-center gap-2"><div className="size-4 rounded-full bg-[#E2F0CB] border-2 border-[#82C790]"></div> Registered</div>
                            <div className="flex items-center gap-2"><div className="size-4 rounded-full bg-white border-2 border-[#E0E0E0]"></div> Available</div>
                            <div className="flex items-center gap-2"><div className="size-4 rounded-full border-2 border-doodle-red bg-white bg-[repeating-linear-gradient(45deg,#FF6B6B,#FF6B6B_2px,#fff_2px,#fff_4px)]"></div> Conflict</div>
                        </div>
                    </div>
                </div>

                {/* MODAL (Now Conditional) */}
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
        </div>
    );
};

export default Calendar;