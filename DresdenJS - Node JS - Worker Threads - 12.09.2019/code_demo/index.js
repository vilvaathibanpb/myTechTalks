const inquirer = require('inquirer');
const ora = require('ora');

const NS_PER_SEC = 1e9;

const calculateFactorialWithWorker = require('./calculateFactorialWithWorker');
const calculatFactorial = require('./calculatFactorial');


const benchmarkFactorial = async (inputNumber, factFun, label) => {
  const spinner = ora(`Calculating with ${label}..`).start();
  const startTime = process.hrtime();
  const result = await factFun(BigInt(inputNumber));
  const diffTime = process.hrtime(startTime);
  const time = diffTime[0] * NS_PER_SEC + diffTime[1];
  spinner.succeed(`${label} result done in: ${time}`);
  return time;
}

const run = async () => {
  const {inputNumber} = await inquirer.prompt([
    {
      type: 'input',
      name: 'inputNumber',
      message: 'Calculate factorial for:',
      default: 10,
    },
  ]);

  const timeWorker = await benchmarkFactorial(inputNumber, calculateFactorialWithWorker, 'Worker');
  const timeLocal = await benchmarkFactorial(inputNumber, calculatFactorial, 'Local');
  const diff = timeLocal - timeWorker;
  console.log('\x1b[32m%s\x1b[0m', `Difference between local and worker: ${Math.floor(diff / 1000000)}ms`);
};

run();
