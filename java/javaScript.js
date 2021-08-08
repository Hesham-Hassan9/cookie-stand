'use strict';
let hours = ['6am ' ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
let container = document.getElementById('branch');
console.log(container);
let Seattle = {
  NameBranch: 'Seattle',
  max: 65,
  min: 23,
  avg: 6.3,
  randomNumberOfCustomersPerHour: [],
  amountsOfCookiesPurchased: [],
  dailySales:0,
  getRandomNumberOfCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
    }
  },
  getAmountsOfCookiesPurchased: function(){
    for (let i = 0; i < hours.length; i++){
      let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
      this.amountsOfCookiesPurchased.push(amountsOfCookies);
      this.dailySales += amountsOfCookies;
    }
  },
  render: function () {
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = `Name of Branch: ${this.NameBranch}`;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
    }
    let liEl = document.createElement('li');
    liEl.textContent =`Total: ${this.dailySales} cookies`;
    // eslint-disable-next-line no-undef
    ulEl.appendChild(liEl);
  }

};
Seattle.getRandomNumberOfCustomersPerHour();
Seattle.getAmountsOfCookiesPurchased();
Seattle.render();

let Tokyo = {
  NameBranch: 'Tokyo',
  max: 24,
  min: 3,
  avg: 	1.2,
  randomNumberOfCustomersPerHour: [],
  amountsOfCookiesPurchased: [],
  dailySales:0,
  getRandomNumberOfCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
    }
  },
  getAmountsOfCookiesPurchased: function(){
    for (let i = 0; i < hours.length; i++){
      let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
      this.amountsOfCookiesPurchased.push(amountsOfCookies);
      this.dailySales += amountsOfCookies;
    }
  },
  render: function () {
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = `Name of Branch: ${this.NameBranch}`;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
    }
    let liEl = document.createElement('li');
    liEl.textContent =`Total: ${this.dailySales} cookies`;
    // eslint-disable-next-line no-undef
    ulEl.appendChild(liEl);
  }

};
Tokyo.getRandomNumberOfCustomersPerHour();
Tokyo.getAmountsOfCookiesPurchased();
Tokyo.render();

let Dubai = {
  NameBranch: 'Dubai',
  max: 38,
  min: 	11,
  avg: 	3.7,
  randomNumberOfCustomersPerHour: [],
  amountsOfCookiesPurchased: [],
  dailySales:0,
  getRandomNumberOfCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
    }
  },
  getAmountsOfCookiesPurchased: function(){
    for (let i = 0; i < hours.length; i++){
      let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
      this.amountsOfCookiesPurchased.push(amountsOfCookies);
      this.dailySales += amountsOfCookies;
    }
  },
  render: function () {
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = `Name of Branch: ${this.NameBranch}`;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
    }
    let liEl = document.createElement('li');
    liEl.textContent =`Total: ${this.dailySales} cookies`;
    // eslint-disable-next-line no-undef
    ulEl.appendChild(liEl);
  }

};
Dubai.getRandomNumberOfCustomersPerHour();
Dubai.getAmountsOfCookiesPurchased();
Dubai.render();

let Paris = {
  NameBranch: 'Paris',
  max: 38,
  min: 	20,
  avg: 	2.3,
  randomNumberOfCustomersPerHour: [],
  amountsOfCookiesPurchased: [],
  dailySales:0,
  getRandomNumberOfCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
    }
  },
  getAmountsOfCookiesPurchased: function(){
    for (let i = 0; i < hours.length; i++){
      let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
      this.amountsOfCookiesPurchased.push(amountsOfCookies);
      this.dailySales += amountsOfCookies;
    }
  },
  render: function () {
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = `Name of Branch: ${this.NameBranch}`;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
    }
    let liEl = document.createElement('li');
    liEl.textContent =`Total: ${this.dailySales} cookies`;
    // eslint-disable-next-line no-undef
    ulEl.appendChild(liEl);
  }

};
Paris.getRandomNumberOfCustomersPerHour();
Paris.getAmountsOfCookiesPurchased();
Paris.render();

let Lima = {
  NameBranch: 'Lima',
  max: 16,
  min: 	2,
  avg: 	4.6,
  randomNumberOfCustomersPerHour: [],
  amountsOfCookiesPurchased: [],
  dailySales:0,
  getRandomNumberOfCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.randomNumberOfCustomersPerHour.push( randomNumberOfCustomers(this.min, this.max));
    }
  },
  getAmountsOfCookiesPurchased: function(){
    for (let i = 0; i < hours.length; i++){
      let amountsOfCookies= Math.ceil(this.randomNumberOfCustomersPerHour[i] * this.avg);
      this.amountsOfCookiesPurchased.push(amountsOfCookies);
      this.dailySales += amountsOfCookies;
    }
  },
  render: function () {
    let articleEl = document.createElement('article');
    container.appendChild(articleEl);
    let h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = `Name of Branch: ${this.NameBranch}`;
    let ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}: ${this.amountsOfCookiesPurchased[i]} cookies`;
    }
    let liEl = document.createElement('li');
    liEl.textContent =`Total: ${this.dailySales} cookies`;
    // eslint-disable-next-line no-undef
    ulEl.appendChild(liEl);
  }

};
Lima.getRandomNumberOfCustomersPerHour();
Lima.getAmountsOfCookiesPurchased();
Lima.render();

function randomNumberOfCustomers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
