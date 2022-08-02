module.exports = class GeneralError extends Error {
    constructor(args) {

        let { code, description = "Unknown error", traceId = null, field = null, status = 400 } = args || {}

        super(description)

        /**
         * If the code is provided, use that code
         * 
         * If the code is not provided, but the status is provided,
         * use the status to generate the code
         * 
         * If the code is not provided, but the status is not provided too,
         * use the default status
         */
        if (code) this.code = code
        else if (!code) this.code = '' + status //parse number to string

        this.traceId = traceId
        this.field = field
        this.status = status

        this.isCustomError = true
    }

    toJson() {
        return {
            code: this.code,
            description: this.message,
            traceId: this.traceId,
            field: this.field
        }
    }

    getStatus() {
        return this.status
    }


}