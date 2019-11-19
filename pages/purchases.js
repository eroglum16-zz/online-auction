import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SaleRow from "../components/SaleRow";
import {Badge} from "reactstrap";

class Purchases extends React.Component{
    render() {
        return (
            <Layout>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <h2> Aldığınız Ürünler <Badge className="ml-2" color="dark" pill>1</Badge> </h2>
                    <hr/>
                    <SaleRow type="p" image="/wand.png" name="Sihirli Değnek" description="Harry Potter'ın Voldemort'u alt ettiği orijinal sihirli değnek." />
                </div>
            </Layout>
        );
    }
}

export default Purchases;