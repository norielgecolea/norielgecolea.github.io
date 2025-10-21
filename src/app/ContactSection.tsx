"use client";

import { useState } from "react";
import Alert from "./alert";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "1fc4e8af-b7fb-4bd9-95c6-5bac74d5e7b0",
                    ...form,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setAlert({ message: "Message sent! Thank you for reaching out ✨", type: "success" });
                setForm({ name: "", email: "", message: "" });
            } else {
                setAlert({ message: "Something went wrong. Please try again.", type: "error" });
            }
        } catch {
            setAlert({ message: "Failed to send message. Please check your connection.", type: "error" });
        }
    };

    return (
        <section

            className="relative py-5"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent"></div>
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
                    Let’s Connect
                </h2>
                <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                    Have a project in mind, or just want to say hi? Feel free to drop me a message —
                    I’d love to collaborate or help bring your ideas to life.
                </p>

                <form
                    onSubmit={handleSubmit}

                    className="max-w-2xl mx-auto text-left bg-white/5 p-8 rounded-2xl shadow-lg border border-green-700/30"
                >


                    {/* Name */}
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-green-400 mb-2"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-green-700/30 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-green-400 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-green-700/30 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-green-400 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-green-700/30 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                            placeholder="Write your message here..."
                        />
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="submitbut px-8 py-3 rounded-lg bg-green-500/20 border border-green-500 text-green-400 font-medium hover:bg-green-500/30 hover:text-green-300 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                        >
                            Send Message

                        </button>
                    </div>
                </form>
                {alert && <Alert message={alert.message} type={alert.type} />}
                {/* Decorative Glow */}
                <div className="absolute inset-x-0 -bottom-5 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent"></div>
            </div>
        </section>
    );
}
