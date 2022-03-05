const taskValidator = (req, res, next) => {
    if (req.body.name.length < 4) {
        return res.status(400).json({
            message: 'Name is required and must be longer than 3 characters',
        });
    }
    if (req.body.description.length < 10) {
        return res.status(400).json({
            message:
                'Description is required and must be longer than 9 characters',
        });
    }
    if (
        req.body.priority === null ||
        req.body.priority < 1 ||
        req.body.priority > 3
    ) {
        return res.status(400).json({
            message: 'Priority must be between 1 and 3',
        });
    }
    if (req.body.priority === 1 && req.body.dueDate == null) {
        return res.status(400).json({
            message: 'Date is required for urgent tasks',
        });
    }
    if (req.body.status !== null && typeof req.body.status === 'boolean') {
        return res.status(400).json({
            message: 'Status has to be true or false only',
        });
    }
    next();
};

module.exports = taskValidator;
