const { createUser } = require('../models/user');

exports.demo = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const user = await createUser(db, req.body);

        res.status(201).json({
            message: "User created successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message,
        });
    }
};
