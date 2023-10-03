import styles from './Post.module.css';
import perfil from '../assets/perfil.jpg';
import { Comment } from './Comment';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const publishedDate = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

    const [comments, setComments] = useState(['Post'])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid (event) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment (commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p key={item.content}><a href="#">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comment}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    name='input'
                    value={newCommentText}
                    placeholder='Escreva seu comentário...'
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}/>
                })}
            </div>

        </article>
    )

}