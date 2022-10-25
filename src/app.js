/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let generatedSuit = generateRandomSuit();
  if (generatedSuit == "♦" || generatedSuit == "♥") {
    document.querySelector(".card").style.color = "red";
  }
  document.querySelector(".top-suit").innerHTML = generatedSuit;
  document.querySelector(".bottom-suit").innerHTML = generatedSuit;
  document.querySelector(".number").innerHTML = generateRandomNumber();
};
let generateRandomNumber = () => {
  let numAvailable = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let num = Math.floor(Math.random() * numAvailable.length);
  return numAvailable[num];
};

let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
