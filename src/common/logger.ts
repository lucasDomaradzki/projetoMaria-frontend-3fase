import * as log from "winston";
import * as moment from "moment";
import { createLogger } from "winston";
import { MARIA_UTIL } from "../common/util";

export const logTypes = {
  levels: {
    error: 0,
    warn: 1,
    info: 2
  }
};

const filename = moment().format("DD-MM-YYYY-HH:mm:ss");

export const Logger = createLogger({
  levels: logTypes.levels,
  format: log.format.combine(
    log.format.timestamp({
      format: 'DD-MM-YYYY hh:mm'
    }),
    log.format.json()
  ),
  transports: [
    new log.transports.Console( { stderrLevels: ["error", "warn", "info"] } ),
    new log.transports.File( { filename: `${MARIA_UTIL.logpath}/BACKEND-${filename}.log` } )
  ],
  exitOnError: true
});