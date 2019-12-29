import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SaleRow from "../components/SaleRow";
import {Alert, Badge} from "reactstrap";
import {auth, getUser} from "../utils/auth"
import axios from "axios";
import React from "react";
import Link from "next/link";

const apiConfig = require('../api-config');

class Purchases extends React.Component{
    constructor(props) {
        super(props);
        let token = this.props.token;
        this.state = {
            loggedIn: !!token,
            user: {},
            purchases: []
        };
    }
    componentDidMount() {
        getUser(this.props.token).then(user => {
            this.setState({
                user: user
            });
            this.getExpiredPurchases(user.email);
        });
    }
    getExpiredPurchases(userEmail){
        const url = apiConfig.serverUrl + '/purchases/expired/' + userEmail;
        axios.get(url)
            .then((response) => {
                this.setState({
                    purchases: response.data.sales,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        let saleRows;
        if (this.state.purchases.length === 0){
            saleRows =
                <Alert className="mt-3" color="info">
                    Henüz ürün satın almadınız. Alışverişe
                    <Link href='/index' >
                        <a style={{color: 'inherit'}}> hemen başlayın. </a>
                    </Link>
                </Alert>
        }else{
            saleRows = this.state.purchases.map((purchase) =>
                <SaleRow image={apiConfig.serverUrl + '/images/products/' + purchase.images[0]}
                         type="p"
                         name={purchase.title}
                         id={purchase._id}
                         description={purchase.description} />
            );
        }
        return (
            <Layout page="me" user={this.state.user} loggedIn={this.state.loggedIn}>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%', minHeight: '500px'}}>
                    <h2> Aldığınız Ürünler
                        <Badge className="ml-2" color="dark" pill>
                            {this.state.purchases.length}
                        </Badge>
                    </h2>
                    <hr/>
                    {saleRows}
                </div>
            </Layout>
        );
    }
}

Purchases.getInitialProps = async ctx => {
    // Check user's session
    const token = auth(ctx);

    return { token }
};

export default Purchases;