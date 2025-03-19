function convertInBinary(value: number) {
    let binaryValue = '';

    while ((value / 2) != 0) {
        binaryValue = `${value % 2}${binaryValue}`
        value = Math.floor(value / 2);
    }

    return binaryValue;
}

function convertBinaryToDecimal(value: string) {
    let result = 0;
    let numberIndex = 0;

    for (let counter = value.length - 1; counter >= 0; counter--) {
        result += Number(value[counter]) * (2 ** numberIndex);        
        numberIndex++;
    }

    return result;
}


function convertHexToDecimal(value: string) {
    let result = 0;
    let numberIndex = 0;

    for (let counter = value.length - 1; counter >= 0; counter--) {
        result += Number(value[counter]) * (16 ** numberIndex);        
        numberIndex++;
    }

    return result;
}
