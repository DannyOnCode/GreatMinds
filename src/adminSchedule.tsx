import React, {useState} from 'react';
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
    doodleColor: string; // Updated to match your theme colors
    signupLimit: string;
    contactNumber: string;
}

const AdminSchedule: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([
        {
            id: 1,
            title: "Watercolor Painting",
            emoji: "🎨",
            month: "Feb",
            day: "24",
            weekday: "Mon",
            time: "10:00 AM - 11:30 AM",
            location: "Community Hall, Room 4",
            doodleColor: "border-doodle-purple bg-doodle-purple/10 text-doodle-purple",
            signupLimit: "50",
            contactNumber: "1923094214"
        },
        {
            id: 2,
            title: "Chair Yoga",
            emoji: "🧘‍♀️",
            month: "Feb",
            day: "26",
            weekday: "Wed",
            time: "02:00 PM - 03:00 PM",
            location: "Activity Center, Room 3B",
            doodleColor: "border-doodle-teal bg-doodle-teal/10 text-doodle-teal",
            signupLimit: "50",
            contactNumber: "1923094214"
        },
        {
            id: 3,
            title: "Morning Nature Walk",
            emoji: "🚶",
            month: "Feb",
            day: "28",
            weekday: "Fri",
            time: "09:00 AM - 10:00 AM",
            location: "Riverside Park Entrance",
            attendee: "Martha",
            doodleColor: "border-doodle-orange bg-doodle-orange/10 text-[#A64B2A]",
            signupLimit: "50",
            contactNumber: "1923094214"
        }
    ]);
    const [Title, setTitle] = useState("");
    const [Emoji, setEmoji] = useState("");
    const [Time, setTime] = useState("");
    const [Location, setLocation] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [SignupLimit, setSignupLimit] = useState("");
    const handleAddActivity = (e: React.FormEvent) => {
        e.preventDefault();

        const today = new Date();

        const newActivity: Activity = {
            id: activities.length + 1, // simple incremental ID
            title: Title,
            emoji: Emoji,
            month: today.toLocaleString('default', { month: 'long' }),
            day: today.getDate().toString(),
            weekday: today.toLocaleString('default', { weekday: 'short' }),
            time: Time,
            location: Location,
            doodleColor: "bg-doodle-yellow",
            signupLimit: SignupLimit,
            contactNumber: ContactNumber,
        };

        setActivities([...activities, newActivity]);
        // Reset values
        setTitle("");
        setEmoji("");
        setTime("");
        setLocation("");
        setContactNumber("");
        setSignupLimit("");
    };

    return (
        <div className="bg-cream min-h-screen font-display text-charcoal bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            {/* Navigation Header - Matches Dashboard */}
            <nav className="w-full bg-white/80 backdrop-blur-md border-b-2 border-dashed border-paper-line p-4 h-20 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-doodle-purple text-4xl">spa</span>
                    <h1 className="text-2xl font-bold text-doodle-purple tracking-tight">ADMIN Great Minds Hub</h1>
                </div>

                <div className="flex gap-8 font-hand text-2xl">
                    <Link to="/adminCalendar" className="text-charcoal hover:text-doodle-teal transition-colors">AdminCalendar</Link>
                    <Link to="/adminSchedule" className="text-doodle-purple underline underline-offset-8 decoration-4">AdminSchedule</Link>
                    <Link to="/adminAttendance" className="text-charcoal hover:text-doodle-teal transition-colors">AdminAttendance</Link>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto p-8 flex flex-col">
                {/* Header Section */}
                <header className="text-center my-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block bg-doodle-yellow px-4 py-1 rounded-full border-2 border-charcoal mb-4 rotate-2 shadow-doodle">
                        <span className="font-hand text-xl font-bold">Upcoming Fun! 👋</span>
                    </div>
                    <h2 className="text-5xl font-bold text-ink mb-2">Manage activities</h2>
                    <p className="font-hand text-2xl text-charcoal/70">Here is what you have planned for the week.</p>
                </header>

                {/* Activity List */}
                <div className="space-y-8">
                    {/* Add new activity */}
                    <form onSubmit={handleAddActivity} className="space-y-6">
                        <input
                            type="text"
                            required
                            value={Title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Activity Title"
                            className="w-full border-2 border-paper-line rounded-xl p-3 text-xl outline-none"
                        />
                        <input
                            type="text"
                            required
                            value={Emoji}
                            onChange={(e) => setEmoji(e.target.value)}
                            placeholder="Emoji"
                            className="w-full border-2 border-paper-line rounded-xl p-3 text-xl outline-none"
                        />
                        <input
                            type="text"
                            required
                            value={Time}
                            onChange={(e) => setTime(e.target.value)}
                            placeholder="Time"
                            className="w-full border-2 border-paper-line rounded-xl p-3 text-xl outline-none"
                        />
                        <input
                            type="text"
                            required
                            value={Location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                            className="w-full border-2 border-paper-line rounded-xl p-3 text-xl outline-none"
                        />
                        <input
                            type="text"
                            required
                            value={ContactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            placeholder="Organiser's Contact Number"
                            className="w-full border-2 border-paper-line rounded-xl p-3 text-xl outline-none"
                        />
                        <input
                            type="text"
                            required
                            value={SignupLimit}
                            onChange={(e) => setSignupLimit(e.target.value)}
                            placeholder="Sign-up Limit"
                            className="w-full border-2 border-paper-line rounded-xl p-3 text-xl outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-doodle-purple text-white font-bold font-hand py-4 rounded-2xl shadow-doodle hover:translate-y-1 transition-all text-xl"
                        >
                            Add Activity
                        </button>
                    </form>
                    {activities.map((activity) => (
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
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-doodle-teal">phone</span>
                                            {activity.contactNumber}
                                        </div>
                                    </div>
                                    {activity.attendee && (
                                        <div className="mt-2 inline-flex items-center gap-2 bg-doodle-teal/10 px-3 py-1 rounded-lg border border-doodle-teal/20 text-doodle-teal font-bold text-sm">
                                            <span className="material-symbols-outlined text-sm">person</span>
                                            Signed up for: {activity.attendee}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Cancel Button */}
                            <button className="md:ml-4 p-4 text-charcoal/30 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors group/btn">
                                <span className="material-symbols-outlined text-3xl group-hover/btn:scale-110 transition-transform">cancel</span>
                                <p className="text-xs font-bold mt-1">Cancel</p>
                            </button>
                        </article>
                    ))}
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

export default AdminSchedule;