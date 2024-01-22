import styles from './Button.module.scss';

export default function Button({ large, alternative, children }) {
  return (
    <a href="/" className={`${styles.button} ${large && styles.large} ${alternative && styles.alternative}`}><div>{children}</div></a>
  )
}