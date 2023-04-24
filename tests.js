import { 
  generateRandomNumbers, 
  generateRandomNumbersByGivenDigitArray, 
  generateRandomNumbersArray3
} from "./generate-test-numbers.js";
import { 
  serialize, 
  deserialize
 } from "./index.js";


let test_1 = generateRandomNumbers(10, 300, 1)    //простейшие 
let test_2 = generateRandomNumbers(50, 300, 1)    //50 чисел
let test_3 = generateRandomNumbers(100, 300, 1)   //100 чисел
let test_4 = generateRandomNumbers(500, 300, 1)   //500 чисел
let test_5 = generateRandomNumbers(1000, 300, 1)  //1000 чисел
//все числа 1 знака
let test_6 = generateRandomNumbersByGivenDigitArray(50, 1)
let test_7 = generateRandomNumbersByGivenDigitArray(100, 1)
let test_8 = generateRandomNumbersByGivenDigitArray(500, 1)
let test_9 = generateRandomNumbersByGivenDigitArray(1000, 1)
//все числа 2 знака
let test_10 = generateRandomNumbersByGivenDigitArray(50, 2)
let test_11 = generateRandomNumbersByGivenDigitArray(100, 2)
let test_12 = generateRandomNumbersByGivenDigitArray(500, 2)
let test_13 = generateRandomNumbersByGivenDigitArray(1000, 2)
//все числа 3 знака
let test_14 = generateRandomNumbersByGivenDigitArray(50, 3)
let test_15 = generateRandomNumbersByGivenDigitArray(100, 3)
let test_16 = generateRandomNumbersByGivenDigitArray(500, 3)
let test_17 = generateRandomNumbersByGivenDigitArray(1000, 3)
let test_18 = generateRandomNumbersArray3()

let test_arr = [ 
  test_1,
test_2 ,
test_3 ,
test_4 ,
test_5 ,
test_6 ,
test_7 ,
test_8 ,
test_9 ,
test_10,
test_11,
test_12,
test_13,
test_14,
test_15,
test_16,
test_17,
test_18,
]

function runTests(){
  for(let i = 0; i < test_arr.length; i++){
    let serialize_result = serialize(test_arr[i])
    let initalString = test_arr[i].join('')
    let compare = (1 - serialize_result.length / initalString.length) * 100
  
    if(compare >= 50){
      console.log( "\u001b[1;34m-----------------------TEST--PASSED----------------------------------------" );
    }else {
      console.log( "\u001b[1;31m----------------------TEST--FAILED------------------------------------------" );
    }
    console.log({
      test_number: i + 1,
      serialize_result,
      initalString,
      compare,
    })
    
  }
}

runTests()