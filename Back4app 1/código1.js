Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "H4nJ2pLHqTzZE7OjsWGxOAohiG4ygplk5ICV8a4e", // This is your Application ID
  "Fm8zUfAxnQeOOeiryVGsE0pLfSy56X2iz0p0ojcy", // This is your Javascript key
);

let pessoas = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < pessoas.length; ++i) {
    // lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${pessoas[i].Nome} - Idade: ${pessoas[i].Idade} - Sexo: ${pessoas[i].Sexo}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

(async () => {
  const Lista = Parse.Object.extend('Lista');
  const query = new Parse.Query(Lista);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const Nome = object.get('Nome')
      const Idade = object.get('Idade')
      const Sexo = object.get('Sexo')
      console.log(Nome);
      console.log(Idade);
      console.log(Sexo);
    }
  } catch (error) {
    console.error('Error while fetching Lista', error);
  }
})();
const fetchPessoas2 = () => {
  const Lista = Parse.Object.extend("Lista");
  const query = new Parse.Query(Lista);
  query
    .find()
    .then((results) => {
      pessoas = [];
      for (const object of results) {
        const Nome = object.get("Nome");
        const Idade = object.get("Idade");
        const Sexo = object.get("Sexo");
        pessoas.push({ Nome,Idade,Sexo });
      }
      console.log(pessoas);
      gerarLista();
    })
    .catch((error) => {
      console.error("Error while fetching Pessoa", error);
    });
};

fetchPessoas2();
