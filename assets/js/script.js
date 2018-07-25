let daysList = ['first day',
'second day',
'third day',
'fourth day',
'fifth day',
'sixth day',
'seventh day',
'eighth day',
'ninth day',
'tenth day',
'eleventh day',
'twelfth day'];

let giftsList = ['a Partridge in a Pear Tree',
'Two Turtle Doves',
'Three French Hens',
'Four Calling Birds',
'Five Gold Rings',
'Six Geese a-Laying',
'Seven Swans a-Swimming',
'Eight Maids a-Milking',
'Nine Ladies Dancing',
'Ten Lords a-Leaping',
'Eleven Pipers Piping',
'Twelve Drummers Drumming']


let currentDay = 0;
console.log(currentDay);

// console.log(daysList[0]);
// console.log(giftsList[0]);

// dom manipulation





document.querySelector('#day'+currentDay).textContent = daysList[0];
document.querySelector('#gift'+currentDay).textContent = giftsList[0];

function showNextDay() {

    if (currentDay === 10) {
       document.querySelector("#next").disabled = true;
    }

    currentDay = currentDay + 1;
    //console.log(currentDay);
    document.querySelector('#stanza'+currentDay).style.display = 'block';

    document.querySelector('#day'+currentDay).textContent = daysList[currentDay];

    let gifts = '';
    for (let i = currentDay; i >= 0; i--) {
        if (i === 1) {
            gifts = gifts + giftsList[i]  + ', and ';
        } else {
            gifts = gifts + giftsList[i] + ' ';
        }
    }

    document.querySelector('#gift'+currentDay).textContent = gifts;


}




