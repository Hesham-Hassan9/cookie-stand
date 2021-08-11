'use strict';
//
let hours = ['6am ' ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
// eslint-disable-next-line no-unused-vars
let footerRow;
let shop = [];
let container = document.getElementById('branch');
let table = document.createElement('table');
container.appendChild(table);

function Branch (location, min, max, avgCookieSale) {
  this.NameBranch = location,
  this.max = max,
  this.min = min,
  this.avg = avgCookieSale,
  this.randomNumberOfCustomersPerHour = [],
  this.amountsOfCookiesPurchased = [],
  this.dailySales = 0,
  this.getRandomNumberOfCustomersPerHour(),
  this.getAmountsOfCookiesPurchased();

}


Branch.prototype.getRandomNumberOfCustomersPerHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.randomNumberOfCustomersPerHour.push( this.randomNumberOfCustomers(this.min, this.max));
  }
},
Branch.prototype.getAmountsOfCookiesPurchased = function(){
  for (let i = 0; i < hours.length; i++){
    let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
    this.amountsOfCookiesPurchased.push(amountsOfCookies);
    this.dailySales += amountsOfCookies;
  }
},

Branch.prototype.randomNumberOfCustomers = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

//shoplistArray
shop.push(new Branch('Seattle', 23, 65, 6.3));
shop.push(new Branch('Tokyo', 3, 24, 1.2));
shop.push(new Branch('Dubai', 11, 38, 3.7));
shop.push(new Branch('Paris', 20, 38, 2.3));
shop.push(new Branch('Lima', 2, 16, 4.6));

//randor shops
///table

//header row
function headerRowFunction() {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  let th = document.createElement('th');
  headerRow.appendChild(th);
  th.textContent = 'hours open';
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    headerRow.appendChild(th);
    th.textContent = hours[i];
  }
  th = document.createElement('th');
  headerRow.appendChild(th);
  th.textContent = 'Daily Location Total';
}



////row data
function dataRowFunction() {

  for (let i = 0; i < shop.length; i++) {
    let currentShop = shop[i];
    let shoprow = document.createElement('tr');
    table.appendChild(shoprow);
    let shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.NameBranch;


    for (let i = 0; i < hours.length; i++) {
      let dataIn = document.createElement('td');
      shoprow.appendChild(dataIn);
      dataIn.textContent = currentShop.amountsOfCookiesPurchased[i];

    }

    // totaly daily sales
    shopTd = document.createElement('td');
    shoprow.appendChild(shopTd);
    shopTd.textContent = currentShop.dailySales;
  }

}



//totals Function
function totalsFunction() {

  let footerRowtr = document.createElement('tr');
  footerRow = footerRowtr;
  table.appendChild(footerRowtr);
  let td = document.createElement('td');
  footerRowtr.appendChild(td);
  td.textContent = 'Totals';
  // tatal for every day
  let megaTotalSalesCookies = 0;
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    footerRowtr.appendChild(td);
    let sum = 0;
    for (let j = 0; j < shop.length; j++) {
      let currentShop = shop[j];

      sum += currentShop.amountsOfCookiesPurchased[i];
    }
    // sum all totals
    td.textContent = sum;
    megaTotalSalesCookies += sum;
  }
  td = document.createElement('td');
  footerRowtr.appendChild(td);
  td.textContent = megaTotalSalesCookies;

}
headerRowFunction(table);
dataRowFunction(table);
totalsFunction(table);




function renderNewRow() {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let td = document.createElement('td');
  tr.appendChild(td);
  let currentShop =shop[shop.length-1];
  console.log(currentShop);
  td.textContent = currentShop.NameBranch;
  //
  for (let i = 0; i < hours.length; i++) {
    let data = document.createElement('td');
    tr.appendChild(data);
    data.textContent = currentShop.amountsOfCookiesPurchased[i];

  }
  // totaly daily sales
  td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = currentShop.dailySales;
}

