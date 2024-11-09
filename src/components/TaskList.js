import React from 'react';
import TaskItem from './TaskItem';
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../store/language';

export default function TaskList({tasks, onUpdate}) {
    console.log(tasks)
    const {language} = useSelector((state) => state.language);
    console.log(language)
    const dispatch = useDispatch();

    const toogleLanguageChange = () => {
      if (language == 'en') {
        dispatch(setLanguage('es'))
      } else {
        dispatch(setLanguage('en'))
      }
    }

    return (
        <div>
          {language == 'en' ? (
            <>
              the current language is {language} but you can change it with 
            </>
          ): (
            <>
              El lenguage actual es {language} pero puedes cambiarlo con
            </>
          )}
          <button onClick={() => toogleLanguageChange()}>change language</button>
          <ul>
            { tasks.map((task, index) => (
                <TaskItem key={index} task={task} onUpdate={onUpdate}/>
              ))
            }
          </ul>
        </div>
    )
}