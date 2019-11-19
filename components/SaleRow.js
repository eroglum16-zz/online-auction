import {Button} from "reactstrap";
import Link from "next/link";

class SaleRow extends React.Component{
    render() {
        return (
            <div className="row p-3 m-4" style={{boxShadow: '2px 1px 3px 2px #ccc'}}>
                <div className="col-3">
                    <img src={this.props.image} width="100%" />
                </div>
                <div className="col-7 " style={{paddingTop:'75px'}}>
                    <h4 >{this.props.name}</h4>
                    <p>{this.props.description}</p>
                </div>
                <div className="col-2 justify-content-md-center" style={{paddingTop:'100px'}}>
                    <Link href={'/'+ this.props.type +'/[id]'} as={'/'+ this.props.type +'/1'} >
                        <a className="btn btn-dark btn-lg text-white">İncele</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default SaleRow;