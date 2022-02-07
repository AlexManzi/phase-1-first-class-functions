function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return function apple() {
        console.log("before All")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("before All")
    }
}

