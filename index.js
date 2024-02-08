const perguntas = [
    {
      pergunta: "Qual é a função do Java Script?",
      respostas: [
        "Estilizar paginas web ",
        "Manipular o comportamento da pagina",
        "Realizar operações matemáticas",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa a sigla DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Output Management",
        "Design Oriented Module",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de comentar código em JavaScript?",
      respostas: [
        "/* Comentário */",
        "// Comentário",
        "-- Comentário",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "log()",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método `map()` faz em JavaScript?",
      respostas: [
        "Filtra os elementos de um array",
        "Modifica cada elemento de um array",
        "Retorna o primeiro elemento de um array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável constante em JavaScript?",
      respostas: [
        "let",
        "const",
        "var",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para verificar igualdade de valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Java Script Object Notation",
        "JavaScript Object Network",
        "JavaScript Oriented Notation",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao()",
        "def minhaFuncao()",
        "var minhaFuncao = function()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector ('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for (const item of perguntas){
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent= item.pergunta
  
  for(let respostas of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = respostas
  dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(respostas)
  
  dt.querySelector('input').onchange = (event) =>{
    const estaCorreta = event.target.value == item.correta
    corretas.delete(item)
    if (estaCorreta){
   corretas.add(item)
      
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
   quiz.appendChild(quizItem)
   
  
  }