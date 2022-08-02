const winston = require('winston')

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )
};

const winstonLogger = winston.createLogger(logConfiguration)

const logger = {
    info: (message) => winstonLogger.info(message),
    error: (message) => winstonLogger.error(message)
}

module.exports = logger
