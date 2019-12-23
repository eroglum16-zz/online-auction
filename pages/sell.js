import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, InputGroupText, InputGroupAddon, InputGroup, Button } from 'reactstrap';
import {faCalendar, faLiraSign} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {auth} from "../utils/auth";
import Router from 'next/router'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import tr from 'date-fns/locale/tr';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
registerLocale('tr', tr);
const apiConfig = require('../api-config');

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class Sell extends React.Component{
    constructor(props) {
        super(props);
        var token = this.props.token;
        this.getUser(token);
        this.state = {
            loggedIn: token ? true : false,
            user: {},
            title: '',
            description: '',
            state: '',
            firstPrice: '',
            locations: [apiConfig.defaultCity],
            endDate: new Date(),
            selectedCity: apiConfig.defaultCity,
            district: '',
            city: '',
            files: []
        };
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.updateSelectedCity = this.updateSelectedCity.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });

        if(name == "city"){
            var selectedCity = this.state.locations.find(location => location.city === value);
            this.updateSelectedCity(selectedCity);
        }
    }
    updateSelectedCity(city){
        this.setState({
            selectedCity: city
        });
    }
    componentDidMount() {
        this.getLocations();
    }
    handleChange = date => {
        this.setState({
            endDate: date
        });
    };
    getUser(token){
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
            });
    }
    handleSubmit = (event) => {
        const url = apiConfig.serverUrl + '/sale/new';

        event.preventDefault();

        let filenames = [];

        if (event.target.filepond.length){
            for (var i=0; i < event.target.filepond.length; i++){
                filenames.push(event.target.filepond[i].value);
            }
        }else if(event.target.filepond.value){
            filenames.push(event.target.filepond.value);
        }else return;

        axios.post(url,{
            title: this.state.title,
            description: this.state.description,
            state: this.state.state,
            firstPrice: this.state.firstPrice,
            endDate: this.state.endDate,
            city: this.state.city,
            district: this.state.district,
            images: filenames
        },{
            headers:{
                authorization: this.state.user.token
            }
        }).then((response) => {
            Router.push('/index');
        }).catch((error) => {
            console.log(error);
        });
    }
    getLocations(){
        const apiConfig = require('../api-config');
        const url = apiConfig.serverUrl + '/locations';
        axios.get(url)
            .then((response) => {
                this.setState({
                    locations: response.data.locations,
                    selectedCity: response.data.locations[0]
                });
            })
            .catch(function (error) {
                console.log(error);
            }.bind(this));
    }

    render() {
        const cities = this.state.locations.map((location) =>
            <option>{location.city}</option>
        );
        var location;
        for (location in this.state.locations){
            if (location.city === this.state.city){
                this.setState({
                    selectedCity: location
                });
            }
        }
        const districts = this.state.selectedCity.districts.map((district)=>
            <option>{district}</option>
        );

        return (
            <Layout page="sell" user={this.state.user} loggedIn={this.state.loggedIn}>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <h2> Satış Başlat </h2>
                    <hr/>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <FormGroup>
                                    <Label for="title">Başlık</Label>
                                    <Input type="text"
                                           name="title"
                                           id="title"
                                           value={this.state.title}
                                           onChange={this.handleInputChange}
                                           placeholder="Ürününüzü tanımlayan birkaç kelime..." />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Açıklama</Label>
                                    <Input type="textarea"
                                           id="description"
                                           name="description"
                                           value={this.state.description}
                                           rows="5"
                                           onChange={this.handleInputChange}
                                           placeholder="Ürününüz hakkında açıklamalar ve belirtmek istediğiniz ekstra bilgiler." />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="state">Durum</Label>
                                    <Input type="select"
                                           name="state"
                                           id="state"
                                           value={this.state.state}
                                           onChange={this.handleInputChange}>
                                        <option>Durum seçin</option>
                                        <option>Kullanılmamış</option>
                                        <option>Yeni gibi</option>
                                        <option>Az kullanılmış</option>
                                        <option>Eski</option>
                                        <option>Çok Eski</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="firstPrice">Başlangıç Fiyatı</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={faLiraSign} width="16" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="number"
                                               name="firstPrice"
                                               value={this.state.firstPrice}
                                               onChange={this.handleInputChange}
                                               id="firstPrice"
                                               placeholder="Minimum satış fiyatını belirtin..." />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{display:'block'}} for="endDate">Kapanış Tarihi</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={faCalendar} width="16" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <DatePicker
                                            id="endDate"
                                            className="form-control"
                                            selected={this.state.endDate}
                                            onChange={this.handleChange}
                                            locale="tr"
                                            showTimeSelect
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{textDecoration:'underline'}} for="location">Konum</Label>
                                    <div className="row" id="location">
                                        <div className="col-md-6">
                                            <Label for="city">İl</Label>
                                            <Input type="select"
                                                   name="city"
                                                   id="city"
                                                   value={this.state.city}
                                                   onChange={this.handleInputChange}>
                                                {cities}
                                            </Input>
                                        </div>
                                        <div className="col-md-6">
                                            <Label for="district">İlçe</Label>
                                            <Input type="select"
                                                   name="district"
                                                   id="district"
                                                   value={this.state.district}
                                                    onChange={this.handleInputChange}>
                                                {districts}
                                            </Input>
                                        </div>
                                    </div>
                                </FormGroup>
                                <Button color="danger"
                                        size="lg"
                                        type="submit"
                                        block>
                                    Satışı Başlat
                                </Button>
                            </div>
                            <div className="col-md-8">
                                <FormGroup>
                                    <Label style={{display:'block'}} for="filepond">Ürün fotoğrafları</Label>
                                    <FilePond
                                        id="filepond"
                                        files={this.state.files}
                                        labelInvalidField="Sadece fotoğraf dosyaları yükleyebilirsiniz"
                                        labelIdle="Sürükleyip bırakın, veya bilgisayarınızdan yüklemek için tıklayın"
                                        labelTapToRetry="Yeniden denemek için tıklayın"
                                        labelFileProcessingError="Fotoğraf yüklenirken hata oluştu"
                                        labelFileProcessingComplete="Yükleme tamamlandı"
                                        labelTapToUndo="Geri almak için tıklayın"
                                        labelFileProcessing="Fotoğraf yükleniyor"
                                        labelTapToCancel="İptal etmek için tıklayın"
                                        allowMultiple={true}
                                        maxFiles={5}
                                        server={
                                            {
                                                url: apiConfig.serverUrl,
                                                process: '/file/product',
                                                revert: '/file/product'
                                            }
                                        }
                                        onupdatefiles={fileItems => {
                                            // Set currently active file objects to this.state
                                            this.setState({
                                                files: fileItems.map(fileItem => fileItem.file)
                                            });
                                        }}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </Form>
                </div>
            </Layout>
        );
    }
}

Sell.getInitialProps = async ctx => {
    // Check user's session
    const token = auth(ctx);

    return { token }
};

export default Sell;