import React from 'react';

const AdminPanel: React.FC = () => {
    return (
        <div className="bg-cream min-h-screen font-display p-8 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            <div className="max-w-5xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-ink">Editorial Control</h1>
                        <p className="font-hand text-2xl text-charcoal/60">Manage community activities and schedules</p>
                    </div>
                    <button className="bg-doodle-purple text-white px-6 py-3 rounded-xl shadow-doodle flex items-center gap-2 font-bold hover:-translate-y-1 transition-all">
                        <span className="material-symbols-outlined">add_circle</span>
                        Add New Event
                    </button>
                </header>

                {/* Editorial Table or List would go here */}
                <div className="bg-white border-2 border-paper-line rounded-[2rem] shadow-doodle p-6">
                    <p className="text-center font-hand text-xl py-10">Admin editorial tools will appear here...</p>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;