import styles from './Comment.module.css';
import perfil from '../assets/perfil.jpg';
import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount ] = useState(0);

    function handleDelete() {
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <img src={perfil} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juliana Castro</strong>
                            <time title='29 de maio às 11:55' dateTime='2023-09-29 00:11:55'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDelete} title='Deletar comentário'>
                           <Trash size={24} color='#fff'/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}