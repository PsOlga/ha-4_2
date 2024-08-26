import React, { useState } from 'react';
import styles from './styles.module.css';

const Answer = ({ updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoints(userAnswer);
    setUserAnswer(''); // Очищаем поле после отправки
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formQuiz}>
      <label className={styles.labelQuiz}>
        Ваш ответ:
        <input 
        className={styles.inpQuiz}
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          required
        />
      </label>
      <button type="submit" className={styles.btnQuiz}>Отправить</button>
    </form>
  );
};

export default Answer;