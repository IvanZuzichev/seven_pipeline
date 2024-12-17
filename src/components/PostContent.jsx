import React, { useState } from 'react'; // Убедитесь, что React и хуки импортированы

export function PostContent() {
  const [userMail, setUser] = useState('');

  return (
    <div>
      <input
        type="text"
        value={userMail}
        onChange={(e) => setUser (e.target.value)}

      />

    </div>
  );
}
