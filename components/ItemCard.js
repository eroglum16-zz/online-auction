import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
const apiConfig = require('../api-config');

class ItemCard extends React.Component{
    render() {
        return (
            <div className="col-md-3 mb-5">
                        <Card style={{boxShadow: '0px 10px 5px 0px #ccc'}}>
                            <Link href={'/a/[id]'} as={`/a/` + this.props.sale._id} >
                                <a style={{color:'inherit', textDecoration:'none'}}>
                                    <CardImg top width="100%"
                                             src={apiConfig.serverUrl + '/images/products/' + this.props.sale.images[0]}
                                             alt="Card image cap" />
                                </a>
                            </Link>
                            <CardBody>
                                <Link href={'/a/[id]'} as={`/a/` + this.props.sale._id} >
                                    <a style={{color:'inherit', textDecoration:'none'}}>
                                        <CardTitle style={{fontWeight:'bold'}}> {this.props.sale.title} </CardTitle>
                                    </a>
                                </Link>
                                <CardSubtitle style={{fontSize:'14px'}} className="text-muted"> {this.props.sale.owner.nameSurname} </CardSubtitle>
                                <hr/>
                                <span style={{fontSize:'16px'}}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} width="16" /> {this.props.sale.city}, {this.props.sale.district}
                                </span>
                                <style jsx>{`
                    h1,
                    a {
                      font-family: 'Arial';
                    }
                    
                    ul {
                      padding: 0;
                    }
            
                    li {
                      list-style: none;
                      margin: 5px 0;
                    }
            
                    a {
                      text-decoration: none;
                      color: #333;
                    }
          
                  `}</style>
                            </CardBody>
                        </Card>
            </div>
        );
    }
}

export default ItemCard;