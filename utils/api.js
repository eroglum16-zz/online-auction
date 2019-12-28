import axios from "axios";
const apiConfig = require('../api-config');

export const getSale = (saleId) => {
    const url = apiConfig.serverUrl + '/sale/' + saleId;
    return axios.get(url)
        .then((response) => {
            let maxBid = response.data.sale.bids.length === 0 ? {
                    bidder: {
                        email: "",
                        nameSurname: ""
                    },
                    amount: 0
                }
                :
                response.data.sale.bids.reduce((a, b) => {
                    return a.amount > b.amount ? a : b;
                });
            let sale = response.data.sale;
            sale.isActive = (Date.now() < sale.endDate);
            return {
                sale: sale,
                maxBid: maxBid
            };
        })
        .catch((error) => {
            console.log(error);
        })
};