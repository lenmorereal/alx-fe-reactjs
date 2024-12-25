import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }
    setError('');
    console.log('Form Submitted:', formData);
    // Simulate API submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="username" className="block">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label htmlFor="password" className="block">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
}

export default RegistrationForm;
