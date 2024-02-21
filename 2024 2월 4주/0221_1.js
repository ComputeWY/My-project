// user 객체 정의
let user = {};

// age 프로퍼티 정의 (getter와 setter를 이용)
Object.defineProperty(user, "age", {
    get: function() {
        return this._age;
    },
    set: function(age) {
        if (age < 0) {
            console.error('0보다 작은 값은 올 수 없습니다.');
        } else {
            this._age = age;
        }
    },
    enumerable: true // 프로퍼티를 열거할 수 있도록 설정
});

// age 프로퍼티에 값 할당 및 출력
user.age = 10;
console.log(user.age); // 출력: 10

// 잘못된 값 할당하여 오류 메시지 출력
user.age = -1; // 콘솔에 오류 메시지 출력됨

// user2 객체 정의
let user2 = {
    _name: "", // _name 프로퍼티 선언
    // name 프로퍼티 getter 정의
    get name() {
        return this._name;
    },
    // name 프로퍼티 setter 정의
    set name(val) {
        if (val.length < 3) {
            throw new Error('3자 이상이어야 합니다.');
        }
        this._name = val;
    }
};

// name 프로퍼티에 값 할당 및 출력
user2.name = 'harin';
console.log(user2.name); // 출력: harin

// 잘못된 값 할당하여 오류 발생
try {
    user2.name = 'ha';
} catch (error) {
    console.error(error); // 출력: Error: 3자 이상이어야 합니다.
}
