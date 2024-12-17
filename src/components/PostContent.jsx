import React, { useState } from 'react'; // Импортируем React и useState
import { useNavigate } from 'react-router-dom'; 
import './Post.css'; 

export function PostContent() {
  const navigate = useNavigate();

  // Объявляем состояния для email и ошибок
  const [userMail, setUser] = useState(''); // Исправлено имя функции
  const [emailError, setEmailError] = useState(false); // Для хранения ошибки почты

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));
    setUser (email); // Обновляем состояние userMail
  };

  const handleChange = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/sendPin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMail }), // Используем userMail
      });

      if (response.ok) {
        navigate('/Change');
      } else {
        alert(`Неверная почта.`);
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
    }
  };

  return (
    <div className="post-container">
      <h1 className="post-title">Введите почту для отправки кода</h1>
      <div className="post-form">
        <input
          type="text"
          placeholder="Почта"
          className={`post-input ${emailError ? 'border-red-500 border-[2px]' : ''}`}
          value={userMail} // Привязываем значение к состоянию
          onChange={handleEmailChange} // Обработчик изменения
        />
        <button onClick={handleChange} className="post-button">Отправить код</button>
      </div>
    </div>
  );
}
