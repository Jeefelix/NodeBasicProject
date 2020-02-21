const questions = [ 
    "What is your name",
    "what do you do?",
    "what is your favorite language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` >`);
};

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    const [ name, activity, language] = answers;
    console.log(`
    thank you for your anwsers.

    Go ${activity}, ${name}! You can write ${language} code later!!

    `);

});