class MiniMaple{

}


function split(stringToSplit)
{
    //stringToSplit = "4*x^2+3";
    //stringToSplit = "4+3+6-8";
    const arrayOfOperands = stringToSplit.split(/[+-]/);
    arrayOfOperands.forEach(element => console.log("element:", element));

    const arrayOfOperators1 = stringToSplit.split(/[^+-]/g);
    let arrayOfOperators = new Array();
    if(arrayOfOperators1[0] != "-")
        arrayOfOperators.push("");
    arrayOfOperators1.forEach(element => {if(element != "") arrayOfOperators.push(element)});
    arrayOfOperators.forEach(element => console.log("znak: ", element));

    let res = "";
    for(let i=0; i < arrayOfOperators.length; i++)
    {
        res+= arrayOfOperators[i] + arrayOfOperands[i];
    }
    return res;
}

function diff(stringToSplit, dx)
{
    //stringToSplit = "4*x^2+3";
    //stringToSplit = '4+3+6-8';
    //console.log(stringToSplit);
    let f = 0;
    if (stringToSplit[0] == "-")
    {
        stringToSplit = stringToSplit.slice(1, );
        f = 1;
    }

    const arrayOfOperands = stringToSplit.split(/[+-]/g);
    arrayOfOperands.forEach(element => console.log("elem: ", element));

    const arrayOfOperators1 = stringToSplit.split(/[^+-]/g);
    let arrayOfOperators = new Array();
    if(arrayOfOperators1[0] != "-")
        arrayOfOperators.push("");
    arrayOfOperators1.forEach(element => {if(element != "") arrayOfOperators.push(element)});
    arrayOfOperators.forEach(element => console.log("znak: ", element));

    let arrayOfDiffs = new Array();
    for(let i=0; i<arrayOfOperands.length;i++)
    {
        //console.log(arrayOfOperands[i]);
        const l = simple_diff(arrayOfOperands[i], dx);
        arrayOfDiffs.push(l);
        //console.log(l);
    }

    let res = "";
    if (f)  res = "-";
    for(let i=0; i < arrayOfOperators.length; i++)
    {
        if(arrayOfDiffs[i] != 0)
            res+= arrayOfOperators[i] + arrayOfDiffs[i];
        //console.log("Operator", arrayOfOperators[i]);
        //console.log("Operand", arrayOfOperands[i]);
    }
    if (res == "" || res == "-") res = "0";
    return res;
}

function simple_diff(stringToDiff, dx) //x = dx, y != dx, number
{
    //console.log(stringToDiff, "(",dx,") =>",)
    if(!stringToDiff.includes((dx))) return 0;
    const arrayOfOperands = stringToDiff.split(/[*]/g);
    let stepen = 0;
    let coef = 1;
    for(let i=0; i < arrayOfOperands.length; i++)
    {
        //console.log("element: ", arrayOfOperands[i]);
        const c = Number(arrayOfOperands[i]);
        if(!isNaN(c))//число
            coef = c;
        else//не число
    {
        if (arrayOfOperands[i].includes(dx))//по этому дифференцируем
        {
            const ar = arrayOfOperands[i].split('^');
            if(ar.length == 1) stepen = 1;
            else
            {
                for (let j = 0; j < ar.length; j++)
                {
                    if (ar[j] != dx)
                    stepen = Number(ar[j]);
                }
            }
        }
    }
    }
    //console.log("coef: ", coef);
    //console.log("stepen: ", stepen);
    let res = (coef*stepen).toString();
    if(stepen-1 == 1)  res += "*x";
    else if(stepen-1 > 1)
        res += "*x^" + (stepen-1).toString();

    //console.log ("res: ",res);
    return res;
}


export {MiniMaple}
export {diff}
export {simple_diff}
export {split}