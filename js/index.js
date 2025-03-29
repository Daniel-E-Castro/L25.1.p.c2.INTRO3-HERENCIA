/*INTRO3-HERENCIA 
Sea la clase Cl_empleado con atributo sueldoBase y método calcularSueldo(), que sólo 
retorna sueldoBase. La clase Cl_obrero hereda de Cl_empleado y también tiene horas extras a 
$2 cada una; la clase Cl_administrativo hereda de Cl_empleado y tiene una prima fija. El 
método calcularSueldo() debe hacer lo indicado en cada clase hija.
*/

import Cl_Administrativo from "./Cl_Administrativo.js";
import Cl_Obrero from "./Cl_Obrero.js";

let admin1 = new Cl_Administrativo(300, 2),
    obre1 = new Cl_Obrero(200, 4);

    console.log(` SueldoAdministrativo: ${admin1.calcularSueldoAdministrativo()}`) 
    console.log(` SueldoObrero: ${obre1.calcularSueldoObrero()}`)
