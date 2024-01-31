const express = require('express');
const app = express();
app.use(express.json());

let filmes = [
    { id: 1, titulo: 'Mulher-Maravilha', diretor: 'Patty Jenkins', dataLancamento: '1 de junho de 2017', sinopse: 'Treinada desde cedo para ser uma guerreira imbatível, Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor sofre um acidente e cai em uma praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com a guerra, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.', trailer: 'https://youtu.be/INLzqh7rZ-U?si=xMACSCw8onktDg0l' },
    { id: 2, titulo: 'Erin Brockovich', diretor: 'Steven Soderbergh', dataLancamento: '20 de abril de 2000', sinopse: 'Erin Brockovich é a mãe de três filhos que trabalha em um pequeno escritório de advocacia. Ao descobrir que a água de uma cidade no deserto está sendo contaminada e espalhando doenças entre seus habitantes, ela convence seu chefe a deixá-la investigar o caso. Erin usa todas as suas qualidades naturais, desde a fala macia e convincente até seus atributos físicos, para convencer os cidadãos da cidade a cooperarem com ela, fazendo com que tenha em mãos um processo de 333 milhões de dólares.', trailer: 'https://youtu.be/l0ftkL6qhT8?si=yrEqD8XDc7QmyVyn' },
    { id: 3, titulo: 'Estrelas Além do Tempo', diretor: 'Theodore Melfi', dataLancamento: '2 de fevereiro de 2017', sinopse: 'No auge da corrida espacial travada entre Estados Unidos e Rússia durante a Guerra Fria, uma equipe de cientistas da NASA, formada exclusivamente por mulheres afro-americanas, provou ser o elemento crucial que faltava na equação para a vitória dos Estados Unidos, liderando uma das maiores operações tecnológicas registradas na história americana e se tornando verdadeiras heroínas da nação.', trailer:'https://youtu.be/wx3PVtrU-Os?si=Bn7xjrEZfhfjCjit' },
    { id: 4, titulo: 'Frida', diretor: 'Julie Taymor', dataLancamento: '7 de setembro de 2002', sinopse: 'A história das dores e da arte de um dos nomes de mais impacto no século 20, a mexicana Frida Kahlo.', trailer:'https://youtu.be/-CTM7FcY1LE?si=msE4B9so_Zetb5xv' },
    { id: 5, titulo: 'Joy: Um Nome de Sucesso', diretor: 'David O. Russel', dataLancamento: '21 de janeiro de 2016', sinopse: 'Joy é uma jovem brilhante, mas sua vida pessoal é extremamente complicada. Divorciada e mãe de dois filhos, ela vive com seus pais e ex-marido, que mora no porão. Sua mãe, que vive no andar de cima e passa o dia todo assistindo a novelas, compartilha o espaço com seu pai, apesar de terem se divorciado há 17 anos. Criativa desde a infância, Joy inventa um esfregão de limpeza milagroso que se transforma em um fenômeno de vendas e faz dela uma das empreendedoras de maior sucesso dos Estados Unidos.', trailer: 'https://youtu.be/uR-2TiQVY-k?si=uCo3gnAkStntrGRZ'},
];

let diretoras = [
    { nome: 'Ava DuVernay', contribuicao: 'Selma, Olhos que Condenam' },
    { nome: 'Greta Gerwig', contribuicao: 'Lady Bird, Adoráveis Mulheres' },
    { nome: 'Emerald Fennel', contribuicao: 'Bela Vingança'},
    { nome: 'Jane Campion', contribuicao: 'O Piano'},
    { nome: 'Chloé Zhao', contribuicao: 'Nomadland'},
];

let personagens = [
    { nome: 'Lara Croft', filme: 'Tomb Raider' },
    { nome: 'Katniss Everdeen', filme: 'Jogos Vorazes' },
    { nome: 'Princesa Leia Organa', filme: 'Star Wars' },
    { nome: 'Mary Poppins', filme: 'Mary Poppins' },
    { nome: 'Hermione Granger', filme: 'Harry Potter' },
    { nome: 'Dora', filme: 'Central do Brasil' },
    { nome: 'Val', filme: 'Que horas ela volta?' },
];

let organizacoes = [
    { nome: 'Geena Davis Institute', descricao: 'Equidade de gênero em mídia.' },
    { nome: 'Women in Film', descricao: 'Apoio e avanço de mulheres na indústria cinematográfica.' },
    { nome: 'New York Women in Film & Television', descricao: 'É uma organização sem fins lucrativos para mulheres profissionais do cinema, televisão e mídia digital.'},
];

app.get('/filmes', (req, res) => {
    res.json(filmes);
});

app.get('/filmes/:id', (req, res) => {
    const filme = filmes.find(f => f.id === parseInt(req.params.id));
    if (!filme) res.status(404).json({ error: 'Filme não encontrado.' });
    res.json(filme);
});

app.post('/filmes', (req, res) => {
    const novoFilme = req.body;
    novoFilme.id = filmes.length + 1;
    filmes.push(novoFilme);
    res.status(201).json(novoFilme);
});

app.get('/diretoras', (req, res) => {
    res.json(diretoras);
});

app.get('/personagens', (req, res) => {
    res.json(personagens);
});

app.get('/organizacoes', (req, res) => {
    res.json(organizacoes);
});

const port = process.env.PORT || 2020;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
