import { NextPage } from 'next';
import ScrollBackground from './components/ScrollBackground/ScrollBackground';
import TypingEffect from './components/Typing/Typing';
import styles from '@/app/page.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.backgroundContainer}>
            <ScrollBackground />
            <div className={styles.textOverlay}>
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
        </div>
    );
};

export default Home;