import React, { useState } from 'react'; // Убедитесь, что React и хуки импортированы

export function AuthContent() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
    </div>
  );
}