/////////////////Form//////////////////////

let myform = document.getElementById('myform');
myform.addEventListener('submit', addShop);
function addShop(event) {
  event.preventDefault();
  let NameBranch = event.target.NameBranch.value;
  let max = event.target.max.value;
  let min = event.target.min.value;
  let avg = event.target.avg.value;
  // console.log(NameBranch);
  // console.log(max);
  // console.log(min);
  // console.log(avg);
  let newShop = new Branch(NameBranch, max, min, avg);
  shop.push(newShop);
  // dataRowFunction(table);
  // console.log(newShop);
  table.removeChild(footerRow);
  renderNewRow();
  totalsFunction();
}

// let Seattle = {
//   NameBranch: 'Seattle',
//   max: 65,
//   min: 23,
//   avg: 6.3,
//   randomNumberOfCustomersPerHour: [],
//   amountsOfCookiesPurchased: [],
//   dailySales:0,
//   getRandomNumberOfCustomersPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
//     }
//   },
//   getAmountsOfCookiesPurchased: function(){
//     for (let i = 0; i < hours.length; i++){
//       let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
//       this.amountsOfCookiesPurchased.push(amountsOfCookies);
//       this.dailySales += amountsOfCookies;
//     }
//   },
//   render: function () {
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = `Name of Branch: ${this.NameBranch}`;
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent =`Total: ${this.dailySales} cookies`;
//     // eslint-disable-next-line no-undef
//     ulEl.appendChild(liEl);
//   }

// };
// Seattle.getRandomNumberOfCustomersPerHour();
// Seattle.getAmountsOfCookiesPurchased();
// Seattle.render();

// let Tokyo = {
//   NameBranch: 'Tokyo',
//   max: 24,
//   min: 3,
//   avg: 	1.2,
//   randomNumberOfCustomersPerHour: [],
//   amountsOfCookiesPurchased: [],
//   dailySales:0,
//   getRandomNumberOfCustomersPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
//     }
//   },
//   getAmountsOfCookiesPurchased: function(){
//     for (let i = 0; i < hours.length; i++){
//       let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
//       this.amountsOfCookiesPurchased.push(amountsOfCookies);
//       this.dailySales += amountsOfCookies;
//     }
//   },
//   render: function () {
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = `Name of Branch: ${this.NameBranch}`;
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent =`Total: ${this.dailySales} cookies`;
//     // eslint-disable-next-line no-undef
//     ulEl.appendChild(liEl);
//   }

// };
// Tokyo.getRandomNumberOfCustomersPerHour();
// Tokyo.getAmountsOfCookiesPurchased();
// Tokyo.render();

// let Dubai = {
//   NameBranch: 'Dubai',
//   max: 38,
//   min: 	11,
//   avg: 	3.7,
//   randomNumberOfCustomersPerHour: [],
//   amountsOfCookiesPurchased: [],
//   dailySales:0,
//   getRandomNumberOfCustomersPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
//     }
//   },
//   getAmountsOfCookiesPurchased: function(){
//     for (let i = 0; i < hours.length; i++){
//       let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
//       this.amountsOfCookiesPurchased.push(amountsOfCookies);
//       this.dailySales += amountsOfCookies;
//     }
//   },
//   render: function () {
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = `Name of Branch: ${this.NameBranch}`;
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent =`Total: ${this.dailySales} cookies`;
//     // eslint-disable-next-line no-undef
//     ulEl.appendChild(liEl);
//   }

// };
// Dubai.getRandomNumberOfCustomersPerHour();
// Dubai.getAmountsOfCookiesPurchased();
// Dubai.render();

