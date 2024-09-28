import moment from "moment";
// import { format } from "path";

export const formaterDate = (date: Date)=> {
  //convertir la date en jj/mm/aaaa
    return moment(date, "YYYY-MM-DD ").format("DD/MM/YYYY ");
  };


  export const formatageMontantCFA = (montant: number): string => {
      //arrondit le montant à deux décimales
    var p = montant.toFixed(2).split(".");
 //diviser le montant en deux partie 'entier' et 'decimale' puit utilser la partie entière pour la inverser en un table
    return p[0].split("").reverse().reduce((acc, montant, i) => {
        //reconstruire la chaîne de caractères tout en ajoutant des séparateurs de milliers
      return montant == "-" ? acc : montant + (i && !(i % 3) ? "." : "") + acc;
    }, "") + " F CFA";
  }

  

  export const formatageMontant = (montant: number): string => {
    //arrondit le montant à deux décimales
    var p = montant.toFixed(2).split(".");
    //diviser le montant en deux partie 'entier' et 'decimale' puit utilser la partie entière pour la inverser en un table
    return p[0].split("").reverse().reduce((acc, montant, i) => {
      //reconstruire la chaîne de caractères tout en ajoutant des séparateurs de milliers
      return montant == "-" ? acc : montant + (i && !(i % 3) ? "." : "") + acc;
},);
}
