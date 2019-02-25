const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/passport-sessions');

const User = require("../models/Users")

describe("User model test", () => {
    beforeAll(async () => {
        await User.remove({});
    });

    afterEach(async () => {
        await User.remove({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    })

    it("has a module", () => {
        expect(User).toBeDefined();
    })
})
