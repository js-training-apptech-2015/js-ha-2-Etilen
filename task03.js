function bind(fn, ctx) {
    var outerArguments = Array.prototype.slice.call(arguments, 2);
    return function () {
        return fn.apply(ctx, outerArguments.concat(Array.prototype.slice.call(arguments)));
    }
}

function rebind(fn, ctx) {
    var outerArguments = Array.prototype.slice.call(arguments, 2);
    if (fn.originalFunction == undefined) {
        var func = fn;
    } else {
        var func = fn.originalFunction;
        outerArguments = fn.originalArguments.concat(outerArguments);
    }
    var bindedFunction = function () {
        return func.apply(ctx, outerArguments.concat(Array.prototype.slice.call(arguments)));
    }
    bindedFunction.originalFunction = func;
    bindedFunction.originalArguments = outerArguments;
    return bindedFunction;
}

function add(n) {
    return new AccumulativeNumber(n);
}

function AccumulativeNumber(n) {
    this.value = n;
}

AccumulativeNumber.prototype = {
    add: function(n) {
        return new AccumulativeNumber(this.value + n);
    },

    valueOf: function () {
        return this.value;
    }
}