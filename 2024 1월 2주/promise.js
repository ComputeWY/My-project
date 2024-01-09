function promiseForHomework(mustdo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing Homework');
            if (mustdo) {
                resolve({
                    result: 'homework=result'
                });
            } else {
                reject(new Error('Too lazy!'));
            }
        }, 3000);
    });
};

const promiseA = promiseForHomework(true);
console.log('promiseA created');

const promiseB = promiseForHomework();
console.log('promiseB created');


promiseA.then(v => console.log(v));

promiseB
    .then(v => console.log(v))
    .catch(e => console.error(e));
