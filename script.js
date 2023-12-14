export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   if (currentElement != "e" && currentElement !="E")
    result.push(currentElement)

   
  }

  return result.join("")
}



export function exercise02(args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    const capitalizedElement = currentElement.toUpperCase()
    result.push(capitalizedElement)
}
return result.join("")
}

export function exercise03(args) {
  const input = args
  const result = []
  let count = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
if (currentElement === 'e'){
  count = count + 1
}
else if (currentElement === 'E'){
  count = count + 1
}
  }
  return count
}

export function exercise04 (args) {
  const input = args
  const result = []
  print(input)
 
  let count = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if ("+,-.#%&/()=?£}{$¦@¬|¢´!<>°§;':_~^*][¨".indexOf(currentElement) >= 0) {
      
    }  else{
        result.push(currentElement)
}
}
 
const clearedString = result.join("")

const tmp = clearedString.split(" ")

print(tmp)
 
return tmp.length
}

export function exercise05 (args) {
const input = args

for (let i = 0; i < input.length; i++) {
const currentElement = input[i].charCodeAt()
if (currentElement >= 65 && currentElement <= 90)
return true
}

return false

}

export function exercise06 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (
( )



  )
  return true
  }
  
  return false
  
  }
  
  