import { evaluate } from "mathjs";

export function CalculExpression(value: string[]): number {
  let expression = value.map(token => token === "X" ? "*" : token).join("").replace(/,/g, ".").replace(/(\d+)[,\.](\d+)/g, "$1.$2")
  
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