// let Paris = {
//   NameBranch: 'Paris',
//   max: 38,
//   min: 	20,
//   avg: 	2.3,
//   randomNumberOfCustomersPerHour: [],
//   amountsOfCookiesPurchased: [],
//   dailySales:0,
//   getRandomNumberOfCustomersPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
//     }
//   },
//   getAmountsOfCookiesPurchased: function(){
//     for (let i = 0; i < hours.length; i++){
//       let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
//       this.amountsOfCookiesPurchased.push(amountsOfCookies);
//       this.dailySales += amountsOfCookies;
//     }
//   },
//   render: function () {
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = `Name of Branch: ${this.NameBranch}`;
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent =`Total: ${this.dailySales} cookies`;
//     // eslint-disable-next-line no-undef
//     ulEl.appendChild(liEl);
//   }

// };
// Paris.getRandomNumberOfCustomersPerHour();
// Paris.getAmountsOfCookiesPurchased();
// Paris.render();

// let Lima = {
//   NameBranch: 'Lima',
//   max: 16,
//   min: 	2,
//   avg: 	4.6,
//   randomNumberOfCustomersPerHour: [],
//   amountsOfCookiesPurchased: [],
//   dailySales:0,
//   getRandomNumberOfCustomersPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
//     }
//   },
//   getAmountsOfCookiesPurchased: function(){
//     for (let i = 0; i < hours.length; i++){
//       let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
//       this.amountsOfCookiesPurchased.push(amountsOfCookies);
//       this.dailySales += amountsOfCookies;
//     }
//   },
//   render: function () {
//     let articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     let h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = `Name of Branch: ${this.NameBranch}`;
//     let ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
//     }
//     let liEl = document.createElement('li');
//     liEl.textContent =`Total: ${this.dailySales} cookies`;
//     // eslint-disable-next-line no-undef
//     ulEl.appendChild(liEl);
//   }

// };
// Lima.getRandomNumberOfCustomersPerHour();
// Lima.getAmountsOfCookiesPurchased();
// Lima.render();


// let table = document.createElement('table');
// container.appendChild(table);

//First row method
// function render(){
//   let FirstRow = document.createElement('tr');
//   table.appendChild(FirstRow);
//   let th = document.createElement('th');
//   FirstRow.appendChild(th);
//   th.textContent = 'hours open';
//   for (let i = 0; i < hours.length; i++) {
//     let th = document.createElement('th');
//     FirstRow.appendChild(th);
//     th.textContent = hours[i];
//   }
//   th = document.createElement('th');
//   FirstRow.appendChild(th);
//   th.textContent = 'Daily Location Total';




//   for (let i = 0; i < shop.length; i++) {
//     let currentShop = shop[i];
//     let shoprow = document.createElement('tr');
//     table.appendChild(shoprow);
//     let shopTd = document.createElement('td');
//     shoprow.appendChild(shopTd);
//     shopTd.textContent = currentShop.NameBranch;


//     ////row2 data
//     for (let i = 0; i < hours.length; i++) {
//       let dataIn = document.createElement('td');
//       shoprow.appendChild(dataIn);
//       dataIn.textContent = currentShop.amountsOfCookiesPurchased[i];
//     }

//     // totaly daily sales
//     shopTd = document.createElement('td');
//     shoprow.appendChild(shopTd);
//     shopTd.textContent = currentShop.dailySales;
//   }


//   //footer Row
//   let footerRow = document.createElement('tr');
//   table.appendChild(footerRow);
//   th = document.createElement('th');
//   footerRow.appendChild(th);
//   th.textContent = 'Totals';
//   // tatal for every day
//   let totalSalesCookies = 0;
//   for (let i = 0; i < hours.length; i++) {
//     let td = document.createElement('td');
//     footerRow.appendChild(td);
//     let sum = 0;
//     for (let j = 0; j < shop.length; j++) {
//       let currentShop = shop[j];

//       sum += currentShop.amountsOfCookiesPurchased[i];
//     }
//     // sum all totals
//     td.textContent = sum;
//     totalSalesCookies += sum;
//   }
//   let td = document.createElement('td');
//   footerRow.appendChild(td);
//   td.textContent = totalSalesCookies;
// }
