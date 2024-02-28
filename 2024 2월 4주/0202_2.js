var obj = {};
 for (var i = 0; i < 0; i++) {
    obj['key' + i] = i;
 }

 console.log(obj);

 var profile = 'chloe:30';
 var person = {
    [profile] : true,
    [profile.split(':')[0]] : profile.split(':')[1]
 };

 console.log(person);