import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ---------- Types ---------- */
interface Event {
    id: number;
    title: string;
    emoji: string;
    date: string;
    time: string;
    location: string;
    doodleColor: string;
}

interface Participant {
    id: number;
    name: string;
    phone: string;
    role: 'Volunteer' | 'Participant';
    totalParticipations: number;
}

/* ---------- Mock Data ---------- */
const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Watercolor Painting',
        emoji: '🎨',
        date: 'Feb 24 (Mon)',
        time: '10:00 AM – 11:30 AM',
        location: 'Community Hall, Room 4',
        doodleColor: 'border-doodle-purple bg-doodle-purple/10 text-doodle-purple'
    },
    {
        id: 2,
        title: 'Chair Yoga',
        emoji: '🧘‍♀️',
        date: 'Feb 26 (Wed)',
        time: '02:00 PM – 03:00 PM',
        location: 'Activity Center, Room 3B',
        doodleColor: 'border-doodle-teal bg-doodle-teal/10 text-doodle-teal'
    },
    {
        id: 3,
        title: 'Morning Nature Walk',
        emoji: '🚶',
        date: 'Feb 28 (Fri)',
        time: '09:00 AM – 10:00 AM',
        location: 'Riverside Park Entrance',
        doodleColor: 'border-doodle-orange bg-doodle-orange/10 text-[#A64B2A]'
    }
];

const INITIAL_PARTICIPANTS: Record<number, Participant[]> = {
    1: [
        { id: 1, name: 'Martha Lim', phone: '9123 4567', role: 'Participant', totalParticipations: 5 },
        { id: 2, name: 'John Tan', phone: '9876 1122', role: 'Volunteer', totalParticipations: 2 }
    ],
    2: [
        { id: 3, name: 'Alice Wong', phone: '9345 7788', role: 'Participant', totalParticipations: 7 }
    ],
    3: [
        { id: 1, name: 'Martha Lim', phone: '9123 4567', role: 'Participant', totalParticipations: 5 },
        { id: 4, name: 'David Lee', phone: '9001 3344', role: 'Volunteer', totalParticipations: 1 }
    ]
};

