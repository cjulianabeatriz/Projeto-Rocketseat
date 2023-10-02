import styles from './Post.module.css';
import perfil from '../assets/perfil.jpg';
import { Comment } from './Comment';

export function Post({ author, publishedAt, content }) {

    const publishedDate = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

    const comments = [
        1,
        2,
    ];

    function handleCreateNewComment(){
        event.preventDefault()
        comments.push(3)
        console.log(comments)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='29 de maio às 11:55' dateTime='2023-09-29 00:11:55'>{publishedDate}</time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comment}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Escreva seu comentário...'
                />
                <button type='submit'>Comentar</button>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>

        </article>
    )

}