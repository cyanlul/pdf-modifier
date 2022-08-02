import '../Styles/Select.css';
import { Row, Col } from 'react-bootstrap';

export default function Select() {
    return (
        <div className="select-content">
            <h1 className="select-h1">To generate the desired PDF, navigate to the corresponding document type and hit create</h1>
            <br />
            <div className="select-img">
                <Row md={4}>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <img className="image" src={require('../images/certificate_img.jpg')} alt="a certificate"></img>
                                <h2 className="card-title">Certificate</h2>
                                <p className="card-description">Create a simple certificate and fill out the necessary fields for generation.</p>
                                <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier/certificate"}>Create</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <img className="image" src={require('../images/ticket_img.jpg')} alt="a ticket"></img>
                                <h2 className="card-title">Ticket</h2>
                                <p className="card-description">Create a simple ticket and fill out the necessary fields for generation.</p>
                                <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier"}>Create</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <img className="image" src={require('../images/invitation_img.jpg')} alt="a concert"></img>
                                <h2 className="card-title">Invitation</h2>
                                <p className="card-description">Create a simple event invitation and fill out the necessary fields for generation.</p>
                                <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier"}>Create</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <img className="image" src={require('../images/diploma_img.jpg')} alt="a diploma"></img>
                                <h2 className="card-title">Diploma</h2>
                                <p className="card-description">Create a diploma and fill out the necessary fields for generation.</p>
                                <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier"}>Create</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="second-row">
                    <Row md={4}>
                        <Col>
                            <div className="card">
                                <div className="card-body">
                                    <img className="image" src={require('../images/brochure_img.jpg')} alt="a brochure"></img>
                                    <h2 className="card-title">Brochure</h2>
                                    <p className="card-description">Create a brochure and fill out the necessary fields for generation.</p>
                                    <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier/certificate"}>Create</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-body">
                                    <img className="image" src={require('../images/receipt_img.jpg')} alt="a receipt"></img>
                                    <h2 className="card-title">Receipt</h2>
                                    <p className="card-description">Create a receipt and fill out the necessary fields for generation.</p>
                                    <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier"}>Create</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-body">
                                    <img className="image" src={require('../images/placeholder_img.jpg')} alt="a placeholder"></img>
                                    <h2 className="card-title">Placeholder</h2>
                                    <p className="card-description">This is a palceholder for future templates.</p>
                                    <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier"}>Create</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card">
                                <div className="card-body">
                                    <img className="image" src={require('../images/placeholder_img.jpg')} alt="a placeholder"></img>
                                    <h2 className="card-title">Placeholder</h2>
                                    <p className="card-description">This is a palceholder for future templates.</p>
                                    <div className="card-btn" onClick={e => window.location.href = "/pdf-modifier"}>Create</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
