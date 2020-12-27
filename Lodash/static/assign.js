// sample array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
//CREATE CHUNK FUNCTION
function myChunk(array, k) {
    var n = array.length;
    var arr1 = [], arr2 = [];
    for (var i = 0; i < n; i++) {
        (i < k) ? arr1.push(array[i]) : arr2.push(array[i]);
    }
    return [arr1, arr2];
}
//CREATE REDUCER FUNCTION
function myReducer(array, myFunction, acc) {
    var i = 0;
    if (acc === undefined) {
        acc = array[0];
        i = 1;
    }
    for (i; i < array.length; i++) {
        acc = myFunction(acc, array[i]);
    }
    return acc;
}
// CREATE FILTER FUNCTION
function myFilterer(array, myFunction) {
    var acc = [];
    for (var i = 0; i < array.length; i++) {
        if (myFunction(array[i])) {
            acc.push(array[i]);
        }
    }
    return acc;
}
//CREATE FIND FUNCTION
function myFinder(obj, myFunc, index) {
    if (index === undefined) {
        index = 0;
    }
    var keys = Object.keys(obj);
    for (var i = index; i < keys.length; i++) {
        if (myFunc(obj[i])) {
            return obj[i];
        }
    }
}
//CREATE SUM FUNCTION
function mySums(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum;
}

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        giveOutput(e.target.value);
    });
});
var displayHTML = function (val) {
    document.getElementById("display-div").innerHTML = "<p>The button pressed was " + val + ". Please Check the Output in console</p>";
};
var giveOutput = function (value) {
    console.log('The button pressed was', value);
    switch (value) {
        case 'chunk':
            var ret = myChunk(array, 2);
            console.log(ret);
            displayHTML(value);
            break;
        case 'reduce':
            var ret2 = myReducer(array, function (a, c) { return a + c; }, 0);
            console.log(ret2);
            displayHTML(value);
            break;
        case 'filter':
            var ret3 = myFilterer(array, (function (v) { return v === 6; }));
            console.log(ret3);
            displayHTML(value);
            break;
        case 'finder':
            var ret4 = myFinder(array, (function (v) { return v === 2; }), 0);
            console.log(ret4);
            displayHTML(value);
            break;
        case 'sum':
            var ret5 = mySums(array);
            console.log(ret5);
            displayHTML(value);
            break;
    }
};