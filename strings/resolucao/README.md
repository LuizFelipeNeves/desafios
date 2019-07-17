# Solução: Manipulação de strings
O texto é divido em paragrafos, depois é separado as palavras, e no fim e junta-se as palavras ate chegar ao limite de caracteres por linha.

## Pré-requisitos
1- Possuir o Nodejs Instalado [Node.js](https://nodejs.org/en/)(10x+) instalado no seu ambiente. Você pode verificar se o possui abrindo o seu terminal e digitando o seguinte comando:

    $ node -version
    
Caso já possua um JDK instalado em seu ambiente, deverá te retornar algo assim: 

    v11.1.0

2- Possuir as dependências, Para instalar e rodar a aplicação. Rode o comando seguinte no terminal dentro da pasta do projeto:

    $ npm install
    $ npm start

É esperado como retorno, o texto formatado, conforme o limite de 40 caractere por linha, e logo em seguida justificado.

    In the beginning God created the heavens
    and the earth. Now the earth was
    formless and empty, darkness was over
    the surface of the deep, and the Spirit
    of God was hovering over the waters.


    And God said, "Let there be light," and
    there was light. God saw that the light
    was good, and he separated the light
    from the darkness. God called the light
    "day," and the darkness he called
    "night." And there was evening, and
    there was morning - the first day.


    In the beginning God created the heavens
    and   the earth.  Now    the  earth  was
    formless and  empty,  darkness was  over
    the surface of  the deep, and the Spirit
    of   God was  hovering  over the waters.


    And God said, "Let there  be light," and
    there  was light. God saw that the light
    was good, and   he separated   the light
    from the  darkness. God called the light
    "day,"   and the    darkness  he  called
    "night."  And  there  was  evening,  and
    there   was  morning  -  the first  day.

## PARÂMETROS
PARAM  | PARAM DESCRIPTION | PARAM TYPE | DEFAULT VALUE
-------|-------------------|------------|--------------
text | text to format | string | In the beginning God created the heavens...
limit | limit to text format - [length of line] | number| 40
   
Exemplo:
    $ npm start 'Olá mundo' 3
