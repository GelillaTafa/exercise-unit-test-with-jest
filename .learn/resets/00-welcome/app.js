let oneEurols = {
    "JPY":156.5,//japan yen
    "USD":1.07,// us dollar 
    "GBP":0.87// british pound
}
//form dollar to yen, 
const fromDollarToYen = (dollarCurrency)=>{
    // change it to euro first $100/1.07 = 93.45 * 156.5 = 14,626
    let euro = dollarCurrency/oneEurols.USD
    euro= Math.round(euro * 100)/100;
    return (euro * oneEurols.JPY);
}

const fromEuroToDollar = (euroCurrency)=>{
    return (Math.round (euroCurrency * oneEurols.USD * 100)/100);
}

const fromYenToPound = (yenCurrency) =>{
    //change it to euro first 
    let euro = yenCurrency/oneEurols.JPY
        euro= Math.round(euro * 100)/100;
    return (euro * oneEurols.GBP)
}

module.exports={fromEuroToDollar,fromYenToPound,fromDollarToYen}