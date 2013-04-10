(function(){
    console.log("Hello Backbone!");

    var obj = new Backbone.Model();

    obj.set({name: "wakame"});
    obj.set({age: 26});

    console.log("obj: " + JSON.stringify(obj));
    console.log("obj.name: " + obj.get("name"));

    var obj2 = new Backbone.Model({name: "green" , age: 25});

    console.log("obj: " + JSON.stringify(obj2));

    //モデル継承
    var Staff = Backbone.Model.extend({
        defults: {
            "name": "defult",
            "age": 0,
            "updateTime": new Date()
        },
        initialize: function(){
            console.log("Staff[" + this.cid + "]: " + JSON.stringify(this));
        }
    });

    var tmpStaff = new Staff ();

    tmpStaff.set({name: "wakame" , age: 24, id: 101});

    console.log("Staff[" + tmpStaff.cid + "]: " + JSON.stringify(tmpStaff));

    var tmpStaff2 = new Staff({name: "green", age: 23 , id: 102});

    var objs = new Backbone.Collection([obj,obj2]);
    console.log("objs: " + JSON.stringify(objs));

    console.log("objs.get(cid): " + JSON.stringify(objs.get("c1")));
    console.log("objs.at(index)" + JSON.stringify(objs.at(0)));

    //add
    objs.add(new Backbone.Model({name: "Acroquerst", age: 22}));
    objs.add(new Backbone.Model({name: "Technology", age: 21}));

    //length
    console.log("objs.length: " + objs.length);
    console.log("objs: " + JSON.stringify(objs));

    //sort and comparator
    objs.comparator = function(item){
        return item.get("age");
    };

    objs.sort();
    console.log("After sort objs: " + JSON.stringify(objs));
    console.log("After sort objs.at(index): " + JSON.stringify(objs.at(0)));

    //remove
    objs.remove(obj2);
    console.log("objs.length: " + objs.length);
    console.log("objs: " + JSON.stringify(objs));

    //each
    objs.each(function(item, index){
        console.log("each(" + index + "): " + JSON.stringify(item));
    });

    //find
    var tmpObj = objs.find(function(item){
        return item.get("age") === 26;
    });
    console.log("find result: " + JSON.stringify(tmpObj));

    //filter
    tmpObj = objs.filter(function(item){
        return item.get("age") === 26;
    });
    console.log("filter result: " + JSON.stringify(tmpObj));

    //where
    tmpObj = objs.where({age: 26});
    console.log("where result: " + JSON.stringify(tmpObj));

    //max
    tmpObj = objs.max(function(item){
        return item.get("age");
    });
    console.log("max result: " +JSON.stringify(tmpObj));

    //map
    tmpObj = objs.map(function(item){
        return item.get("age") + 1;
    });
    console.log("map result: " + JSON.stringify(tmpObj));

    //reduce
    tmpObj = objs.reduce(function(memo,item){
        return memo + item.get("age");
    });
    console.log("reduce result: " + JSON.stringify(tmpObj));

    //pluck
    console.log("pluck result: " + JSON.stringify(objs.pluck("name")));
}());