const chalk = require("chalk");

const errorHandler = (context, err) => {
  console.error(chalk.red(`[${chalk.bold(context)}]: ${err}`));
  process.exit(-1);
};

module.exports = { errorHandler };
