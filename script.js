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




}