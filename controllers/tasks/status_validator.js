const statusValidator = (req, res, next) => {
    if (req.body.status !== null && typeof(req.body.status) !== 'boolean') {
        return res.status(400).json({
            message: 'Status has to be true or false only',
        });
    }
    next();
};

module.exports = statusValidator;
