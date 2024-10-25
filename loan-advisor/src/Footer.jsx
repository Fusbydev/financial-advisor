import './footer.css'

function Footer() {
    return(
        <div className="container-fluid p-4" style={{backgroundColor: 'red'}}>
            <div className="row text-center">
                <div className="col-md-3">
                    <h1 className='text-white'>FinanceMentor</h1>
                </div>
                <div className="col-md-5">
                    <h1 className='text-white'>Hit us up</h1>
                </div>
                <div className="col-md-4">
                    <h1 className='text-white'>est. 2024</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer