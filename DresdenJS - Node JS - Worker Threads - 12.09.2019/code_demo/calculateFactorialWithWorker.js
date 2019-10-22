const path = require('path');
const workerPath = path.resolve('factorial-worker.js');
const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');
const os = require('os');
const userCPUCount = os.cpus().length;

const calculateFactorialWithWorker = number => {
    if (number === 0) {
      return 1;
    }
    const numbers = [];
  
    for (let i = 1n; i <= number; i++) {
      numbers.push(i);
    }
  
    const segmentSize = Math.ceil(numbers.length / userCPUCount);
    const segments = [];
  
    console.log(numbers.length, userCPUCount, segmentSize);
  
    for (let segmentIndex = 0; segmentIndex < userCPUCount; segmentIndex++) {
      const start = segmentIndex * segmentSize;
      const end = start + segmentSize;
      const segment = numbers.slice(start, end);
      segments.push(segment);
    }
  
    var promises = segments.map(
      segment =>
        new Promise((resolve, reject) => {
          const worker = new Worker(workerPath, {
            workerData: segment,
          });
          worker.on('message', resolve);
          worker.on('error', reject);
          worker.on('exit', code => {
            if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
          });
        })
    )
  
    return Promise.all(promises).then(results => {
      return results.reduce((acc, val) => acc * val, 1n);
    });
  };

  module.exports = calculateFactorialWithWorker;