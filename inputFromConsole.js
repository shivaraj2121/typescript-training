"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var firstName = prompt('Enter first name');
var lastName = prompt('Enter last name');
console.log("Welcome ".concat(firstName, " ").concat(lastName, " to coding"));
