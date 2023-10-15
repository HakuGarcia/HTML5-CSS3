/* 
prompt('Qual o seu nome?')//pergunta
confirm('Confirme sua inscrição')

document.write('Paulo')//escreve no body
//write pertence a uma lista de comandos 
*/

//tipos de variaveis
/* nome='Paulo'
console.log(nome)
*/

/* 
-String - Letras/Números/Caracteres
-Number - Número
-Boolean - Verdadeiro-Falso/Sim-Não
-undefined
-null - Nulo 
*/

/* let nome=String(prompt('Qual é o seu nome?'))
console.log('Olá, '+nome+'. Seu nome tem '+nome.length+' letras')
document.write('Olá, '+nome+'. Seu nome tem '+nome.length+' letras')
document.write(nome.toUpperCase())
*/

/*
Case = Maiusculo/Minusculo
Case sensitive = Sente a difrença entre Maiusculo e Minusculo
Camel case = Utiliza uma Palavra em Maiusculo para dar espaço.
*/

/* 
let numero=Number(prompt('Digite um número'))
let proxNumero=Number(prompt('Digite outro número'))//CamelCase
let resultado=numero+proxNumero
alert(resultado) 
*/

/* let valor=14.5
/* document.write(valor.toFixed(2).replace('.',',')) 
document.write(valor.toLocaleString('pt-br', {style:'currency',currency:'BRL'}))
 */

/* let dados={
    nome:'José',
    idade:36,
    estaAprovado: true
}
console.log(dados.nome)
console.log(dados.idade)
console.log(dados.estaAprovado) */

//No SQL = chave valor

//aray
/* let idades=[16,20,18,36,true,'José']
console.log(idades[5])
console.log(idades.length) */

//functions(técnica verbo+substantivo)

/* let corSite='azul'
function resetaCor(){
    corSite=''
} */

/* let corSite='azul'
function trocaCor(cor){
    corSite=cor
}
let cor=prompt('Qual é a cor?')
trocaCor(cor)
console.log(corSite)
 */

/* let nome=''

function escreverNome(novoNome){
    document.write(novoNome)
}
let novoNome=prompt('Qual o nome?')
escreverNome(novoNome) */

/* function multiplicar(n1,n2){
    return n1*n2
}
let resultado=multiplicar(2,5)
console.log(resultado) */

//Operadores matemáticos
//+,-,/,*,**(Exponcenciação)

/* let valor=5
console.log(valor+valor)
console.log(valor-valor)
console.log(valor/valor)
console.log(valor*valor)
console.log(valor**valor) */

//Incremento e decremento
//++,--, de 1 em 1 

/* console.log(--valor)
console.log(++valor) */

//calcular a propria  variável
/* valor=valor//valor=valorvalor */

//operadores lógicos matematicos
//==(igualdade)
//===(estritamente igual)
//console.log('3'===3)
//!=(desigualdade)
//!==(desigualdade)
//console.log(2!=='2')

//operadores logicos de desvio
//&& and (e/conjunção)
//or || (ou/disjunção)
// ! not (negação)

/* let maiorDeIdade=true
let baixaRenda=false
let podeInscrever=maiorDeIdade&&baixaRenda
console.log(podeInscrever)
let inverter=!podeInscrever */

//Desvio condicional

/* if(se), else(caso contrario), else if (caso contrario)
 */

/* let corRGB='amarelo'
if(corRGB==='vermelho'||corRGB==='azul'||corRGB==='verde'){
    console.log('Pertence ao RGB')

}
else{
    console.log('Não pertence ao RGB')
} */

/* let hora=12
if(hora>=6 && hora<12){
    console.log('Bom Dia!')
}
else if(hora>=12 && hora<18){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!')
} */

//operador ternario
//? (separa o teste logico dos resultados)
//: (separa os resultados)
/* let pontos=40
let result=pontos>50 ? 'aprovado' : 'reprovado'
console.log(result)  */

/* let login='gerente'

switch(login){
    case 'comum':
        console.log('usuário comum')
        break
    case 'gerente':
        console.log('usuário gerente')
        break
    case 'diretor':
        console.log('usuário diretoria')
        break
    default:
        console.log('usuário não identificado')
} */

