import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email_csv', file);
    formData.append('content', content);
    try {
      const response = await axios.post('/api/send-emails/', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to send emails');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit">Send Emails</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FormComponent;