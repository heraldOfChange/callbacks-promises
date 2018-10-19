'use strict';

let composedString = '';

const composeStringWithTimeout = (str, timeout) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            composedString += str;
            resolve();
        }, timeout));

const composeString =  () =>
    composeStringWithTimeout('A', 400)
        .then(() => composeStringWithTimeout('B', 300))
        .then(() => composeStringWithTimeout('C', 200))
        .then(() => composeStringWithTimeout('D', 100));

composeString()
    .then(() => console.info(composedString));