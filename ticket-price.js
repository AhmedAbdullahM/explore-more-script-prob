/**
 * if ticket numbers is less than 100, per ticket price:100tk
 * if ticket numbers is more than 100, but less than 200. first 100 ticket will be 100tk and rest ticket will be 90 taka per piece
 * if you purchase more than 200 tickets
   first 100---100tk
   101-200----90tk
   200+ ---70tk
 * 
 */

function ticketPrice(ticketQuantity){
    const first100Rate=100;
    const second100Rate=90;
    const restTicketRate=70;
    if(ticketQuantity<=100){
       const price=ticketQuantity*firs100Rate;
       return price;
    }
    else if(ticketQuantity<=200){
        const first100Price=100*first100Rate;
        const restTicketQuantity=ticketQuantity-100;
        const restTicketPrice=restTicketQuantity*90;
        const  totalPrice=first100Price+restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price=100*first100Rate;
        const second100Price=100*second100Rate;
        const restTicketQuantity=ticketQuantity-200;
        const restTicketPrice=restTicketRate*70;
        const totalCost=first100Price+second100Price+restTicketPrice;
        return totalCost;
    }
}

const price=ticketPrice(220);
console.log(price)


const conv=parseFloat(1.43)
console.log(4+2+(conv))