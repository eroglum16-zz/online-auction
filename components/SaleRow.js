import React from "react";
import Link from "next/link";

class SaleRow extends React.Component{
    render() {
        return (
            <Link href={'/'+ this.props.type +'/[id]'} as={'/' + this.props.type + '/' + this.props.id} >
                <a style={{color: 'inherit'}}>
                    <div className="row p-3 m-4" style={{boxShadow: '2px 1px 3px 2px #ccc', minHeight: '100%',
                        display: 'flex',
                        alignItems: 'center'}}>
                        <div className="col-md-3" style={{
                            maxHeight: '220px', overflow: 'hidden',

                        }}>
                            <img src={this.props.image} width="100%"  />
                        </div>
                        <div className="col-md-9 pt-3" >
                            <h4 >{this.props.name}</h4>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        );
    }
}

export default SaleRow;