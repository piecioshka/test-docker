const fetch = require('node-fetch');

const url = `http://192.168.0.227/@json/50.json`

async function go() {
    console.log('fn go called');
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

go().catch(console.log);
