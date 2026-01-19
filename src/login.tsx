import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    // 1. We need state to track the email for the Standard/Admin side
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // 2. The new "Smart" Login function
    const handleLogin = (e: React.FormEvent, type: 'elderly' | 'standard') => {
        e.preventDefault();

        if (type === 'standard' && email === 'admin@seniorlife.com') {
            // Send to Editorial/Admin Page
            navigate('/AdminCalendar');
        } else {
            // Everyone else goes to the normal Hub
            navigate('/Calendar');
        }
    };

    return (
        <div className="min-h-screen bg-cream font-display flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                {/* LEFT SIDE: ELDERLY LOGIN */}
                <div className="bg-white border-4 border-doodle-purple rounded-[3rem] p-10 shadow-doodle flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-charcoal mb-4">Quick Login 👴</h2>
                        <p className="text-xl font-hand text-charcoal/70 mb-8">Enter your phone number to start!</p>

                        <form onSubmit={(e) => handleLogin(e, 'elderly')} className="space-y-6">
                            <div>
                                <label className="block text-xl font-hand mb-2 text-doodle-purple">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full border-4 border-paper-line rounded-2xl p-4 text-xl focus:border-doodle-purple outline-none"
                                    placeholder="012 345 6789"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-doodle-purple text-white font-bold font-hand py-4 rounded-2xl shadow-doodle hover:translate-y-1 transition-all text-xl"
                            >
                                Log Me In! 👋
                            </button>
                        </form>
                    </div>
                </div>

                {/* RIGHT SIDE: STANDARD/ADMIN LOGIN */}
                <div className="bg-white/60 backdrop-blur-sm border-4 border-charcoal border-dashed rounded-[3rem] p-10 shadow-doodle flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-charcoal mb-4">Staff Login 🔑</h2>
                        <p className="text-xl font-hand text-charcoal/60 mb-8">For volunteers and administrators.</p>

                        <form onSubmit={(e) => handleLogin(e, 'standard')} className="space-y-6">
                            <div>
                                <label className="block text-xl font-hand mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border-2 border-paper-line rounded-xl p-3 text-xl focus:border-doodle-teal outline-none"
                                    placeholder="admin@seniorlife.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xl font-hand mb-2">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full border-2 border-paper-line rounded-xl p-3 text-xl focus:border-doodle-teal outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-doodle-teal text-white font-bold font-hand py-4 rounded-xl shadow-doodle hover:translate-y-1 transition-all text-xl"
                            >
                                Enter Staff Portal
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;