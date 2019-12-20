import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemCard from "../components/ItemCard";
import { getToken } from '../utils/auth'
import axios from "axios";

class Index extends React.Component{
    constructor(props) {
        super(props);
        var token = this.props.token;
        this.getUser(token);
        this.state = {
            loggedIn: token ? true : false,
            user: {}
        }
    }
    getUser(token){
        const apiConfig = require('../api-config');
        const url = apiConfig.serverUrl + '/user/get';
        axios.post(url, {}, {
            headers:{
                authorization: token
            }})
            .then((response) => {
                this.setState({
                    user: response.data.user
                });
            })
            .catch(function (error) {
                console.log(error);
            }.bind(this));
    }

    render() {
        return (
            <Layout page="home" user={this.state.user} loggedIn={this.state.loggedIn}>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <h2> Online Açık Arttırma Uygulaması</h2>
                    <hr/>
                    <p style={{fontFamily:'verdana', fontSize:'17px', marginBottom:'50px'}}>
                        Ürünlerinizi platformumuzda açık arttırmaya sunabilir, veya aktif açık arttırmalara
                        katılarak değerli ürünleri alma fırsatı yakalayabilirsiniz. Aşağıdaki ürünlerden ilginizi çekeni seçerek
                        satışa giderseniz teklifte bulunabilirsiniz.
                    </p>
                    <hr></hr>
                    <div className="row">
                        <ItemCard name="Piyano"
                                  description="Değeri yüksek profesyonel bir piyano. Temiz kullanılmış ve tüm parçaları sağlam."
                                  image="/piano.jpg" />
                        <ItemCard name="Akıllı Süpürge"
                                  description="Son teknoloji yapay zeka ev süpürgesi. Sizin yerinize kirleri tespit edip süpürür."
                                  image="/cleaner.jpg" />
                        <ItemCard name="Orijinal Resim"
                                  description="Beyin hastalıklarının tedavisinde kullanılabilen terapi resmi."
                                  image="/art.jpg" />
                        <ItemCard name="Akıllı Saat"
                                  description="İlk testlerini Steve Jobs'ın yaptığı ve bir süre kullandığı orijinal Apple Watch. "
                                  image="/apple-watch.jpeg" />
                        <ItemCard name="Sihirli Değnek"
                                  description="Harry Potter'ın Voldemort'u alt ettiği orijinal sihirli değnek."
                                  image="/wand.png" />
                        <ItemCard name="Güç Yüzüğü"
                                  description="Frodo'nun cebe indirip herkese Hüküm Dağı'na attım dediği meşhur yüzük."
                                  image="/ring.jpeg" />
                        <ItemCard name="Zaman Makinesi"
                                  description="Zamanda yolculuk yapan ilk insan olabilmek için zaman makinesini kaçırmayın."
                                  image="/time-machine.jpg" />
                        <ItemCard name="Titanik"
                                  description="Batmayan gemi Titanik'in üretime geçirilmeden önce tasarlanan modeli."
                                  image="/titanic.jpg" />
                    </div>
                </div>
            </Layout>
        );
    }
}

Index.getInitialProps = async ctx => {
    // Check user's session
    const token = getToken(ctx);

    return { token }
};

export default Index;