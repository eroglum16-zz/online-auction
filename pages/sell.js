import React from 'react';
import Layout from "../components/AppLayout";
import ValidationError from "../components/ValidationError";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, InputGroupText, InputGroupAddon, InputGroup, Button, Progress, Alert } from 'reactstrap';
import {faCalendar, faLiraSign} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {auth, getUser} from "../utils/auth";
import Router from 'next/router'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import tr from 'date-fns/locale/tr';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import socketIOClient from 'socket.io-client';

const apiConfig = require('../api-config');
const socket = socketIOClient(apiConfig.serverUrl);

const minimumSaleDuration = (1000 * 60 * 60 * 12); //12 hours

registerLocale('tr', tr);
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

class Sell extends React.Component{
    constructor(props) {
        super(props);
        let token = this.props.token;
        this.state = {
            loggedIn: !!token,
            user: {},
            title: '',
            description: '',
            state: 'Seçiniz',
            firstPrice: '',
            focuses: {},
            validationErrors: {},
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
        this.handleInputFocus   = this.handleInputFocus.bind(this);
        this.handleInputBlur    = this.handleInputBlur.bind(this);
    }
    componentDidMount() {
        getUser(this.props.token).then(user => {
            this.setState({
                user: user
            });
        });
        this.getLocations();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let validationErrors = this.state.validationErrors;
        validationErrors[name] = '';

        this.setState({
            [name]: value,
            validationErrors: validationErrors
        });

        if(name == "city"){
            let selectedCity = this.state.locations.find(location => location.city === value);
            this.updateSelectedCity(selectedCity);
        }
    }
    handleInputFocus(event) {
        const target = event.target;
        const name = target.name;

        var focuses = this.state.focuses;

        focuses[name] = true;

        this.setState({
            focuses: focuses
        });
    }
    handleInputBlur(event) {
        const target = event.target;
        const name = target.name;

        var focuses = this.state.focuses;

        focuses[name] = false;

        this.setState({
            focuses: focuses
        });
    }
    handleChange = date => {
        let validationErrors = this.state.validationErrors;
        validationErrors.endDate = '';
        this.setState({
            endDate: date,
            validationErrors: validationErrors
        });
    };
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
        }

        let validated = this.validate();
        if(!validated) return;

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
            var saleId = response.data.saleId;
            socket.emit('new sale', {
                saleId: saleId,
                endDate: this.state.endDate
            });
            Router.push('/index');
        }).catch((error) => {
            console.log(error);
        });
    }
    validate(){
        let validated = true;

        let validationErrors = {};

        if(this.state.files.length === 0){
            validationErrors.image = "Lütfen en az bir fotoğraf yükleyin.";
            validated = false;
        }

        if(this.state.title.length === 0){
            validationErrors.title = "Lütfen ürününüze bir başlık verin.";
            validated = false;
        }else if(this.state.title.length > 40){
            validationErrors.title = "Başlık en fazla 40 karakter olabilir.";
            validated = false;
        }

        if(this.state.description.length > 400){
            validationErrors.description = "Açıklama en fazla 400 karakter olabilir.";
            validated = false;
        }

        if(this.state.state == 'Seçiniz'){
            validationErrors.state = "Lütfen ürününüzün durumunu belirtin.";
            validated = false;
        }

        if(this.state.firstPrice.length === 0){
            validationErrors.firstPrice = "Lütfen bir açılış fiyatı belirleyin.";
            validated = false;
        }

        if(this.state.endDate < (Date.now() + minimumSaleDuration)){
            validationErrors.endDate = "Kapanış tarihi en erken 12 saat sonra olabilir.";
            validated = false;
        }

        if(!this.state.selectedCity.code){
            validationErrors.city = "Lütfen bir konum seçin.";
            validated = false;
        }

        this.setState({
            validationErrors: validationErrors
        });
        return validated;
    }
    getLocations(){
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
    updateSelectedCity(city){
        this.setState({
            selectedCity: city
        });
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
        console.log(this.state.validationErrors.title);
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
                                           maxLength="40"
                                           value={this.state.title}
                                           onChange={this.handleInputChange}
                                           onFocus={this.handleInputFocus}
                                           onBlur={this.handleInputBlur}
                                           placeholder="Ürününüzü tanımlayan birkaç kelime..." />

                                    <ValidationError message={this.state.validationErrors.title} />
                                    { (this.state.focuses.title && this.state.title.length  !== 0 ) ?
                                        <Progress className="mt-3"
                                                  color="info"
                                                  value={this.state.title.length * 2.5} /> : ""
                                    }

                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Açıklama</Label>
                                    <Input type="textarea"
                                           id="description"
                                           name="description"
                                           value={this.state.description}
                                           rows="5"
                                           maxLength="400"
                                           onChange={this.handleInputChange}
                                           onFocus={this.handleInputFocus}
                                           onBlur={this.handleInputBlur}
                                           style={{outline: 'none'}}
                                           placeholder="Ürününüz hakkında açıklamalar ve belirtmek istediğiniz ekstra bilgiler." />
                                    <ValidationError message={this.state.validationErrors.description} />
                                    { (this.state.focuses.description && this.state.description.length  !== 0 ) ?
                                        <Progress className="mt-3"
                                                  color="info"
                                                  value={this.state.description.length / 4} /> : ""
                                    }
                                </FormGroup>
                                <FormGroup>
                                    <Label for="state">Durum</Label>
                                    <Input type="select"
                                           name="state"
                                           id="state"
                                           value={this.state.state}
                                           onChange={this.handleInputChange}>
                                        <option>Seçiniz</option>
                                        <option>Kullanılmamış</option>
                                        <option>Yeni gibi</option>
                                        <option>Az kullanılmış</option>
                                        <option>Eski</option>
                                        <option>Çok Eski</option>
                                    </Input>
                                    <ValidationError message={this.state.validationErrors.state} />
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
                                    <ValidationError message={this.state.validationErrors.firstPrice} />
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
                                    <ValidationError message={this.state.validationErrors.endDate} />
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
                                    <ValidationError message={this.state.validationErrors.city} />
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
                                        allowFileTypeValidation
                                        acceptedFileTypes={['image/*']}
                                        labelInvalidField="Sadece fotoğraf dosyaları yükleyebilirsiniz"
                                        labelIdle="Sürükleyip bırakın, veya bilgisayarınızdan yüklemek için tıklayın. <br> En fazla 10 fotoğraf yükleyebilirsiniz."
                                        labelTapToRetry="Yeniden denemek için tıklayın"
                                        labelFileProcessingError="Fotoğraf yüklenirken hata oluştu"
                                        labelFileProcessingComplete="Yükleme tamamlandı"
                                        labelTapToUndo="Geri almak için tıklayın"
                                        labelFileProcessing="Fotoğraf yükleniyor"
                                        labelTapToCancel="İptal etmek için tıklayın"
                                        allowMultiple={true}
                                        maxFiles={10}
                                        server={
                                            {
                                                url: apiConfig.serverUrl,
                                                process: '/file/product',
                                                revert: '/file/product'
                                            }
                                        }
                                        onupdatefiles={fileItems => {
                                            let validationErrors = this.state.validationErrors;
                                            validationErrors.image = '';
                                            // Set currently active file objects to this.state
                                            this.setState({
                                                files: fileItems.map(fileItem => fileItem.file),
                                                validationErrors: validationErrors
                                            });
                                        }}
                                    />
                                    <ValidationError message={this.state.validationErrors.image} />
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