// src/Homebody.jsx
import './homebody.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer'; // Adjust import path as necessary

function Homebody() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/mentor-page');
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container-fluid bg overlay d-flex justify-content-start align-items-center flex-grow-1" style={{ height: '100vh' }}>
                <div className="container-fluid pt-3 text-start">
                    <div className="row">
                        <div className="col-12 cont">
                            <h1>FinanceMentor</h1>
                            <p className="companyDex">Tailored financial advice to help MSMEs make informed choices <br /> on loans, credit cards, and more—powered by advanced AI insights.</p>
                            <button className="mentor-button" onClick={handleButtonClick}><span>AI Finance Mentor <i className="bi bi-robot"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homebody;
