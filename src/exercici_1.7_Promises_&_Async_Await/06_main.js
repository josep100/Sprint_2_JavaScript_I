const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resultado 1");
        }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resultado 2");
        }, 3000);
});

Promise.all([promesa1, promesa2])
    .then((values) => {
        console.log(values);
    })
;