import React, { useState } from 'react'; // Убедитесь, что React и хуки импортированы

export function ChangeContent() {
  const [newPassword, setNewPassword] = useState('');

  return (
    <div>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
    </div>
  );
}