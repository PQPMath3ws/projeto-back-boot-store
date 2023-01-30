const setError = (code, message) => ({code, message});

const errors = {
    400: setError(400, ""),
    404: setError(404, "route not found in server api"),
    405: setError(405, "method not allowed here"),
};

export default errors;