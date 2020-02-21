const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[ indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");

console.log ( `${greeting} ${user}`);

//id do processo em execução e a versão do node
console.log(process.pid);
console.log(process.versions.node);

//contem toda info que digitamos para rodar o processo
console.log(process.argv);

const [ , , firstName, lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`)


