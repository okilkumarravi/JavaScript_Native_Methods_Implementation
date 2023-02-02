//apply
function printName(addr){
    console.log(this.firstName + " " + this.lastName  + " " + addr[0] + " " + addr[1]);
}

Function.prototype.$apply = function(context){
    context = context ? Object(context) : window;
    context.callerFn = this;

    const args = []
    for (let index = 1; index < arguments.length; index++) {
        args.push(arguments[index]);
    }

    context.callerFn(args);
}

printName.$apply(name1, "Aurangabad", "barun");
printName.$apply(name2, "Sitamarhi", "Unknown");
