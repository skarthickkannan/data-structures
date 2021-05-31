class Stack {
    constructor() { }
    prime() {
        let x;
        let i;
        for (i = 1; i <= 10000; i++) {
            for (x = 2; x <= i; x++) {
                if (x !== 2) {
                }
                if (i % x === 0) {
                    break;
                }
                else {
                    continue;
                }
            }
            if (i === x) {
                console.log(i);
            }
        }
    }
}
let s1 = new Stack();
s1.prime();
//# sourceMappingURL=prime.js.map