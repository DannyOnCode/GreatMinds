import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // This is where you'd usually check a database.
        // For now, we just "pretend" and go to the dashboard!
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-cream font-display flex items-center justify-center p-4 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
            <div className="w-full max-w-md bg-white border-4 border-charcoal rounded-[2rem] p-8 shadow-doodle rotate-1">

                <div className="text-center mb-8">
                    <div className="inline-block bg-doodle-purple p-3 rounded-2xl rotate-12 mb-4">
                        <span className="material-symbols-outlined text-white text-4xl">lock</span>
                    </div>
                    <h1 className="text-4xl font-bold text-charcoal">Great Minds</h1>
                    <p className="font-hand text-2xl text-charcoal/60">Welcome back, neighbor!</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block font-hand text-2xl mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full border-2 border-paper-line rounded-xl p-3 focus:border-doodle-purple outline-none transition-all"
                            placeholder="hello@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-hand text-2xl mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full border-2 border-paper-line rounded-xl p-3 focus:border-doodle-purple outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-doodle-teal text-white font-bold py-4 rounded-xl shadow-doodle hover:translate-y-1 hover:shadow-none transition-all text-xl"
                    >
                        Enter the Hub
                    </button>
                </form>

                <p className="text-center mt-8 font-hand text-xl text-charcoal/50">
                    Don't have an account? <span className="text-doodle-purple underline cursor-pointer">Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;