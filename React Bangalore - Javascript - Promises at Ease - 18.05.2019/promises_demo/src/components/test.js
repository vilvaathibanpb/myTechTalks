/* eslint-disable no-undef */

    // <Main Thread>
    // ...
    // ...
    Promise.allSettled(ArrayOfPromise)
        .then((ArrayOfAllSettledPromises) => {
            // Do something
        })
        .catch((error) => {
            // Do something
        })
    // ...
    // ...
    // </Main Thread>