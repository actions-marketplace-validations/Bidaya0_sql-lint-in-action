/**
 * @class       : index
 * @author      : bidaya0 (bidaya0@00-1E-10-1F-00-00)
 * @created     : 星期二 1月 04, 2022 01:35:11 CST
 * @description : index
 */

export default class index {
}

const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('child_process');
const initbash = `curl https://github.com/joereynolds/sql-lint/releases/latest/download/sql-lint-linux -o  /usr/local/bin/sql-lint &&
chmod +x /usr/local/bin/sql-lint &&
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`
				
try {
  const nameToGreet = core.getInput('path');
	exec(initbash, (err, stdout, stderr) => {
		if (err) {
			return;
  }

		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
	const runbash = `sqllint ${path}`
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
//function() {
//				exec(initbash, (err, stdout, stderr) => {
//					if (err) {
//						// node couldn't execute the command
//						return;
//					}
//
//					// the *entire* stdout and stderr (buffered)
//					console.log(`stdout: ${stdout}`);
//					console.log(`stderr: ${stderr}`);
//				})
//}
