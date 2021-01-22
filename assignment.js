// link

// kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    return meter;
}

var length = kilometerToMeter(25);
console.log(length);



// budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    watch = watch * 50;
    phone = phone * 100;
    laptop = laptop * 500;
    var total = watch  + phone  + laptop;

    return total;
}

var sum = budgetCalculator (10, 5, 205);
console.log(sum);




// hotelCost

 function hotelCost(duration) {
     var day = 0;

     if (duration <= 10) {
         day = duration * 100;
     }

     else if (duration <= 20) {
         var firstPart = 10 * 100;
         var remaining = duration - 10;
         var secondPart = remaining * 80;
         day = firstPart + secondPart;
     }

     else {
         var firstPart = 10 * 100;
         var secondPart = 10 * 80;
         var remaining = duration - 20;
         var thirdPart = remaining * 50;
         day = firstPart + secondPart + thirdPart;
     }

     return day;
 }

 var count = hotelCost(131);
 console.log(count);




 // megaFriend

function megaFriend(arr) {
    var long = arr [0];
    for (var i = 0; i< arr.length; i++) {
        var element = arr [i];

        if (long.length < element.length) {
            long = element
        
        }
    
    }

    return long
}

var friend = ["rahim", "karim", "rafiq","nazrul islam", "musfiq"]
var longword = megaFriend(friend);
console.log(longword);


