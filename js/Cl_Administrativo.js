import Cl_Empleado from "./Cl_Empleado.js";

export default class Cl_Administrativo extends Cl_Empleado{
    constructor(sueldoBase, primaFija){
        super(sueldoBase);
        this.primaFija = primaFija;
    }

    calcularSueldoAdministrativo(){
        return  this.sueldoBase + this.primaFija;
    } 
}