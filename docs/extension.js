import { onTokenPress, addToolbarButton } from "@owlbear/sdk";

// Função para abrir a imagem ou link associado ao token
function openMonsterSheet(token) {
  const monsterSheetUrl = token.getData("monsterSheetUrl"); // Obtém a URL associada ao token
  if (monsterSheetUrl) {
    window.open(monsterSheetUrl, "_blank");
  } else {
    alert("Nenhuma ficha de monstro associada a este token.");
  }
}

// Adiciona um botão à barra de ferramentas do token
addToolbarButton({
  icon: "🔍", // Ícone do botão
  title: "Abrir Ficha de Monstro",
  onClick: (token) => openMonsterSheet(token), // Chama a função ao clicar no botão
});

// Permite configurar a URL da ficha ao selecionar um token
onTokenPress((token) => {
  const url = prompt("Insira o link da ficha de monstro (PNG ou outro formato):", token.getData("monsterSheetUrl") || "");
  if (url) {
    token.setData("monsterSheetUrl", url); // Salva a URL no token
  }
});
