
var get_bit = function(x, position) {
    return (x >> position) & 1
}

var set_bit = function(x, position){
    let mask = 1 << position
    return x | mask
}

var flip_bit = function(x, position){
    let mask = 1 << position
    return x ^ mask
}

let  a = 16
a = set_bit(a, 1)
console.log(a)