//INPUT [1,2,3] - 3 phan tu
//OUTPUT [2,4,6] - 3 phan tu, nhung 3 phan tu do da bi tac dong

// => MAP

const array_input = [1,2,3];

//MAP return new Array
const new_array = array_input.map((element)=>{
    //Callback
    console.log(element)
    //return element for new array
    // new_array.push(element*2)
    return element*2
})
// console.log(array_input == new_array)

// console.log(new_array)

//INPUT [1,2,3,4,5]
//OUTPUT [2,4]

//FILTER


const input_array = [1,2,3,4,5];
const output_array = input_array.filter(element=> element%2 === 0 ? true: false)
// console.log(output_array)

//INPUT [1,2,3,4,5]
//OUTPUT 15

const output_reduce = input_array.reduce((total,element)=>{
    console.log('Inside',total,element)
    return total = total + element
},5) 
console.log(input_array)