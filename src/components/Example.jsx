import React from 'react';

const Example = ({number}) =>{
    console.log(number)
    let numberValidator = false
    if(number%2 === 0){
        numberValidator = true
    }
    // Los strings esos pueden ser componentes
    return(
        <div>
            {numberValidator ? "El nro es par" : "El nro es impar"}
        </div>
    )

}
export default Example;