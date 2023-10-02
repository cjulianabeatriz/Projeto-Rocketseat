import styles from './Sidebar.module.css';
import perfil from '../assets/perfil.jpg'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.avatar} src={perfil} />

            <div className={styles.profile}>
                <strong>Juliana Castro</strong>
                <span>UI Designer/Front-end</span>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}