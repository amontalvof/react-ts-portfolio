import NavBar from './components/NavBar';
import Hello from './views/Hello';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Experience from './views/Experience';
import Education from './views/Education';
import './App.css';
import Contact from './views/Contact';

function App() {
    return (
        <>
            <NavBar />
            <main>
                <Hello />
                <Projects />
                <Skills />
                <Experience />
                <Education />
                <Contact />
            </main>
        </>
    );
}

export default App;