/* ---------- Component ---------- */
const AdminAttendance: React.FC = () => {
    const [selectedEventId, setSelectedEventId] = useState<number | 'all' | null>(null);
    const [participantsByEvent, setParticipantsByEvent] =
        useState<Record<number, Participant[]>>(INITIAL_PARTICIPANTS);

    const [search, setSearch] = useState('');

    const [newMember, setNewMember] = useState({
        name: '',
        phone: '',
        role: 'Participant' as 'Participant' | 'Volunteer'
    });

    /* ---------- Derived Data ---------- */
    const allParticipants: Participant[] = Object.values(participantsByEvent)
        .flat()
        .reduce<Participant[]>((acc, p) => {
            const existing = acc.find(x => x.name === p.name && x.phone === p.phone);
            if (!existing) acc.push(p);
            return acc;
        }, []);

    const participants =
        selectedEventId === 'all'
            ? allParticipants
            : selectedEventId !== null
                ? participantsByEvent[selectedEventId] || []
                : [];

    const filteredParticipants = participants.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.phone.includes(search)
    );

    /* ---------- Add Member ---------- */
    const handleAddMember = () => {
        if (!selectedEventId || selectedEventId === 'all') return;
        if (!newMember.name || !newMember.phone) return;

        setParticipantsByEvent(prev => ({
            ...prev,
            [selectedEventId]: [
                ...(prev[selectedEventId] || []),
                {
                    id: Date.now(),
                    name: newMember.name,
                    phone: newMember.phone,
                    role: newMember.role,
                    totalParticipations: 1
                }
            ]
        }));

        setNewMember({ name: '', phone: '', role: 'Participant' });
    };

    return (
        <div className="bg-cream min-h-screen font-display text-charcoal bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            {/* Navigation */}
            <nav className="w-full bg-white/80 backdrop-blur-md border-b-2 border-dashed border-paper-line p-4 h-20 flex justify-between items-center sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-doodle-purple">ADMIN Great Minds Hub</h1>
                <div className="flex gap-8 font-hand text-2xl">
                    <Link to="/adminCalendar">AdminCalendar</Link>
                    <Link to="/adminSchedule">AdminSchedule</Link>
                    <Link to="/adminAttendance" className="text-doodle-purple underline underline-offset-8">
                        AdminAttendance
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Events */}
                <section className="space-y-6">
                    <h2 className="text-4xl font-bold">Events</h2>

                    {/* TOTAL */}
                    <button
                        onClick={() => setSelectedEventId('all')}
                        className={`w-full p-5 rounded-[2.5rem] border-2 border-paper-line bg-doodle-yellow/20 font-bold text-2xl ${
                            selectedEventId === 'all' ? 'ring-4 ring-doodle-yellow/40' : ''
                        }`}
                    >
                        🌟 Total Attendance (All Events)
                    </button>

                    {EVENTS.map(event => (
                        <button
                            key={event.id}
                            onClick={() => setSelectedEventId(event.id)}
                            className={`w-full p-6 rounded-[2.5rem] bg-white border-2 border-paper-line flex gap-6 items-center ${
                                selectedEventId === event.id ? 'ring-4 ring-doodle-yellow/40' : ''
                            }`}
                        >
                            <div className={`h-20 w-20 flex items-center justify-center rounded-2xl border-2 ${event.doodleColor}`}>
                                <span className="text-5xl">{event.emoji}</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">{event.title}</h3>
                                <p className="font-hand text-xl text-charcoal/70">
                                    {event.date} · {event.time}
                                </p>
                            </div>
                        </button>
                    ))}
                </section>

                {/* Attendance */}
                <section className="bg-white rounded-[3rem] border-2 border-paper-line p-8 flex flex-col">
                    <h2 className="text-4xl font-bold mb-4">Attendance</h2>

                    <input
                        placeholder="Search by name or phone"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="mb-4 p-3 border-2 border-paper-line rounded-xl"
                    />

                    {/* Add Member */}
                    {typeof selectedEventId === 'number' && (
                        <div className="mb-6 p-4 rounded-2xl bg-cream-dark border-2 border-paper-line">
                            <h3 className="font-bold text-xl mb-2">➕ Add Member</h3>
                            <div className="flex gap-2">
                                <input
                                    placeholder="Name"
                                    value={newMember.name}
                                    onChange={e => setNewMember({ ...newMember, name: e.target.value })}
                                    className="flex-1 p-2 border rounded"
                                />
                                <input
                                    placeholder="Phone"
                                    value={newMember.phone}
                                    onChange={e => setNewMember({ ...newMember, phone: e.target.value })}
                                    className="flex-1 p-2 border rounded"
                                />
                                <select
                                    value={newMember.role}
                                    onChange={e =>
                                        setNewMember({ ...newMember, role: e.target.value as any })
                                    }
                                    className="p-2 border rounded"
                                >
                                    <option>Participant</option>
                                    <option>Volunteer</option>
                                </select>
                                <button
                                    onClick={handleAddMember}
                                    className="px-4 bg-doodle-purple text-white rounded"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    )}

                    {/* List */}
                    <div className="space-y-4 overflow-y-auto">
                        {filteredParticipants.map(p => (
                            <div
                                key={p.id}
                                className="flex justify-between items-center bg-cream-dark p-4 rounded-2xl border-2 border-paper-line"
                            >
                                <div>
                                    <p className="text-xl font-bold">
                                        {p.name}{' '}
                                        <span className="text-sm font-hand text-charcoal/60">
                                            ({p.role})
                                        </span>
                                    </p>
                                    <p className="font-hand text-charcoal/60">📞 {p.phone}</p>
                                </div>
                                <p className="text-3xl font-bold text-doodle-purple">
                                    {p.totalParticipations}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminAttendance;
