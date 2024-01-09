function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(person,stamia > 50) {
                person.stamia -= 30;
                resolve({
                    result: `${name} success`
                });
            } else {
                reject(new Error( `${name} failed`));
            }
        }, 1000);
    });
};

const harin = {stamia, 100};

const excute = async function () {
    try {
        let v = await doJob('work', harin);
        console.log(v.result);
        v = await doJob('study', harin);
        console.log(v.result);
        v = await doJob ('work', harin);
        console.log(v.result);
        v = await doJob('study', harin);
    } catch (e) {
        console.log(e);
    }
}

execute();