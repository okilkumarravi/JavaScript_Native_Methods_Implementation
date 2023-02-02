//Call
function printName(addr, post){
    console.log(this.firstName + " " + this.lastName  + " " + addr + " " + post);
}

Function.prototype.$call = function(context){
    context = context ? Object(context) : window;
    context.callerFn = this;

    const args = []
    for (let index = 1; index < arguments.length; index++) {
        args.push('arguments['+index+']');
    }

    let fnString = 'context.callerFn('+args+')';
    const result = eval(fnString);
    result;
}

printName.$call(name1, "Aurangabad", "barun");
printName.$call(name2, "Sitamarhi", "Rasalpur");
