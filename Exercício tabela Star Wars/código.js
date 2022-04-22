
  let people = [{ name: "VAZIO", birth_year: "VAZIO", height: "VAZIO", mass: "VAZIO", hair_color: "VAZIO",skin_color: "VAZIO",eye_color: "VAZIO", }];
  let currentPage = "https://swapi.dev/api/people";
  let nextPage = null;
  const objTraducao = {
    name: "Nome",
    birth_year: "Ano de nascimento",
    height: "Altura",
    mass: "Peso",
    hair_color: "Cor do cabelo",
    skin_color: "Cor da pele",
    eye_color: "Cor dos olhos",

  };
  
  const btFetch = document.getElementById("btFetch");
  const btProxPag = document.getElementById("btProxPag");
  const listaFetch = document.getElementById("listaFetch");
  
  let textNode;
  let colunaNode;
  let linhaNode;
  function exibirListaStarWars() {
    btProxPag.disabled = nextPage == null;
    listaFetch.innerHTML = "";
    for (let i = 0; i < people.length; ++i) {
     linhaNode=document.createElement("tr");
     
     textNode=document.createTextNode(`${people[i].name}`);
     colunaNode=document.createElement("td");
     colunaNode.appendChild(textNode);
     linhaNode.appendChild(colunaNode);

     textNode=document.createTextNode(`${people[i].birth_year}`);
     colunaNode=document.createElement("td");
     colunaNode.appendChild(textNode);
     linhaNode.appendChild(colunaNode);

     textNode=document.createTextNode(`${people[i].height}`);
     colunaNode=document.createElement("td");
     colunaNode.appendChild(textNode);
     linhaNode.appendChild(colunaNode);

     textNode=document.createTextNode(`${people[i].mass}`);
     colunaNode=document.createElement("td");
     colunaNode.appendChild(textNode);
     linhaNode.appendChild(colunaNode);

     textNode=document.createTextNode(`${people[i].hair_color}`);
     colunaNode=document.createElement("td");
     colunaNode.appendChild(textNode);
     linhaNode.appendChild(colunaNode);

     textNode=document.createTextNode(`${people[i].skin_color}`);
     colunaNode=document.createElement("td");
     colunaNode.appendChild(textNode);
     linhaNode.appendChild(colunaNode);

     textNode=document.createTextNode(`${people[i].eye_color}`);
     colunaNode=document.createElement("td");
     colunaNode.appendChild(textNode);
     linhaNode.appendChild(colunaNode);

     listaFetch.appendChild(linhaNode);
    }
  }
  
  const fetchStarWarsPeople = () => {
    fetch(currentPage)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        people = data.results;
        nextPage = data.next;
        exibirListaStarWars();
      })
      .catch((err) => {
        console.log("Erro recebido: ", err);
      });
  };
  
  const fetchProxPag = () => {
    currentPage = nextPage;
    nextPage = null;
    fetchStarWarsPeople();
  };
  
  btFetch.onclick = fetchStarWarsPeople;
  btProxPag.onclick = fetchProxPag;
  
exibirListaStarWars();
