import LogoTodoList from '../assets/Logo-todo-list.svg'

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={LogoTodoList} alt="Logo todo-list" />
        </header>
    )
}