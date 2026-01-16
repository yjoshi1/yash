import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-matte-black transition-colors duration-300">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <section id="home" className="min-h-screen flex flex-col justify-center">
            <Home />
          </section>
          <section id="about" className="py-20">
            <About />
          </section>
          <section id="projects" className="py-20">
            <Projects />
          </section>
        </main>
        <footer className="bg-slate-100 dark:bg-slate-950 py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Yash Joshi. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
