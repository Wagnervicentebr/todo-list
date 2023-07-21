import { useState } from 'react'
import styles from './Board.module.css'
import { v4 as guid } from 'uuid';

import ClipBoard from '../assets/Clipboard.svg'

import { Card } from './Card'
import { CadastroTarefas, Task } from './CadastroTarefas';

export function Board() {

    const [countTaskDone, setCountTaskDone] = useState(0);

    const [task, setListTask] = useState([
        {
            id: guid(),
            content: "Beber 5L d'agua",
            checked: false
        }
    ])

    function handdleChangeChecked(id: string) {
        let countTaskDone = 0;

        const listTaskChanged = task.map(item => {
            if (item.id === id) item.checked = !item.checked;
            if (item.checked === true) countTaskDone++;

            return item;
        }) 

        setCountTaskDone(countTaskDone)
        setListTask(listTaskChanged);
    }

    function handdleNewTask(newTask: Task) {
        setListTask([...task, newTask])
    }

    function handdleDeleteTask(id: string) {
        
        const listTaskWithouOne = task.filter(task => {
            return task.id !== id;
        })

        setListTask(listTaskWithouOne);
    }

    return (
        <>
            <div className={styles.contentCenter}>
                <CadastroTarefas addNewTask={handdleNewTask} />
            </div>

            <header className={styles.header}>
                <div className={styles.taskCreated}>
                    <strong>Tarefas criadas</strong>
                    <button>{task.length}</button>
                </div>

                <div className={styles.taskFineshed}>
                    <strong>Concluidas</strong>
                    <button>{countTaskDone} de {task.length}</button>
                </div>

                
            </header>
            <div className={styles.listTasks}>

                {task.length === 0 ? 
                    <div className={styles.noTasks}>
                        <div>
                            <img src={ClipBoard} />
                        </div>
                        <div>
                            <strong>Você ainda não tem tarefas cadastradas</strong><br />
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div> 
                : 
                    <div className={styles.listTasks}>
                        {task.map(task => {
                            return (
                                <Card 
                                    key={task.id} 
                                    id={task.id}
                                    content={task.content} 
                                    checked={task.checked}
                                    onChangeChecked={handdleChangeChecked}
                                    onDeleteTask={handdleDeleteTask}
                                />
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}