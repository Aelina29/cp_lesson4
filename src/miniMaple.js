class MiniMaple{




}


function spliter()
{
 const stringToSplit = "2+3+4+9-7-5";
 const arrayOfOperands = stringToSplit.split(/[+-]/g);
 arrayOfOperands.forEach(element => console.log(element));

 const arrayOfOperators = stringToSplit.split(/[^+-]/g);
 arrayOfOperators.pop();
 arrayOfOperators.forEach(element => console.log(element));

  let res = "";
  for(let i=0; i < arrayOfOperators.length; i++)
  {
    res+= arrayOfOperators[i] + arrayOfOperands[i];
  }
  console.log(res);

}

export {MiniMaple}
export {spliter}