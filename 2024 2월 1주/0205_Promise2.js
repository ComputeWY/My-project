function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 50) {
                resolve({
                    result: `${name} success`,
                    loss: 30
                });
            } else {
                reject(new Error(`${name} failed`));
            }
        }, 1000);
    });
}

const harin = { stamina: 100 }; // 수정: statmina -> stamina

doJob('work', harin)
    .then(v => {
        console.log(v.result);
        harin.stamina -= v.loss; // 수정: statmina -> stamina
        return doJob('study', harin);
    })

    .then(v => {
        console.log(v.result);
        harin.stamina -= v.loss; // 수정: statmina -> stamina
        return doJob('work', harin);
    })

    .then(v => {
        console.log(v.result);
        harin.stamina -= v.loss; // 수정: statmina -> stamina
        return doJob('study', harin);
    })

    .catch(e => console.error(e));
