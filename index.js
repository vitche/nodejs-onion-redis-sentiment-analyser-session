const OnionRedis = require('nodejs-onion-redis-call');

function Client(callback) {
    let Instance = new OnionRedis(
        process.env.ONION_REDIS_URI,
        undefined,
        function (error) {
            if (undefined !== error) {
                console.log(error);
                return;
            }
            callback();
        }).Namespace('dev.hype').Class('SentimentAnalyser');
    Instance.authenticate = async function (logOn, password) {
        const request = {
            logOn,
            password
        };
        return new Promise((resolve) => {
            Instance.consume("Authenticate", request, function (response) {
                resolve(response);
            });
        });
    };
    Instance.process = async function (token, value) {
        const parameters = {
            token,
            value
        };
        return new Promise((resolve) => {
            Instance.consume('Process', parameters, function (response) {
                resolve(response);
            });
        });
    };
    Instance.register = async function (logOn, password) {
        const request = {
            logOn,
            password
        };
        return new Promise((resolve) => {
            Instance.consume("Register", request, function (response) {
                resolve(response);
            });
        });
    };
    return Instance;
}

module.exports = Client;
