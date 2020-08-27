class Methods {

    someVar: string = 'some string';

    method1(digit: number): void {
        console.log(digit);
    }

    method2(): string {
        return 'HELLO TypeScript';
    }

    method3(message?: string): void {
        console.log(message);
    }

    method4(msg1: string, msg2 = 'MSG2'): void {
        console.log(msg1, msg2);
    }

    method5 = arrowMsg1 => console.log('Some message e.g. attention'+ ' '+ arrowMsg1);
    method6 = (): string => {return 'some attention'};
    method7 = (msg22: string): string => {return 'Another arrow method'};

    methodThisProblem() {
        return function name() {
            console.log(this.someVar);
        }
    }

    methodThisProblemArrow(){
        return () => {
            console.log(this.someVar);
        }
    }

}

let example1 = new Methods();
example1.method1(33);
let m2 = example1.method2();
console.log(m2);
example1.method3('Some message');
example1.method3();
example1.method3('Method3');
example1.method4('ala ma kota');   
example1.method5('arrowMsg1');
let met6 = example1.method6();
console.log(met6);
let met7 = example1.method7('MESSAGE 22');
console.log(met7);
let funThis = example1.methodThisProblem();
funThis();
let funThisArrow = example1.methodThisProblemArrow();
funThisArrow();