import logo from '../images/logo.svg';

const Headr = ({score}) => {
    return (
        <>
            <div className="row pb-lg-4 pt-lg-2 my-4 mx-sm-4 mx-1  ">
                <div className="col-lg-7 col-md-8 mx-auto c_headr text-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="c_headr_logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="c_headr_score">
                            <div className="box bg-white text-dark rounded-3 px-3 my-3 c_headr_box">
                                <p className='c_headr_score_text m-0'>score</p>
                                <p className='c_headr_score_number m-0'>{score}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Headr;