import React from "react";
import {Alert} from "reactstrap";

class SearchResult extends React.Component{
    render() {
        return (
            <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                <h2> Arama sonuçları</h2>
                <hr/>
                {
                    this.props.serverDown ?
                        <Alert style={{fontFamily:'verdana', fontSize:'17px'}} color="info">
                            Sunucularımızdaki sorundan dolayı hizmet veremiyoruz. Çok yakında geri döneceğiz.
                            Anlayışınız için teşekkür ederiz.
                        </Alert>
                        :
                        <p style={{fontFamily:'verdana', fontSize:'17px', marginBottom:'50px'}}>
                            {this.props.searchString} için bulunan sonuçlar:
                        </p>
                }

                <div className="row">
                    {this.props.sales}
                </div>
            </div>
        );
    }
}

export default SearchResult;