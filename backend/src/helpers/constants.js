const constant = {
    HTTP_STATUS: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
        UNPROCESSABLE_ENTITY: 422
    },
    DB_TABLES: {
        USERS: "users",
        PROVIDERS: "providers",
        SERVICES: "services",
        PAIREDJOBS: "paired_jobs",
        OFFERS: "offers",
        REQUESTS: "requests",
    },
    USER_TYPES: {
        PROVIDER: "provider",
        CONSUMER: "consumer"
    },
    REQUESTS_STATUS: {
        PENDING: "pending",
        ASSIGNED: "assigned",
        CLOSED: "closed"
    },
    OFFERS_STATUS: {
        PENDING: "pending",
        ACCEPTED: "accepted",
        REJECTED: "rejected"
    },
    SERVICES:{
        ELECTRICITY: "electricity",
        PLUMBING: "plumbing",
        CARPENTRY: "carpentry",
        CLEANING: "cleaning",
        GARDENING: "gardening",
        PAINTING: "painting",
        MOVING: "moving",
        LOCKSMITH: "locksmith",
        PEST_CONTROL: "pest_control",
        HVAC: "hvac"
    }
}

module.exports = constant;

