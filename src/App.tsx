import styles from './App.module.css';
import { Header } from './components/Header';

import './global.module.css'
import { Board } from './components/Board';


function App() {

    return (
        <>
            <main className={styles.container}>
                <Header />
                <div className={styles.wrapper}>
                    <div className={styles.contentCenter}>
                        <Board />
                    </div>
                </div>          
            </main>
        </>
    )
}

export default App
