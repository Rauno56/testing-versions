// setup instrumentations here

const runTests = (winston) => {
	console.error('resting winston version', winston.version);
};

runTests(require('./winston1'));
runTests(require('./winston2'));
