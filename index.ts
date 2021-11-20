import got from "got";

const cache = new Map();
const r = got("https://example.com/", { cache: cache });
r.on('downloadProgress', () => {
    r.cancel();
});

r.catch(e => console.log(e));
