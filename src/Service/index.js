export const getGiftCardAsset = () => {
    return fetch(`${process.env.REACT_APP_CHIMONEY_BASE_URL}/info/assets?countryCode=NG`, {
        headers: {
            'X-API-KEY': process.env.REACT_APP_CHIMONEY_API_KEY
        }
    })
    .then((response) => { 
        return response.json().then((data) => {
            console.log(data);
            return data.data.giftCardsRLD;            ;
        }).catch((err) => {
            console.log(err);
        }) 
    });
}