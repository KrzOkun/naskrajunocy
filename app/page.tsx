import { NextPage } from 'next';
import ScrollBackground from './components/ScrollBackground/ScrollBackground';
import TypingEffect from './components/Typing/Typing';

const Home: NextPage = () => {
    return (
        <div>
            <ScrollBackground />
            <TypingEffect
                    sentences={[
                        `Witaj w naszej aplikacji!
                        Sprawdź nasze funkcje.`,
                    ]}
                    typeSpeed={60}
                    backSpeed={30}
                    loop={false}
                />
        </div>
    );
};

export default Home;