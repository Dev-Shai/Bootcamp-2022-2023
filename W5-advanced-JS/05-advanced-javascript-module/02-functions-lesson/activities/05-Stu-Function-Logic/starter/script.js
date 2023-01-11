// Write Your Code Below
function checkSame (val1, val2) {
    if (val1 === val2) {
        console.log(`The two values: ${val1} and ${val2}, are identical in value and type`)
    } else if (val1 == val2) {
        console.log(`The two values: ${val1} and ${val2}, are identical in value not type`)
    }
    else {
        console.log(`The two values: ${val1} and ${val2}, differ in both value and type`)
    }
    return
}

checkSame('seven', 7)
