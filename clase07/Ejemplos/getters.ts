class rectangle{
    private _width: number;
    private _height: number;

    constructor(_width: number,_height: number){
        this._width= _width;
        this._height= _height;
    }
    //getters
    public get area(): number{
        return this._width * this._height;
    }

    public get height(): number{
        return this._height;
    }

    public get width(): number{
        return this._width;
    }
}

const rectangulo= new rectangle(10,5);
console.log(rectangulo);

//Accediendo a los valores usando los getters
console.log(`Ancho: ${rectangulo.width}`);
console.log(`Altura: ${rectangulo.height}`);
console.log(`Area: ${rectangulo.area}`);