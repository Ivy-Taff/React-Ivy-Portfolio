import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.keys(errors).length === 0) {
      alert('Form submitted');
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span>{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
