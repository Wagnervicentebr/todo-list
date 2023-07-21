import { PlusCircle } from 'phosphor-react';

import styles from './CadastroTarefas.module.css';
import { v4 as guid } from 'uuid';

import { ChangeEvent, useState } from 'react';

interface CadastroTarefasProps {
    addNewTask: (task: Task) => void
}

export interface Task {
    id: string,
    content: string,
    checked: boolean
}

export function CadastroTarefas({ addNewTask }: CadastroTarefasProps) {

    const [newTask, setNewTask] = useState("")

    function handdleNewTask() {

        const newTaskCreated: Task = {
            id: guid(),
            content: newTask,
            checked: false
        }

        setNewTask("");
        addNewTask(newTaskCreated)
    }

    function handdleChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    const isInputTaskEmpty = newTask.length === 0;
    
    return (
        <div className={styles.formGroup}>
            <div>
                <input 
                    type="text" 
                    className={styles.input} 
                    placeholder='Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handdleChangeContent}
                    required
                />
            </div>
            <div>
                <button 
                    className={styles.button}
                    disabled={isInputTaskEmpty}
                    onClick={handdleNewTask}
                >
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </div>
        </div>
    )
}