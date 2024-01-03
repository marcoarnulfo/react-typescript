import './Error.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    // Redirect to home after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
            console.log('Redirecting to home')
        }, 10000); // = 10 seconds

        return () => clearTimeout(timer); // Cleanup on dismount
    }, [navigate]);




    return (
        <div className='error_container'>
            <img
            className="error_img"
            src="/src/assets/img/404_error.jpg" alt="" />
        </div>
    )
}
