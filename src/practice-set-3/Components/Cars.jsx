import React from 'react'

export const Cars = ({ carsData }) => {

  const categories = carsData.reduce((acc, { category }) => {
    // if (acc[category]) acc[category] += 1
    // else acc[category] = 1;
    // return acc;
    return acc[category] ? { ...acc, [category]: acc[category] + 1 } : { ...acc, [category]: 1 }

  }, {})
  // console.log(categories);
  const { luxury, sports } = categories;

  return (
    <div>

      <h3>luxury: {luxury}</h3>

      <h3>sports: {sports}</h3>
    </div>
  )
}



//1st acc.sports ? False 
// => {...acc,sports:1} //it'll assign to accumulator in next iteratin

// 2nd acc.luxyry? False
// => {...acc,luxury:1}
// {sports:1,luxury:1} will assign to acc in next iteraiton

// 3rd acc.sports? True
// {...acc,sports:sports+1}
// {sports:2,luxury:1} //will assign to acc in next iteration

// 4th acc.sports ? True
//{...acc,sports:sports+1}
  // {sports:3,luxury:1}
  
  //Now array has ended, so this object will return to the variable categories.