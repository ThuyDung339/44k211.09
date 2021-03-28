import React from 'react'

export default function ForgotPassword() {
    const alerts = () => {
        alert('Password is sent to your email');
    }
    return (
        <div className="form-auth">
        <form>
            <h1>Write your email</h1>
            <input/>
            <button onClick={alerts}>Reset Password</button>
        </form>
        </div>)
}
