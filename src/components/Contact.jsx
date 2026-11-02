import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="bg-slate-900 px-6 py-6">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-blue-400">Get In Touch</p>

                    <h2 className="text-4xl font-bold text-white md:text-5xl">
                        Contact <span className="text-blue-500">Me</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                        Have a project in mind or want to work together? Feel free to send me a message.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-5">
                    {/* Contact Information */}
                    <div className="space-y-6 lg:col-span-2">
                        <div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Let's Talk</h3>
                            <p className="leading-7 text-slate-400">
                                I'm always interested in new opportunities, creative projects and collaborations.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
                            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <p className="font-medium text-white">your-email@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
                            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Phone</p>
                                <p className="font-medium text-white">Your Phone Number</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950 p-5">
                            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Location</p>
                                <p className="font-medium text-white">Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 shadow-xl lg:col-span-3 md:p-10">
                        <h3 className="mb-7 text-2xl font-bold text-white">Send Me a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Write your message..."
                                    required
                                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold text-white transition hover:opacity-90"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
