/**
 * chair-3cft
 * table--10cft
 * bed--50cft
 */

function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChair=3;
    const perTable=10;
    const perBed=50;
    const chairWood=perChair*chairQuantity;
    
    const tableWood=perTable*tableQuantity;
    const bedWood=perBed*bedQuantity;

    // console.log(chairQuantity,tableQuantity,bedQuantity)

    const totalWood=chairWood+tableWood+bedWood;
    
    return totalWood;
}

 const totalWood=woodCalculator(2,2,2);

 console.log('total need of wood',totalWood)