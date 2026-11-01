import Navbar from './components/Navbar';

function App() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />

            <main id="home" className="flex min-h-screen items-center justify-center px-6 pt-24">
                <div className="text-center">
                    <p className="mb-4 font-semibold tracking-widest text-blue-400">WELCOME TO MY PORTFOLIO</p>

                    <h1 className="text-4xl font-bold text-white md:text-7xl">
                        Hello, I'm a <span className="text-blue-500">Developer</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-slate-400">
                        I build modern, responsive and professional websites.
                    </p>

                    <a
                        href="#projects"
                        className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                        View My Work
                    </a>
                </div>
            </main>
        </div>
    );
}

export default App;
