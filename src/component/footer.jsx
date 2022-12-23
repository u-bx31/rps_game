import { useState } from "react";
import MyVerticallyCenteredModal from "./Modal";

const Footer = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="d-flex justify-content-lg-end justify-content-center pt-lg-5">
            <button className="btn btn-outline-light c-btn-rules" onClick={() => setModalShow(true)}>RULES</button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default Footer;