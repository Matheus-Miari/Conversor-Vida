function gerarCuriosidade() {
const input = document.getElementById("data_nasc").value;
const results = document.getElementById("results");
results.innerHTML = "";

if (!input) {
    results.innerHTML = "<li>😅 Você precisa escolher uma data!</li>";
    return;
}

const birthDate = new Date(input);
const today = new Date();
const diffMs = today - birthDate;

const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
const horas = dias * 24;
const minutos = horas * 60;
const segundos = minutos * 60;
const idade = Math.floor(dias / 365.25);



const curiosidades = [
    `🕰️ Você já viveu aproximadamente <strong>${dias.toLocaleString()}</strong> dias.`,
    `💤 Dormiu por cerca de <strong>${Math.floor(dias / 3).toLocaleString()}</strong> dias (supondo 8h por noite). Duvido que tenha dormido tudo isso.`,
    `☕ Provavelmente tomou <strong>${(idade * 400).toLocaleString()}</strong> xícaras de café (aposto que foi mais).`,
    `🚶‍♂️ Já deu algo em torno de <strong>${(dias * 3000).toLocaleString()}</strong> passos (imaginando que você nem sai de casa).`,
    `📺 Poderia ter assistido a <strong>${Math.floor(minutos / 45).toLocaleString()}</strong> episódios de série de 45min. Mas preferiu rolar o feed.`,
    `💓 Seu coração bateu cerca de <strong>${(segundos * 1.1).toLocaleString()}</strong> vezes (muito disso por quem nem te respondia).`,
    `📱 Você provavelmente desbloqueou seu celular mais de <strong>${(dias * 80).toLocaleString()}</strong> vezes. E pra quê, exatamente?`,
    `🍕 Comeu cerca de <strong>${(idade * 200).toLocaleString()}</strong> fatias de pizza. Ou deveria ter.`,
    `😬 Já sobreviveu a pelo menos <strong>${(idade * 12).toLocaleString()}</strong> retrogradações de Mercúrio.`,
    `🧠 Pensou em largar tudo e sumir pelo menos <strong>${(idade * 50).toLocaleString()}</strong> vezes.`,
    `💻 Passou mais de <strong>${Math.floor(horas / 3).toLocaleString()}</strong> horas na frente de telas. E mesmo assim, aqui está.`,

    // Curiosidades de esporte
    `⚽ Você teve tempo suficiente pra assistir mais de <strong>${Math.floor(dias / 2)}</strong> jogos de futebol. E ainda não aprendeu a regra do impedimento.`,
    `🏃‍♂️ Poderia ter corrido <strong>${(dias * 2).toLocaleString()}</strong> km... Mas preferiu correr atrás de boleto.`,
    `🎾 Deu tempo de jogar <strong>${Math.floor(horas / 2)}</strong> partidas de tênis. Mas só jogou conversa fora.`,
    `🏋️‍♀️ Em teoria, daria pra levantar peso <strong>${(dias * 30).toLocaleString()}</strong> vezes. Mas você mal levantou da cama.`,
    `🚴‍♀️ Poderia ter pedalado até Marte (quase). Mas a bike tá servindo de cabide até hoje.`,
    `🤸‍♂️ Teve tempo pra aprender 4 esportes olímpicos. Você mal aprendeu a acordar no horário.`,
    `🥊 Lutou contra a preguiça <strong>${(idade * 365).toLocaleString()}</strong> vezes... perdeu todas.`,
    `🏀 Poderia ter feito <strong>${(idade * 500).toLocaleString()}</strong> arremessos de basquete. Mas você só arremessa suas metas pro ano seguinte.`,
    `🏊‍♂️ Já dava pra ter atravessado a piscina olímpica <strong>${(dias * 10).toLocaleString()}</strong> vezes. Mas nadar contra a maré da vida já é o suficiente.`,
    `🚶‍♂️ Se cada passo fosse um esporte, você seria campeão... de ir até a geladeira.`,

    // Curiosidades de vida cotidiana
    `🎬 Você já passou tempo suficiente assistindo "Friends" para ser amigo do Chandler. Ou pelo menos para entender as piadas dele.`,
    `🍿 Se tivesse gastado as horas que passou vendo séries na Netflix lendo livros, já teria lido uns 50 best-sellers.`,
    `🧙‍♂️ Poderia ter aprendido a conjurar feitiços com Harry Potter, mas só aprendeu a conjurar desculpas para não sair.`,
    `🚀 Já assistiu tantos episódios de "Star Trek" que poderia ser um oficial da Frota Estelar (ou só um bom viajante do sofá).`,
    `🦸‍♂️ Tempo suficiente para ter virado um Vingador, mas a única batalha que venceu foi contra o botão "soneca".`,
    `🧟‍♂️ Se fosse um zumbi de "The Walking Dead", já teria aprendido a fugir... mas parece que está mais pra personagem perdido na floresta.`,
    `🎭 Já poderia ter feito parte do elenco de "Game of Thrones" — ao menos como figurante, ou pra morrer na primeira temporada.`,
    `🕵️‍♂️ Assistiu tanta coisa de detetive que já poderia montar seu próprio clube do Sherlock Holmes. Ou só é bom em achar coisas perdidas no sofá.`,
    `📺 Poderia ter assistido a "Breaking Bad" umas 10 vezes, mas ainda não sabe cozinhar nem ovo mexido.`,
    `👽 Já viu tantos filmes de alienígenas que deve estar esperando um ET bater na sua porta — ou pelo menos um delivery estranho.`,
    `🎤 Cantou tanto nas maratonas de "Glee" que deveria estar no palco, mas só está na plateia mesmo.`,
    `🕺 Tem horas suficientes pra ter dançado em "La La Land", mas só dança no chuveiro mesmo.`,
    `🎥 Passou mais tempo assistindo filmes de super-herói que seria capaz de aprender a pilotar uma armadura do Homem de Ferro.`,
    `👻 Já assistiu tantos filmes de terror que nem mais se assusta — exceto com a conta do cartão de crédito.`,
    `📺 Se tivesse economizado o tempo que gastou vendo séries, já estaria milionário. Mas ao menos tem maratona garantida no final de semana.`,
    `🎉 Parabéns! Você desperdiçou tempo lendo tudo isso. Mais uma conquista pra lista.`,
];

curiosidades.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    results.appendChild(li);
});
}
