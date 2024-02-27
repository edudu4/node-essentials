const controller = require("./controller");

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
      controller.listar();
      break;
    case "2":
      controller.criar();
      break;
    case "3":
      controller.buscar();
      break;
    case "4":
      controller.atualizar();
      break;
    case "5":
      controller.remover();
      break;
    case "6":
      process.exit(0);
    default:
      console.log("Opção inválida");
  }
};

const main = () => {
  while (true) {
    menu();
    const opcao = controller.readline.question("Entre com uma opcao: ");
    escolherOpcao(opcao);
  }
};

main();
