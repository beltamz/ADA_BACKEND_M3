//Importamos todas las funciones y constantes desde index.ts
//Gracias a la reexportacion. Esto demuestra como las 3 formas de exportacion funcionan juntas en un proyecto

import { 
    calculateCircleArea, 
    CIRCLE_NAME,calculateRectangleArea, 
    RECTANGLE_NAME, 
    calculateTriangleArea,
    TRIANGLE_NAME 
} from "./index";

const circleArea= calculateCircleArea(5);
console.log(`${CIRCLE_NAME}, Area: ${circleArea}`);

const rectangleArea= calculateRectangleArea(5, 6);
console.log(`${RECTANGLE_NAME}, Area: ${rectangleArea}`);

const triangleArea= calculateTriangleArea(5, 6);
console.log(`${TRIANGLE_NAME}, Area: ${triangleArea}`);
