// Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
    // Simulated fetched user details
    const [user, setUser ] = useState({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
    });

    // const [formData, setFormData] = useState({ ...user });

    // useEffect(() => {
    //     // Simulate fetching user details from an API
    //     // In a real application, you would fetch data from an API
    //     setFormData(user);
    // }, [user]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Logic to update user profile
    //     console.log('Updated Profile:', formData);
    //     // Here you would typically send the updated data to your API
    // };

    return (
        <div className="profile-container">
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="update-button">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;