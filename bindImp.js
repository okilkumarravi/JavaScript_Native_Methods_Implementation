//bind
function printName(addr){
    console.log(this.firstName + " " + this.lastName  + " " + addr[0] + " " + addr[1]);
}

Function.prototype.$bind = function(context, ...args){
    let fn = this;
    return function() {
        fn.call(context, ...args)
    }

}

fn = printName.$bind(name1, ["Aurangabad", "barun"]);
fn();
fn = printName.$bind(name2, ["Sitamarhi", "Unknown"]);
fn();