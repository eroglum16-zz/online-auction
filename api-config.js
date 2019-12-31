export const serverUrl = process.env.API || 'http://localhost:3030';

export const productImageBase = serverUrl + '/images/products/';

export const defaultCity = {
    city: "İller",
    code: 0,
    districts: [
        "İl Seçin"
    ]
};