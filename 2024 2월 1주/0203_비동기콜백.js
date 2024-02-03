function login(username, callback) {
    setTimeout(() => {
        callback(username);
    }, 1000);
};

function addToCart(product, callback) {
    setTimeout(() => {
        callback(product)
    }, 1000);
};

function makePayment(cardNumber, product, callback) {
    console.log(`${username}님 안녕하세요`);
    addToCart(`감자`, (product) => {
        console.log(`${product}를 장바구니에 넣었습니다.`)
    })
}

login('별코딩', (username) => {
    console.log(`${username}님 안녕하세요`);
    addToCart('감자', (product) => {
        console.log(`${product}를 장바구니에 넣었습니다.`);
        makePayment("10000000", product, (cardNumber, Item) => {
            console.log(`${cardNumnber.slice(0,6)}로 ${product}를 구매했습니다.`)

        })
    })
})

//대단한건 아니고 함수안에 함수를 넣어서 순서대로 실행 -> 콜백 지옥