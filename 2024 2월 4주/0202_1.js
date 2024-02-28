var family = {
  address: "Seoul",
  menbers: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: names,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(30, "chole", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");

var printMembers = function () {
  var members = family.members;
  for (role in members) {
    console.log(
      "role => " +
        role +
        ", name => " +
        family.members[role].name +
        " => " +
        family.members[role].age
    );
  }
};
