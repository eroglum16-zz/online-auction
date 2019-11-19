import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

class ItemCard extends React.Component{
    render() {
        let itemName = this.props.name;
        let itemDescription = this.props.description;

        return (
            <div className="col-md-3 mb-5">
                        <Card style={{boxShadow: '0px 10px 5px 0px #ccc'}}>
                            <Link href={'/a/[id]'} as={`/a/1`} >
                                <a style={{color:'inherit', textDecoration:'none'}}>
                                    <CardImg top width="100%"
                                             src={this.props.image}
                                             alt="Card image cap" />
                                </a>
                            </Link>
                            <CardBody>
                                <Link href={'/a/[id]'} as={`/a/1`} >
                                    <a style={{color:'inherit', textDecoration:'none'}}>
                                        <CardTitle style={{fontWeight:'bold'}}> {itemName} </CardTitle>
                                    </a>
                                </Link>
                                <CardSubtitle style={{fontSize:'14px'}} className="text-muted"> Mert Eroğlu </CardSubtitle>
                                <hr/>
                                <span style={{fontSize:'16px'}}> <FontAwesomeIcon icon={faMapMarkerAlt} width="16" /> İstanbul, Sarıyer</span>
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