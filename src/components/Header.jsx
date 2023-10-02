import styles from './Header.module.css'
import logo from '../assets/logo.png'

export function Header() {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Ignite Logotipo" />
        </div>
        
    );
}