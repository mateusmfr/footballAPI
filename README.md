# Boas vindas ao projeto API de Combinações de Resultados

Para rodar o projeto, atente-se a cada passo descrito, e se tiver qualquer dúvida, me envie por email!

Para uma melhor experiência com o README utilize a função "Open Preview".

No VSCode o atalho é `Ctrl + Shift + V` por padrão.

# Projeto

Aqui você terá acesso ao contexto geral do projeto.

<details>
<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

O projeto é uma API de combinações possíveis de resultados de uma partida de futebol americano.

Neste projeto, foi desenvolvido **uma API REST robusta e eficiente, dockerizada para facilitar a implantação**

O desenvolvimento do projeto seguiu rigorosamente as [regras de negócio](https://docs.google.com/document/d/1FgllH0esa6a__qM7LbwD-HD17wwOLr2Hm25JjkJ_U14/edit) fornecidas, garantindo que o sistema atenda às necessidades e expectativas da prova.

</details>

<details>
<summary><strong>🧮 Algoritmo e Complexidade</strong></summary><br />

O algoritmo em questão é usado para calcular o número de combinações possíveis de pontuações em uma partida de futebol americano. Ele é composto por duas partes principais: a classe VerifyService e a função combinationsCalculator.

A classe VerifyService implementa a interface IVerifyService e possui um método verifyScore. Este método recebe uma string de pontuação (por exemplo, "3x15") e a divide em pontos para a equipe A e equipe B. Em seguida, ele calcula as combinações possíveis de pontuações para cada equipe usando a função combinationsCalculator. O número total de combinações é o produto das combinações da equipe A e da equipe B.

A função combinationsCalculator é onde a lógica principal do algoritmo reside. Ela recebe um número de pontos e retorna o número de combinações possíveis para alcançar essa pontuação. As pontuações possíveis em uma partida de futebol americano são 3, 6, 7 e 8 pontos. A função cria um array de combinações, onde o índice do array representa a pontuação e o valor no índice representa o número de combinações para alcançar essa pontuação. Inicialmente, todas as combinações são definidas como 0, exceto para a pontuação 0, que tem uma combinação (não marcar nenhum ponto).

A função então percorre cada pontuação possível. Para cada pontuação, ela percorre o array de combinações. Se o índice atual for maior ou igual à pontuação, ela adiciona o número de combinações para a pontuação atual menos a pontuação ao número de combinações para a pontuação atual. Isso efetivamente calcula o número de combinações para a pontuação atual, considerando a pontuação atual e todas as pontuações possíveis menores.

Finalmente, a função retorna o número de combinações para a pontuação dada.

A complexidade de tempo do algoritmo é O(n*m), onde 'n' é a quantidade de pontos e 'm' é o número de possíveis pontuações. Isso ocorre porque há dois loops aninhados no algoritmo: um loop para cada pontuação possível e outro loop para cada ponto até o total de pontos.

Em termos de complexidade de espaço, o algoritmo é O(n), pois o array de combinações tem tamanho proporcional a 'n'.

</details>

<details>
<summary><strong>🏟️ Estrutura do projeto</strong></summary><br />

O projeto é composto de 2 entidades importantes para sua estrutura:

1️⃣ **Back-end:**
 - Foi o ambiente que realizei a maior parte das implementações exigidas.
 - Roda na porta `8080`.;
 - A aplicação é inicializada a partir do arquivo `src/server.ts`;
 - Garanti que o `express` é executado e a aplicação ouve a porta 8080;

2️⃣ **Docker:**
  - Configurei o `Dockerfile`, que se encontra na raiz do projeto, para conseguir inicializar a aplicação;
  - A imagem Docker do projeto é leve e otimizada, removendo arquivos desnecessários para a execução da aplicação em produção.

O projeto segue uma arquitetura MVC e foi dividido nas seguintes pastas:

1️⃣ **controllers**: Esta pasta contém os controladores, que lidam com a lógica de roteamento.

2️⃣ **interfaces**: Esta pasta contém as interfaces usadas no projeto.

3️⃣ **routes**: Esta pasta contém as rotas da aplicação, que definem os endpoints da API.

4️⃣ **services**: Esta pasta contém os serviços, que lidam com a lógica de negócios.

5️⃣ **tests**: Esta pasta contém os testes do projeto, divididos em testes de integração e testes unitários.

6️⃣ **utils**: Esta pasta contém utilitários usados em todo o projeto. Aqui foi desenvolvido o algoritmo que calcula as combinações (`combinationsCalculator.ts`) e um mapa de status HTTP (`HTTPStatusMap.ts`) para facilitar a manipulação de respostas HTTP.

Além disso, o projeto contém os arquivos `app.ts` e `server.ts` na raiz do diretório `src`. O `app.ts` é o ponto de entrada da aplicação, enquanto o `server.ts` é responsável por iniciar o servidor.


</details>

# Rodando o projeto

<details>
  <summary><strong>🐳 Como inicializar</strong></summary><br />

Siga os passos abaixo:

1️⃣ Construa a imagem Docker com o comando: `docker build -t football-api .`

2️⃣ Execute o contêiner com o comando: `docker run -d -p 8080:8080 --name football-api football-api tail -f /dev/null`

3️⃣ Para entrar no contêiner, use o comando: `docker exec -it container-id /bin/sh`. Substitua `container-id` pelo ID do contêiner que está rodando, que você pode encontrar usando o comando `docker ps`

4️⃣ Para iniciar a aplicação, execute o comando: `npm run dev` dentro do contêiner.

5️⃣ Para parar a aplicação, pressione `Ctrl+C` no terminal.

</details>

<details>
  <summary><strong>🕵️ Linter</strong></summary><br />

Para garantir a qualidade do código, usei o [ESLint](https://eslint.org/) para fazer uma análise estática.

Este projeto está com as configurações relacionadas ao _linter_  no arquivo `.eslintrc.json`.

Para rodar o `ESLint`, basta executar o comando `npm run lint` dentro do contêiner do projeto. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no terminal. Mas como nesse caso não há problemas, nada será impresso.

</details>

<details>
  <summary><strong>🧪 Executando testes com Mocha</strong></summary><br />

Escrevi testes de integração, estão na pasta `src/tests/integration/`.

Escrevi também alguns testes unitários para cobrir o resto da aplicação, eles se encontram na pasta `src/tests/unit/`.

Alem de usar [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) e [Sinon](https://sinonjs.org/) para a criação dos testes, usei o [Istambul](https://istanbul.js.org/) para analisar a cobertura deles.

|Comando|Resultado|
|---|---|
|`npm run test`|Executa todos os testes|
|`npm run test:coverage`|Executa todos os testes e mostra a cobertura deles|

</details>

# Considerações finais



<details>
  <summary><strong>🔍 Observações importantes</strong></summary><br />

Assumi que todas as entradas fornecidas são válidas, conforme especificado nos requisitos. Portanto, não implementei validações de entrada. Em um cenário real, seria importante adicionar verificações e validações adequadas para garantir a robustez e a segurança da aplicação.

Além disso, não utilizei o Git para controle de versão neste projeto, pois também não foi solicitado nos requisitos.

</details>

<details>
  <summary><strong>🗣 Me dê um feedback!</strong></summary><br />

Ficarei muito grato se você puder compartilhar seu feedback sobre este projeto. Seu retorno é essencial para o meu aprendizado e aprimoramento contínuo. Se você tiver qualquer sugestão, crítica construtiva ou comentário, por favor, não hesite em entrar em contato comigo.

Meu email: `mateus.mfr10@gmail.com`

</details>