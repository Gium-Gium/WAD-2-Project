var apiKey = 'b6d25f96f139bef5f924e987f529a010daf1b3f4faf934b6a02d671becf8ac3d'
var conversionList = ['BTC', 'ETH', 'USD', 'EUR', 'SGD', 'BNB', 'SOL', 'DOGE', 'ADA']
function getSinglePrice(fsym, tsyms){
    singlePriceUrl='https://min-api.cryptocompare.com/data/price?'
    
    axios.get(singlePriceUrl, {
        params: {
            fsym:  'BTC',
            tsyms: 'USD,ETH,EUR,SGD,BNB,SOL,DOGE,ADA',
        }
    })
        .then(response => {
            console.log(response.data);
        })
        .catch( error => {
            console.log(error.message);
        });
}
getSinglePrice('BTC', 'USD')

function getCoinInfo(choice){
    var coinInfoUrl = 'https://min-api.cryptocompare.com/data/all/coinlist?'
    axios.get(coinInfoUrl, {
        params: {
            fsym: choice
        }
    })
        .then(response => {
            console.log(response.data.Data[choice]);
            var accessData = response.data.Data[choice]
            var algoType = accessData.AlgorithmType
            var assetWebsite = accessData.AssetWebsiteUrl
            var whitepaper = accessData.AssetWebsiteUrl
            var coinName = accessData.coinName
            //var icon = accessData.ImageUrl
            var proofType = accessData.proofType
            var symbolType = accessData.symbolType
        })
        .catch( error => {
            console.log(error.message);
        });
}
getCoinInfo('BTC')