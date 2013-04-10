(function(){
    console.log("Hello Backbone!");

    var obj = new Backbone.Model();

    obj.set({name: "wakame"});
    obj.set({age: 26});

    console.log("obj: " + JSON.stringify(obj));
    console.log("obj.name: " + obj.get("name"));

    //パラメーターの引渡し
    var obj2 = new Backbone.Model({name: "green" , age: 26});

    console.log("obj: " + JSON.stringify(obj2));
}());