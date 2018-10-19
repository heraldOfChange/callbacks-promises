'use strict';

let composedString = '';

const composeStringWithTimeout = (str, timeout, callback) =>
    setTimeout(() => {
        composedString += str;
        callback();
    }, timeout);

const composeString = () =>
    composeStringWithTimeout('A', 400, () =>
        composeStringWithTimeout('B', 300, () =>
            composeStringWithTimeout('C', 200, () =>
                composeStringWithTimeout('D', 100, () => console.info(composedString))
            )
        )
    );

setTimeout(composeString, 1000);
