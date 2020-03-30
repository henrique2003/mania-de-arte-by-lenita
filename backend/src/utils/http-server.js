exports.success = (res, payload) => {
    return res.status(200).json(payload);
}

exports.badRequest = (res, payload) => {
    return res.status(400).json(payload);
}

exports.notFound = (res, payload) => {
    return res.status(404).json(payload);
}

exports.serverError = (res, error, payload) => {
    console.log(error);
    return res.status(500).send(`Server error in ${payload}`);
}