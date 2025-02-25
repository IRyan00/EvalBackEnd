const morgan = require("morgan");
const logger = require("../config/logg.js");

const morganMiddleware = morgan("common", {
	stream: {
		write: (message) => {
			logger.info(message.trim());
		},
	},
});

module.exports = morganMiddleware;