import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="bg-cream min-h-screen font-display text-charcoal bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            {/* Navigation Header */}
            <nav className="w-full bg-white/80 backdrop-blur-md border-b-2 border-dashed border-paper-line p-6 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-doodle-purple text-4xl">rocket_launch</span>
                    <h1 className="text-2xl font-bold text-doodle-purple tracking-tight">Great Minds Hub</h1>
                </div>

                <div className="flex gap-8 font-hand text-2xl">
                    {/* HOME is now highlighted purple with the underline */}
                    <Link
                        to="/dashboard"
                        className="text-doodle-purple underline underline-offset-8 decoration-4"
                    >
                        Home
                    </Link>

                    {/* CALENDAR is now the secondary state */}
                    <Link
                        to="/calendar"
                        className="text-charcoal hover:text-doodle-teal transition-colors"
                    >
                        Calendar
                    </Link>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="max-w-6xl mx-auto p-8 flex flex-col items-center">

                {/* Welcome Hero Section */}
                <section className="text-center my-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block bg-doodle-yellow px-4 py-1 rounded-full border-2 border-charcoal mb-4 rotate-2 shadow-doodle">
                        <span className="font-hand text-xl font-bold">Welcome Back! 👋</span>
                    </div>
                    <h2 className="text-6xl font-bold text-ink mb-4">What's on your mind today?</h2>
                    <p className="font-hand text-3xl text-charcoal/70">Pick a path to get started with your activities.</p>
                </section>

                {/* Big Navigation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-8">

                    {/* Calendar Card - Points to /calendar */}
                    <Link to="/calendar" className="group bg-white p-8 rounded-[3rem] border-2 border-paper-line shadow-doodle hover:shadow-doodle-hover hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-doodle-purple/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                        <span className="material-symbols-outlined text-6xl text-doodle-purple mb-4">calendar_month</span>
                        <h3 className="text-3xl font-bold mb-2">Activity Calendar</h3>
                        <p className="text-xl text-charcoal/60 mb-6 font-hand">Browse workshops, yoga classes, and social tea times for the month.</p>
                        <div className="inline-flex items-center gap-2 text-doodle-purple font-bold text-lg">
                            Check Dates <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </Link>

                    {/* My Schedule Card - Points to /dashboard (or wherever you manage tasks) */}
                    <Link to="/dashboard" className="group bg-white p-8 rounded-[3rem] border-2 border-paper-line shadow-doodle hover:shadow-doodle-hover hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-doodle-teal/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                        <span className="material-symbols-outlined text-6xl text-doodle-teal mb-4">assignment_turned_in</span>
                        <h3 className="text-3xl font-bold mb-2">My Schedule</h3>
                        <p className="text-xl text-charcoal/60 mb-6 font-hand">View the activities you've already signed up for and check for conflicts.</p>
                        <div className="inline-flex items-center gap-2 text-doodle-teal font-bold text-lg">
                            Manage Tasks <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </Link>

                </div>

                {/* Floating Doodle Element */}
                <div className="mt-20 p-6 bg-doodle-orange/20 border-2 border-dashed border-doodle-orange rounded-2xl rotate-1 max-w-md text-center">
                    <p className="font-hand text-2xl font-bold text-[#A64B2A]">"Creativity is intelligence having fun."</p>
                    <p className="text-sm font-bold opacity-50">— Albert Einstein</p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;