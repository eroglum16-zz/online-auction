import {Button} from "reactstrap";
import Link from "next/link";

class SaleRow extends React.Component{
    render() {
        return (
            <Link href={'/'+ this.props.type +'/[id]'} as={'/'+ this.props.type +'/1'} >
                <a style={{color: 'inherit'}}>
                    <div className="row p-3 m-4" style={{boxShadow: '2px 1px 3px 2px #ccc'}}>
                        <div className="col-md-3" style={{maxHeight: '220px', overflow: 'hidden'}}>
                            <img src={this.props.image} width="100%"  />
                        </div>
                        <div className="col-md-9 " style={{paddingTop:'75px'}}>
                            <h4 >{this.props.name}</h4>
                            <p>{this.props.description}</p>

                        </div>
                    </div>
                </a>
            </Link>
        );
    }
}

export default SaleRow;