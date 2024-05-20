import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';
//https://formspree.io/f/mnqelwkr
//https://formspree.io/f/mgegrdjy
const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        text: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mnqelwkr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                alert('Please enter valid details');
            }else{
            alert('Thank you for reaching out to us!');
            navigate('/');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error gracefully, e.g., show an error message to the user
        }
    };

    return (
        <div style={{ border: '2px solid grey', boxShadow: '1px 1px 10px gray' }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input
                        name='name'
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput2">Phone</label>
                    <input
                        name='phone'
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Enter contact number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput3">Email</label>
                    <input
                        name='email'
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput3"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" style={{ fontWeight: '500' }}>
                        Send us a message
                    </label>
                    <textarea
                        name='text'
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={formData.text}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Form;
