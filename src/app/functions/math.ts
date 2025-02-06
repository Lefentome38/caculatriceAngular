import { evaluate } from "mathjs";

export function CalculExpression(value: string[]): number {
  let expression = value.map(token => token === "X" ? "*" : token).join("").replace(/,/g, ".");
  
  let poucentageOnOff = expression.match(/%/g);

  if (poucentageOnOff) {
    let result = expression.match(/\d+|%/g);
    
    if (result) {
      let calculatedResult = ((parseFloat(result[0]) * parseFloat(result[2])) / 100);
      return calculatedResult;
    }
  }

  try {
    let result = evaluate(expression);

    if (typeof result === "number" && !isNaN(result)) {
      return result;
    } else {
      console.log("Erreur : L'expression évaluée n'est pas un nombre valide.");
      return NaN;
    }
    
  } catch (error) {
    console.log("erreur de calcul dans l'expression :", error);
    return NaN;
  }
}