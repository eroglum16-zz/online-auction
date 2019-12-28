import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SaleRow from "../components/SaleRow";
import {Badge} from "reactstrap";
import {auth, getUser} from "../utils/auth";
import axios from "axios";
import React from "react";

const apiConfig = require('../api-config');

class Sales extends React.Component{
    constructor(props) {
        super(props);
        let token = this.props.token;
        this.state = {
            loggedIn: !!token,
            user: {},
            sales: []
        };
    }
    componentDidMount() {
        getUser(this.props.token).then(user => {
            this.setState({
                user: user
            });
            this.getExpiredSales(user.email);
        });
    }
    getExpiredSales(userEmail){
        const url = apiConfig.serverUrl + '/sales/expired/' + userEmail;
        axios.get(url)
            .then((response) => {
                this.setState({
                    sales: response.data.sales,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const saleRows = this.state.sales.map((sale) =>
            <SaleRow image={apiConfig.serverUrl + '/images/products/' + sale.images[0]}
                     type="s"
                     name={sale.title}
                     id={sale._id}
                     description={sale.description} />
        );
        return (
            <Layout page="me" user={this.state.user} loggedIn={this.state.loggedIn}>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <h2> Sattığınız Ürünler
                        <Badge className="ml-2" color="dark" pill>
                            {this.state.sales.length}
                        </Badge>
                    </h2>
                    <hr/>
                    {saleRows}
                </div>
            </Layout>
        );
    }
}

Sales.getInitialProps = async ctx => {
    // Check user's session
    const token = auth(ctx);

    return { token }
};

export default Sales;