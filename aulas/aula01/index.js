const readline = require("readline-sync");

const contatos = [
  { nome: "Eduardo", telefone: "99999-99999" },
  { nome: "Jose", telefone: "999-999999" },
];

const menu = () => {
  console.log("1. Listar");
  console.log("2. Criar");
  console.log("3. Buscar");
  console.log("4. Atualizar");
  console.log("5. Remover");
  console.log("6. Sair");
};

const escolherOpcao = (opcao) => {
  switch (opcao) {
    case "1":
      listar();
      break;
    case "2":
      criar();
      break;
    case "3":
      buscar();
      break;
    case "4":
      atualizar();
      break;
    case "5":
      remover();
      break;
    case "6":
      process.exit(0);
    default:
      console.log("Opção inválida");
  }
};

const listar = () => {
  contatos.forEach((c) => console.log(c.nome, "-", c.telefone));
  readline.question("Pressione qualquer tecla para continuar");
};

const criar = () => {
  const nome = readline.question("Informe o nome do contato: ");
  const telefone = readline.question("Informe o telefone do contato: ");
  const novo = { nome, telefone };
  contatos.push(novo);
};

const buscar = () => {
  const nome = readline.question("Informe o nome do contato: ");
  const contato = contatos.find((c) => c.nome === nome);
  contato
    ? console.log("Contato localizado: ", contato)
    : console.log("Contato não encontrado");
};

const atualizar = () => {
  const nomeAntigo = readline.question("Informe o nome do contato: ");
  const contato = contatos.findIndex((c) => c.nome === nomeAntigo);

  if (contato === -1) {
    console.log("Contato não localizado");
    return;
  }

  const nome = readline.question("Informe o nome do contato: ");
  const telefone = readline.question("Informe o telefone do contato: ");
  const novo = { nome, telefone };

  contatos[contato] = novo;
};

const remover = () => {
  const nome = readline.question("Informe o nome do contato: ");
  const contato = contatos.findIndex((c) => c.nome === nome);
  contatos.splice(contato, 1);
};

const main = () => {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opcao: ");
    escolherOpcao(opcao);
  }
};

main();
