import './footer.css'

function Footer() {
    return(
        <div className="container-fluid p-3" style={{backgroundColor: 'red'}}>
            <div className="row text-center">
                <div className="col-md-3 d-flex gap-3 align-items-center text-center">
                    <p className='text-white fs-5'><i className="bi bi-facebook"></i> Facebook</p>
                    <p className='text-white fs-5'><i className="bi bi-twitter"></i> Twitter</p>
                    <p className='text-white fs-5'><i className="bi bi-instagram"></i> Instagram</p>
                </div>
                <div className="col-md-5 align-items-center">
                    <p className='text-white'>© Financial Advisor</p>
                </div>
                <div className="col-md-4">
                    <p className='text-white'><i className="bi bi-envelope-fill"></i> Connect with us!</p>
                </div>
            </div>
        </div>
    )
}

export default Footer