import styles from './Comment.module.css';
import perfil from '../assets/perfil.jpg';
import trash from '../assets/lixeira.png';
import aplaudir from '../assets/aplaudir.png';
import { Avatar } from './Avatar';

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <img src={perfil} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.name}</strong>
                            <time title='29 de maio às 11:55' dateTime='2023-09-29 00:11:55'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                           <img src={trash} />
                        </button>
                    </header>
                    <p>{props.comment}</p>
                </div>
                <footer>
                    <button>
                        <Avatar src={aplaudir} />
                        <span>{props.number}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}