//Ejemplo 1: Aserciones con any

let genericValue: any= "TypeScript";
let stringLength : number= (genericValue as string).length;
console.log(`Length: ${stringLength}`);

 
//Ejemplo 2: Aserciones con tipos de union  "|""

function upperCase(name:string | null): string {
    if(name){
        return(<string>name).toUpperCase();
    }else{
        return "Name was not provided";
    }
}

console.log(upperCase('Julieta'));
console.log(upperCase(null));


//Ejemplo 3: Aserciones con unknown

export let unknownValue : unknown= 'Good afternoon';

if(typeof unknownValue === "string"){
    let lengthUValue: number = (<string>unknownValue).length;
    console.log(`Length of unknown value: ${lengthUValue}`);
}

//Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles, pasando por unknown en el medio)

let value : any = "Good Bye";
let numericValue= (value as unknown as number);
console.log(`Numeric value with double assertion: ${numericValue}`);

//Ejemplo 5: Precauciones en aserciones

let wrongValue: any = 42;
let wrongText= wrongValue as string; 
console.log(wrongText.length);//Da undefined
