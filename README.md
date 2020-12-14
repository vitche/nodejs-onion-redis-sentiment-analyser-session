# Node.js Onion Redis Sentiment Analyser session
## Installing the CLI
```shell
npm install -g git+https://github.com/vitche/nodejs-onion-redis-sentiment-analyser-session.git
```
OR
```shell
git clone npm install https://github.com/vitche/nodejs-onion-redis-sentiment-analyser-session.git
cd nodejs-onion-redis-sentiment-analyser-session
npm install
npm install . -g
```
## Using the CLI
```shell
sentiment "{logOn}" "{password}" "{text}"
```
## Sample output
```shell
sentiment "user" "password" "A girl, a pencil, a table."
{ positive: 0.9998995065689087, negative: 0.00010050927085103467 }
```
