import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap"

class MaintenancePage extends React.Component {
    render(){
        return(
            <div className="container" 
                     style={{ padding:'3%', marginTop:'3%', minHeight:'500px' }}>
                         
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>        
                                
                            <h1 style={{ 
                                    fontFamily: 'Georgia',
                                    marginBottom: '20px',
                                    marginTop: '30px', 
                                    color: '#3f3f3f' }}
                                className="text-center">
                                <span style={{ color: '#d15a7c' }}> İkincilt </span> kısa süreliğine bakımda!
                            </h1>

                            <img src="https://res.cloudinary.com/hmpzieard/image/upload/v1585161342/maintenance-concept-illustration_114360-391_gwwcnf.jpg"
                            width="100%" />
                            
                        </Col>
                    </Row>
                </div>
        );
    }
}

export default MaintenancePage;