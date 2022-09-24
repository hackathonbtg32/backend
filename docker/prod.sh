npm install --prefer-dist
npm install -g ts-node
npm run build
npm install pm2 -g

cp .env dist/.env
pm2-runtime dist/app.js
