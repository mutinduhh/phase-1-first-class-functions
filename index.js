function receivesAFunction(chai) {
    chai();
}

function returnsANamedFunction() {
    return function namedFunction() {
    };
}

function returnsAnAnonymousFunction() {
    return function () {
    };
}