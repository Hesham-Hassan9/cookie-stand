'use strict';
//
let hours = ['6am ' ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
let container = document.getElementById('branch');
console.log(container);

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
let seattle = new Branch('Seattle', 23, 65, 6.3);
let tokyo = new Branch('Tokyo', 3, 24, 1.2);
let dobai = new Branch('Dubai', 11, 38, 3.7);
let paris = new Branch('Paris', 20, 38, 2.3);
let lima = new Branch('Lima', 2, 16, 4.6);
//shoplistArray
let shopList = [seattle, tokyo, dobai, paris, lima];


let table = document.createElement('table');
container.appendChild(table);

//First row method

let FirstRow = document.createElement('tr');
table.appendChild(FirstRow);
let th = document.createElement('th');
FirstRow.appendChild(th);
th.textContent = 'hours open';
for (let i = 0; i < hours.length; i++) {
  let th = document.createElement('th');
  FirstRow.appendChild(th);
  th.textContent = hours[i];
}
th = document.createElement('th');
FirstRow.appendChild(th);
th.textContent = 'Daily Location Total';




for (let i = 0; i < shopList.length; i++) {
  let currentShop = shopList[i];
  let shoprow = document.createElement('tr');
  table.appendChild(shoprow);
  let shopTd = document.createElement('td');
  shoprow.appendChild(shopTd);
  shopTd.textContent = currentShop.NameBranch;


  ////row2 data
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


//footer Row
let footerRow = document.createElement('tr');
table.appendChild(footerRow);
th = document.createElement('th');
footerRow.appendChild(th);
th.textContent = 'Totals';
// tatal for every day
let totalSalesCookies = 0;
for (let i = 0; i < hours.length; i++) {
  let td = document.createElement('td');
  footerRow.appendChild(td);
  let sum = 0;
  for (let j = 0; j < shopList.length; j++) {
    let currentShop = shopList[j];

    sum += currentShop.amountsOfCookiesPurchased[i];
  }
  // sum all totals
  td.textContent = sum;
  totalSalesCookies += sum;
}
let td = document.createElement('td');
footerRow.appendChild(td);
td.textContent = totalSalesCookies;


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
