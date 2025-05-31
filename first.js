class Parson {
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing")
    }
}

class Engineer extends Parson {
    work() {
        console.log("solve problom, build something");
    }
}

class Doctor extends Parson {
     work() {
        console.log("treat patients");
    }
}


let ankitobj = new Engineer();