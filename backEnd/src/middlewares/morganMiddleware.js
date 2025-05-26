import morgan from "morgan";
import logger from "../config/logg.js";

const morganMiddleware = morgan("common", {
  stream: {
    write: (message) => {
      logger.info(message.trim());
    },
  },
});

export default morganMiddleware;
