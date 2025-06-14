class Triangle{
    private _base: number;
    private _height: number;

    constructor(){
        this._base= 0;
        this._height=0;
    }
    //setter para la base, con validacion de numeros
    public set base(value: number){
        if(value>0){
            this._base= value;
        }else{
            console.log(`La base debe ser mayor a 0`);   
        }
    }

    //setter para altura, con validacion
    public set height(value: number){
        if(value>0){
            this._height= value;
        }else{
            console.log(`La altura debe ser mayor a 0.`);
            
        }
    }

    //metodo para calcular el area del triangulo
    public calculateArea():number{
        return(this._base*this._height)/2;
    }
}

const triangulo=new Triangle();

triangulo.base=10;
triangulo.height= 5;

console.log(`Area del triangulo: ${triangulo.calculateArea()}`);