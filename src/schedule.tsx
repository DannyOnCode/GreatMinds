import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Activity {
    id: number;
    title: string;
    emoji: string;
    month: string;
    day: string;
    weekday: string;
    time: string;
    location: string;
    attendee?: string;
    doodleColor: string;
}

const Schedule: React.FC = () => {
    // 1. Initialize state as an empty array
    const [activities, setActivities] = useState<Activity[]>([]);

    // 2. LOAD DATA: Read from localStorage when the page opens
    useEffect(() => {
        const savedData = localStorage.getItem('myActivities');
        if (savedData) {
            try {
                setActivities(JSON.parse(savedData));
            } catch (e) {
                console.error("Failed to parse activities", e);
            }
        }
    }, []);

    // 3. DELETE DATA: Function to remove an activity
    const handleCancel = (id: number) => {
        const updatedList = activities.filter(activity => activity.id !== id);
        setActivities(updatedList);
        localStorage.setItem('myActivities', JSON.stringify(updatedList));
    };

    return (
        <div className="bg-cream min-h-screen font-display text-charcoal bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            {/* Navigation Header */}
            <nav className="w-full bg-white/80 backdrop-blur-md border-b-2 border-dashed border-paper-line p-4 h-20 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-doodle-purple text-4xl">spa</span>
                    <h1 className="text-2xl font-bold text-doodle-purple tracking-tight">Great Minds Hub</h1>
                </div>

                <div className="flex gap-8 font-hand text-2xl">
                    <Link to="/dashboard" className="text-charcoal hover:text-doodle-purple transition-colors">Home</Link>
                    <Link to="/calendar" className="text-charcoal hover:text-doodle-purple transition-colors">Calendar</Link>
                    <Link to="/schedule" className="text-doodle-purple underline underline-offset-8 decoration-4">Schedule</Link>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto p-8 flex flex-col">
                <header className="text-center my-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block bg-doodle-yellow px-4 py-1 rounded-full border-2 border-charcoal mb-4 rotate-2 shadow-doodle">
                        <span className="font-hand text-xl font-bold">Upcoming Fun! 👋</span>
                    </div>
                    <h2 className="text-5xl font-bold text-ink mb-2">My Signed Up Activities</h2>
                    <p className="font-hand text-2xl text-charcoal/70">Here is what you have planned for the week.</p>
                </header>

                {/* Activity List - Conditional Rendering */}
                <div className="space-y-8">
                    {activities.length > 0 ? (
                        activities.map((activity) => (
                            <article
                                key={activity.id}
                                className="group bg-white p-6 rounded-[2.5rem] border-2 border-paper-line shadow-doodle hover:shadow-doodle-hover transition-all relative overflow-hidden flex flex-col md:flex-row gap-6 items-center"
                            >
                                {/* Date Column */}
                                <div className="flex flex-col items-center min-w-[100px] border-r-2 border-dashed border-paper-line pr-6">
                                    <span className="font-hand text-xl text-charcoal/50 uppercase">{activity.month}</span>
                                    <span className="text-5xl font-black text-ink">{activity.day}</span>
                                    <span className="font-hand text-lg font-bold text-doodle-purple">{activity.weekday}</span>
                                </div>

                                {/* Content Column */}
                                <div className="flex-1 flex flex-col md:flex-row items-center gap-6 w-full">
                                    <div className={`h-20 w-20 flex items-center justify-center rounded-2xl border-2 rotate-2 group-hover:rotate-6 transition-transform ${activity.doodleColor}`}>
                                        <span className="text-5xl">{activity.emoji}</span>
                                    </div>

                                    <div className="text-center md:text-left flex-1">
                                        <h3 className="text-3xl font-bold mb-1">{activity.title}</h3>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-4 font-hand text-xl text-charcoal/70">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-doodle-purple">schedule</span>
                                                {activity.time}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-doodle-teal">location_on</span>
                                                {activity.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Cancel Button - Now Functional */}
                                <button
                                    onClick={() => handleCancel(activity.id)}
                                    className="md:ml-4 p-4 text-charcoal/30 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors group/btn"
                                >
                                    <span className="material-symbols-outlined text-3xl group-hover/btn:scale-110 transition-transform">cancel</span>
                                    <p className="text-xs font-bold mt-1">Cancel</p>
                                </button>
                            </article>
                        ))
                    ) : (
                        /* Empty State: If no activities are signed up */
                        <div className="text-center py-20 bg-white/50 rounded-[3rem] border-2 border-dashed border-paper-line">
                            <span className="material-symbols-outlined text-6xl text-charcoal/20 mb-4">event_busy</span>
                            <p className="font-hand text-3xl text-charcoal/50">Your schedule is empty!</p>
                            <Link to="/calendar" className="text-doodle-purple underline text-xl font-bold mt-4 inline-block">
                                Go to the Calendar to find something fun!
                            </Link>
                        </div>
                    )}
                </div>

                {/* Doodle Call to Action */}
                <div className="mt-20 p-8 bg-white border-2 border-dashed border-paper-line rounded-[3rem] shadow-doodle text-center relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-doodle-yellow px-6 py-2 rounded-full border-2 border-charcoal rotate-1 font-hand text-xl font-bold">
                        Want to do more?
                    </div>
                    <p className="text-2xl text-charcoal/70 font-hand mb-6 mt-4">Browse the community calendar to discover new workshops and gatherings.</p>
                    <Link to="/calendar" className="inline-flex items-center gap-2 bg-doodle-teal text-white font-bold py-3 px-8 rounded-xl shadow-doodle hover:translate-y-1 hover:shadow-none transition-all text-xl">
                        Go to Calendar <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Schedule;