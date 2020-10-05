const errorHandler = (context, err) => {
  console.error(`[${context}]: ${err}`);
  process.exit(-1);
};

module.exports = { errorHandler };
