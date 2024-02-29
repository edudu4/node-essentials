const readline = require("readline-sync");

const controller = require("./controller");

const menu = () => {
  console.log("1. Adicionar contato");
  console.log("2. Listar contato");
  console.log("3. Buscar contato");
  console.log("4. Atualizar contato");
  console.log("5. Remover contato");
  console.log("6. Sair");
};

const escolherOpcao = (opcao) => {
  switch (opcao) {
    case "1":
      console.log("Informe -  ");
      const nome = readline.question("Nome: ");
      const email = readline.question("Email: ");
      const telefone = readline.question("Telefone: ");
      controller.adicionarContato(nome, email, telefone);
      break;
    case "2":
      console.log(controller.listarContatos());
      break;
    case "3":
      console.log(
        controller.buscarContato(
          readline.question("Informe o nome do contato: ")
        )
      );
      break;
    case "4":
      console.log("Informe -  ");
      const nomeAtualizado = readline.question("Nome do contato para atualizar: ");
      const emailAtualizado = readline.question("Email: ");
      const telefoneAtualizado = readline.question("Telefone: ");
      controller.atualizarContato(nomeAtualizado, emailAtualizado, telefoneAtualizado);
      break;
    case "5":
      controller.removerContato(
        readline.question("Informe o nome do contato: ")
      );
      break;
    case "6":
      process.exit(0);
      break;
    default:
      console.log("Opção inválida");
      break;
  }
};

const main = () => {
  while (true) {
    console.log("------------------")
    menu();
    escolherOpcao(readline.question("Informe a opcao: "));
    console.log("------------------")
  }
};

main();
