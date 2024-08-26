import React, { useState } from 'react';
import Answer from '../Answer/index';
import styles from './styles.module.css';

// Определяем функцию generateRandomNumber перед её использованием
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const MathQuiz = () => {
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());
  const [score, setScore] = useState(0);

  const updatePoints = (userAnswer) => {
    if (parseInt(userAnswer, 10) === a + b) {
      setScore(score + 1);
    }
    // Обновляем задачу
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div className={styles.divQuiz}>
      <h2 className={styles.h2Quiz}>Math Quiz</h2>
      <p>Сколько будет {a} + {b}?</p>
      <p>Текущий счёт: {score}</p>
      <Answer updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;