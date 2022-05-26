let array = []
for (let i = 0; i < 1000; i++) {
    array.push(i)
}


let findArmstrongNumbers = function(array) {
    let ans = []
    for (let j = 0; j < array.length; j++) {
        let digits = array[j].toString().length
        let number1 = String(array[j]).split("")

        // need to convert to int
        let number = number1.reduce((a,b) => (parseInt(a))+(parseInt(b)**digits),0)
        // console.log(number1)
            if (number == array[j]) {
                ans.push(array[j])
            }
        }
        console.log(ans)        
    }
    
    

findArmstrongNumbers(array)
  


