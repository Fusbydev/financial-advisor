import Chatbox from "./Chatbox";
import Footer from "../Footer";
import './mentorpage.css';

function Mentor() {
    return (
        <div className="d-flex flex-column vh-100 mentor-container">
            <div className="flex-grow-1 d-flex justify-content-center align-items-center mt-5">
                <Chatbox />
            </div>
            <Footer />
        </div>
    );
}

export default Mentor;
