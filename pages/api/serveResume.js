import express from 'express';
import path from 'path';

const PORT = 5000;
const app = express();

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, result => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

async function handler(req, res) {
    await runMiddleware(req, res, app);
    await app.use('/assets', express.static(path.join(__dirname, 'assets')));
    await app.listen(PORT, function() {
        console.log(`Express server listening on port ${PORT}`);
    });

    // Rest of the API logic
    // res.json({ message: 'Hello Everyone!' });
}

export default handler;
