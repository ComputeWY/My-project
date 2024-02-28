function readData() {
    let json = '{ "age": 30 }';
  
    try {
      // ...
      blabla(); // 에러!
    } catch (e) {
      // ...
      if (!(e instanceof SyntaxError)) {
        throw e; // 알 수 없는 에러 다시 던지기
      }
    }
  }
  
  try {
    readData();
  } catch (e) {
    alert( "External catch got: " + e ); // 에러를 잡음
  }