function getData(callback) {
    setTimeout(() => {
        console.log('서버에서 데이터를 받아왔어요.');
        callback();
    }, 5000);
}

getData(() => {
    console.log('후처리...');
});