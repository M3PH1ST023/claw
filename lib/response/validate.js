function isEqual(actual, expected, status) {
    if (status !== actual.response.status) {
        return `Status Code mismatch : recieved = ${actual.response.status}`;
    }
    return actual.data === expected;
}

function jsonCheck(actual, expected, status) {
    if (status !== actual.response.status) {
        return `Status Code mismatch : recieved = ${actual.response.status}`;
    }
    Object.keys(expected).forEach((key) => {
        if (actual[key] !== expected[key]) {
            return `${key} mismatch : ${actual[key]} ≠ ${expected[key]}`;
        }
    });
    return true;
}

const validate = {
    ok: {
        isEqual: (actual, expected) => {
            return isEqual(actual, expected, 200);
        },
        jsonCheck: (actual, expected) => {
            return jsonCheck(actual, expected, 200);
        },
    },
    notFound: {
        isEqual: function (actual, expected) {
            return isEqual(actual, expected, 404);
        },
        jsonCheck: (actual, expected) => {
            return jsonCheck(actual, expected, 404);
        },
    },
};

export default validate;
