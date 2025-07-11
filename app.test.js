const {fromEuroToDollar,fromYenToPound, fromDollarToYen} = require('./app.js');

//from euro to dollar 
test('One euro should be 1.07 dollars', ()=>{
    const dollars= fromEuroToDollar(3.5);

    expect(dollars).toBe(3.75)
})

//from dollar  to yen
test (' $100  should be 14,626.17 yen ',()=>{
    const yen = fromDollarToYen(100);

    expect(yen).toBe(14626.49)
})



//from yen  to pound 

test('one yen should be 0.56 pound',()=>{
    let pound = fromYenToPound(100)

    expect(pound).toBe(0.56)
})