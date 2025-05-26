module.exports = {
    createUser: async (db, userData) => {
        const [result] = await db.execute(
            `INSERT INTO users (name, email, password, address, role) VALUES (?, ?, ?, ?, ?)`,
            [
                userData.name,
                userData.email,
                userData.password,
                userData.address || null,
                userData.role || 0,
            ]
        );

        const [rows] = await db.execute(`SELECT * FROM users WHERE id = ?`, [result.insertId]);
        return rows[0];
    }
};
