db.createUser(
    {
        user: "Ishara",
        pwd: "Ishara123",
        roles: [
            {
                role: "readWrite",
                db: "mercavus"
            }
        ]
    }
);