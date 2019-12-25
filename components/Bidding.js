import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLiraSign} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {Button, Fade, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Countdown from "react-countdown-now";

class Bidding extends React.Component {
    render() {
        const horizontalRule = (this.props.loggedIn && this.props.saleOwner) ? <hr/> : "";

        let biddingInput;
        if (this.props.finishedSale || this.props.saleOwner){
            biddingInput = "";
        }else if(!this.props.loggedIn){
            biddingInput =
                <div>
                    <hr/>
                    <h5 className="text-center mb-3">Teklif Ver</h5>
                    <p className="text-center">
                        Teklif vermek için
                        <Link href={'/registration'} >
                            <a className="text-dark underline"> kayıt olun</a>
                        </Link> veya
                        <Link href={'/login'} >
                            <a className="text-dark"> giriş yapın</a>
                        </Link>
                    </p>
                </div>;
        }else if(this.props.maxBidder){
            biddingInput =
                <div>
                    <hr/>
                    <p> Şu anda en yüksek teklif sizin teklifiniz. </p>
                </div>;
        }else{
            biddingInput = <div>
                <hr/>
                <div className="text-center justify-content-md-center">
                    <h5 className="text-center mb-3">Teklif Ver</h5>
                    <Form>
                        <FormGroup>
                            <InputGroup
                                style={{width:'60%', marginLeft:'20%'}} >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>₺</InputGroupText>
                                </InputGroupAddon>
                                <Input className="text-center"
                                       bgSize="sm"
                                       type="number"
                                       form="nanana"
                                       name="bid"

                                       onChange={this.props.handleInputChange}
                                       onKeyDown={this.props.handleKeyDown}
                                       placeholder="Teklifiniz"/>
                            </InputGroup>
                            <Fade in={this.props.biddingFade.in} tag="p" className="mt-3 text-danger">
                                {this.props.biddingFade.message}
                            </Fade>

                        </FormGroup>
                        <Button onClick={this.props.handleNewBid} color="dark">Gönder</Button>
                    </Form>
                </div>
            </div>;
        }

        const biddingInfo = this.props.finishedSale ?
            <p className="text-center mt-3 text-danger">
                Kapandı
            </p>
            :
            <p className="text-center mt-3 text-success">
                <Countdown date={this.props.endDate} />
            </p>;

        return (
            <div>
                <h4  className="text-center">En Yüksek Teklif</h4>
                {horizontalRule}
                <p className="text-center">
                    <FontAwesomeIcon icon={faLiraSign} width="16" /> {this.props.maxBid.amount}
                </p>
                {biddingInput}
                <hr/>
                {biddingInfo}
            </div>
        );
    }
}

export default Bidding;