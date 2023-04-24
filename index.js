export function serialize(numbers) {
  const START_SINGLE = 254;
  const END_SINGLE = 255;
  const START_TRIPLE = 0;
  let serializedData = '';
  let single_digit = [];
  let isSingleDigitStarted = false
  for (let i = 0; i < numbers.length; ) {
    let is_last_number = (i + 1) === numbers.length
    let ascii = String.fromCharCode(numbers[i])
    if(numbers[i] < 10){
      if(is_last_number){
        if(single_digit.length === 2){
          serializedData += String.fromCharCode(single_digit.join(''))
          serializedData += String.fromCharCode(END_SINGLE)
          serializedData += ascii
        } else {
          single_digit.push(numbers[i])
          serializedData += String.fromCharCode(single_digit.join(''))
          serializedData += String.fromCharCode(END_SINGLE)
        }
        i++
      } else {
        if(single_digit.length === 2){
          if(!isSingleDigitStarted){
            isSingleDigitStarted = !isSingleDigitStarted
            serializedData += String.fromCharCode(START_SINGLE)
            serializedData += String.fromCharCode(single_digit.join(''))
            single_digit = [numbers[i]]
          } else {
            single_digit.push(numbers[i])
            let triple = Number(single_digit.join(''))
            if(triple < 254){
              serializedData += String.fromCharCode(single_digit.join(''))
              single_digit = []
            } else {
              single_digit.pop()
              serializedData += String.fromCharCode(single_digit.join(''))
              single_digit = [numbers[i]]
            }
          }
        }else{
          single_digit.push(numbers[i])
        }
        i++
      }
    } else {
      if(isSingleDigitStarted){
        isSingleDigitStarted = !isSingleDigitStarted
        if(single_digit.length === 2) {
          serializedData += String.fromCharCode(single_digit.join(''))
          serializedData += String.fromCharCode(END_SINGLE)
        } else {
          serializedData += String.fromCharCode(END_SINGLE)
          serializedData += String.fromCharCode(single_digit.join(''))
        }
        single_digit = []
      }
      if(numbers[i] > 253){
        ascii = String.fromCharCode(START_TRIPLE) + String.fromCharCode(numbers[i] - 253)
      }  
      serializedData += ascii
      i++
    }
  }
  return serializedData
}



export function deserialize(string){
  let deserializedData = [];
  let is_single_started = false
  for(let i = 0; i < string.length; ) {
    let num = string.charCodeAt(i)
    if(num === 0) {
      deserializedData.push(string.charCodeAt(i+1) + 253)
      i+=2
    } else if(num === 254) {
      is_single_started = true
      i++
    }else if(num === 255){
      is_single_started = true
      i++
    }else{
      if(is_single_started){
        deserializedData.push(...num.split('').map(a => Number(a)))
          i++
      } else {
        deserializedData.push(num)
        i++  
      }
    }

    
  }
  return deserializedData
}











