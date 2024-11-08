import Image from 'next/image';
import styles from './ScrollBackground.module.css';

const ScrollBackground: React.FC = () => {
    return (
        <div className={styles.scrollContainer}>
            <div className={styles.scrollImageWrapper}>
                <Image
                    src='/images/scroll.webp'
                    alt="Scroll Background"
                    fill={true}
                    object-fit="cover"
                    className={styles.scrollImage}
                />
            </div>
        </div>
    );
};

export default ScrollBackground;
