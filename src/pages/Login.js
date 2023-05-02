import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

import '../styles/pages/Login.css';
import '../styles/utils.css';

import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
export default function Login() {
    const { dispatch } = useContext(AuthContext);
    const { error, login } = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className='form-container'>
            <div className='form'>
                <div className='form-title'>Sign In To Existing Account</div>
                <div className='form-field'>
                    <label>e-mail</label>
                    <input
                        required
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='form-field'>
                    <label>password</label>
                    <input
                        required
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button
                        text='Log In'
                        btnFunction={handleSubmit}
                        btnClass='form'
                    />
                    {error && <p className='error'>{error}</p>}
                    <div className='signup-container'>
                        <div>
                            Don't have an account?{' '}
                            <p
                                onClick={() => {
                                    navigate('/signup');
                                    dispatch({ type: 'TOGGLE_FORM' });
                                }}
                            >
                                Sign up
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
