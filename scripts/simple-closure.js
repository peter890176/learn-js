function makeFunc() {
    const name = 'Mozilla';
    const value = 10;
    function dispName() {
        console.log(name);
    }
    return dispName;
}

const f = makeFunc();
f();