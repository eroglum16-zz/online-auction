import React from 'react';
import LazyLoad from 'react-lazyload';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Badge} from "reactstrap";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
const apiConfig = require('../api-config');

class ItemCard extends React.Component{
    render() {
        let expiredSale = this.props.sale.endDate <= Date.now();
        return (
            <div className="col-md-3 mb-5">
                        <Card  style={{boxShadow: '0px 10px 5px 0px #ccc'}}>
                            <Link href={'/a/[id]'} as={`/a/` + this.props.sale._id} >
                                <a style={{color:'inherit', textDecoration:'none'}}>
                                    <div style={{height: '200px', overflow:'hidden', display: 'flex',
                                        alignItems: 'center'}}>
                                        <LazyLoad height={200}>
                                            <CardImg top style={{maxWidth: '100%'}}
                                                     src={apiConfig.serverUrl + '/images/products/' + this.props.sale.images[0]}
                                                     alt={this.props.sale.title} />
                                        </LazyLoad>
                                    </div>
                                </a>
                            </Link>
                            <CardBody>
                                <Link href={'/a/[id]'} as={`/a/` + this.props.sale._id} >
                                    <a style={{color:'inherit', textDecoration:'none'}}>
                                        <CardTitle style={{fontWeight:'bold'}}>
                                            {this.props.sale.title}
                                            <div className="float-right">
                                            {expiredSale ?
                                                <Badge color="danger" pill>Kapandı</Badge>
                                                :
                                                <Badge color="success" pill>Aktif</Badge>
                                            }
                                            </div>
                                        </CardTitle>
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