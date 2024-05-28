import NavBar from './components/NavBar';
import Hello from './views/Hello';
import './App.css';
import { StyledSection } from './components/GlobalStyledComponents';
import BackgroundAnimation from './assets/icons/BackgroundAnimation';
import useMediaQuery from './hooks/useMediaQuery';
import RenderIf from './components/RenderIf';
import Projects from './views/Projects';

function App() {
    const isLarge = useMediaQuery('(min-width: 769px)');
    return (
        <>
            <NavBar />
            <main>
                <StyledSection grid>
                    <Hello />
                    <RenderIf isTrue={isLarge}>
                        <BackgroundAnimation />
                    </RenderIf>
                </StyledSection>
                <Projects />
            </main>
        </>
    );
}

export default App;
