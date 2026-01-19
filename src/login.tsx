import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    // 1. We need state to track the email for the Standard/Admin side
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // 2. The new "Smart" Login function
    const handleLogin = async (
        e: React.FormEvent,
        type: "user" | "staff"
    ) => {
        e.preventDefault();

        // const url =
        //     type === "user"
        //         ? "http://localhost:3001/login/user"
        //         : "http://localhost:3001/login/staff";
        //
        // const body =
        //     type === "user"
        //         ? { phone: phone }
        //         : { email: email, password: password };
        //
        // try {
        //     const res = await fetch(url, {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(body),
        //     });
        //
        //     const data = await res.json();
        //
        //     if (!res.ok) {
        //         setError(data.error || "Login failed");
        //         return;
        //     }
        //
        //     if (type == "staff") {
        //         navigate("/adminCalender");
        //     } else if (type == "user") {
        //         navigate("/calendar");
        //     }
        //
        //
        // } catch {
        //     setError("Server not reachable");
        //
        // }
        if (type == "staff") {
            navigate("/adminCalender");
        } else if (type == "user") {
            navigate("/calendar");
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

                        <form onSubmit={(e) => handleLogin(e, 'user')} className="space-y-6">
                            <div>
                                <label className="block text-xl font-hand mb-2 text-doodle-purple">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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

                        <form onSubmit={(e) => handleLogin(e, 'staff')} className="space-y-6">
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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