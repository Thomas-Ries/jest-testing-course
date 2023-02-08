export default async function sleep(t) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() =>  { ... }, t * 100)
    })
}