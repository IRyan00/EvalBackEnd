import {
  createLogger,
  format as _format,
  transports as _transports,
} from "winston";

const logger = createLogger({
  level: "info",
  format: _format.combine(_format.timestamp(), _format.json()),
  transports: [new _transports.File({ filename: "logs/log.log" })],
});

export default logger;
