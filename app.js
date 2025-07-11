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
    return (euro * oneEurols.JPY);//14626.49
}
console.log(fromDollarToYen(100),'value from dollar to yen')

const fromEuroToDollar = (euroCurrency)=>{
    return (Math.round (euroCurrency * oneEurols.USD * 100)/100);//107
}
console.log(fromEuroToDollar(100),'from euro to dollar')
const fromYenToPound = (yenCurrency) =>{
    //change it to euro first 
    let euro = yenCurrency/oneEurols.JPY
        euro= Math.round(euro * 100)/100;
    return (Math.round(euro * oneEurols.GBP * 100)/100)//.5568
}
console.log(fromYenToPound(100),'from yen to pound')

module.exports={fromEuroToDollar,fromYenToPound,fromDollarToYen}