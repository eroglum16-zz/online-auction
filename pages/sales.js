import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SaleRow from "../components/SaleRow";
import {Badge} from "reactstrap";

class Sales extends React.Component{
    render() {
        return (
            <Layout>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <h2> Sattığınız Ürünler <Badge className="ml-2" color="dark" pill>2</Badge> </h2>
                    <hr/>
                    <SaleRow image="/cleaner.jpg"
                             type="s"
                             name="Akıllı Süpürge"
                             description="Son teknoloji yapay zeka ev süpürgesi. Sizin yerinize kirleri tespit edip süpürür." />

                    <SaleRow image="/apple-watch.jpeg"
                             type="s" name="Apple Watch"
                             description="İlk testlerini Steve Jobs'ın yaptığı ve bir süre kullandığı orijinal Apple Watch." />
                </div>
            </Layout>
        );
    }
}

export default Sales;