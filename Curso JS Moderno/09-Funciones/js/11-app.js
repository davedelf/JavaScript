//Arrow Functions

const aprendiendo = function (tecnologia, tecnologia1) {
  console.log(`Aprendiendo ${tecnologia} y ${tecnologia1}`);
};

//Simplificándola a una Arrow Function. Si le pasamos 1 parámetro los paréntesis son opcionales, pero si le pasamos varios son obligatorios
const aprendiendo2 = (tecnologia, tecnologia1) => {
  console.log(`Aprendiendo ${tecnologia} y ${tecnologia1}`);
};

aprendiendo("JavaScript", "Node.JS");
aprendiendo2("JavaScript", "Node.JS");
