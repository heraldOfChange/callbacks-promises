'use strict';

let composedString = '';

const composeStringWithTimeout = (acc, str, timeout) =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(acc + str), timeout));

const composeString = async () => {
    composedString = await composeStringWithTimeout(composedString, 'A', 400);
    composedString = await composeStringWithTimeout(composedString, 'B', 300);
    composedString = await composeStringWithTimeout(composedString, 'C', 200);
    composedString = await composeStringWithTimeout(composedString, 'D', 100);
    return composedString;
};

const displayResult = async result => await console.info(result);

composeString()
    .then(displayResult);
