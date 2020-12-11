#!/usr/bin/env node
const environment = require("dotenv");
let Session = require('./session');

environment.config();

if (5 > process.argv.length) {
    console.log('Usage: sentiment "{logOn}" "{password}" "{text}"');
} else {
    let logOn = process.argv[2];
    let password = process.argv[3];
    let value = process.argv[4];
    const session = new Session(async () => {

        // Try to authenticate
        const authenticateResult = await session.authenticate(logOn, password);
        let token = authenticateResult.token;
        // console.log("Authenticated token", token);
        if (!token) {

            // Try to register
            const registerResult = await session.register(logOn, password);
            token = registerResult.token;
            // console.log("Registered token", token);
        }

        // Process the required value
        const result = await session.process(token, value);
        console.log(result);

        // TODO: A better termination
        process.exit(0);
    });
}
