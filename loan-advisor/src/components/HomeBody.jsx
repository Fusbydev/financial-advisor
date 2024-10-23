import './homebody.css'
function Homebody() {
    return(
        <div className="container-fluid bg overlay d-flex justify-content-start align-items-center" style={{ height: '100vh' }}>
    <div className="container-fluid pt-3 text-start">
        <div className="row">
            <div className="col-12 cont">
                <h1>FinanceMentor</h1>
                <p>Tailored financial advice to help MSMEs make informed choices <br /> on loans, credit cards, and more—powered by advanced AI insights.</p>
                <button className='mentor-button'><span>AI Finance Mentor</span></button>
            </div>
        </div>
    </div>
</div>

    )
}

export default Homebody