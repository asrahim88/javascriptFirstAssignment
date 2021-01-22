


 // https://github.com/asrahim88/javascriptFirstAssignment


 //  *----------------*****kilometerToMeter*****----------------*

    function kilometerToMeter(kilometer) {
        if(kilometer <= 0) {
            return 'Distance cannot be negative, Please change your input and try again.';
        }
        else {
            const meters = kilometer * 1000;
            return meters;
        }
    }
    // const kilometer = kilometerToMeter(1);
    // console.log(kilometer);




 // *----------------*****budgetCalculator*****----------------*

    function budgetCalculator(watch, phone, laptop) {
        if (watch <0 || phone < 0 || laptop < 0) {
            return 'Negative value is not allowed, Please change your input and try again.';
        } else {
            const watchPrice = watch * 50;
            const phonePrice = phone * 100;
            const laptopPrice = laptop * 500;
            const totalPrice = watchPrice + phonePrice + laptopPrice;
            return totalPrice;
        }
    }
    // const budgetProduct = budgetCalculator(1, 500, 5);
    // console.log(budgetProduct);




 // *----------------*****hotelCost*****----------------*

    function hotelCost(days) {
        if (days <= 0) {
            return 'Please give the positive value.';
        }
        
        else {
            if (days <= 10) {
                const hotelRentFor1To10Days = days * 100;
                return hotelRentFor1To10Days;
            }
            else if (days <= 20) {
                const hotelRentFor1To10Days = 10 * 100;
                return (days - 10) * 80 + hotelRentFor1To10Days;
            }
            else if (days >= 21) {
                const hotelRentFor1To10Days = 10 * 100;
                const hotelRentFor11To20Days = hotelRentFor1To10Days + (10 * 80);
                return (days - 20) * 50 + hotelRentFor11To20Days;
            }
        }
    }

    // const totalCost = hotelCost(25);
    // console.log(totalCost);




 // *----------------*****megaFriend******----------------*
 
//  var friendName = ['abir', 'mahmub ', 'rafi bin munir', 'al alamin', 'asdf ghj aqwse'];
      
    function megaFriend(friendsName) {
        let length = 0;
        let biggestName;
        for (var i = 0; i < friendsName.length; i++) {
            if (friendsName[i].length > length) {
                length = friendsName[i].length;
                biggestName = friendsName[i];
            }
          }
        return biggestName;
    }  
      
    // const totalResult = megaFriend(friendName);
    // console.log(totalResult);




 


 





