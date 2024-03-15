import { Board } from "./core/board";
import { ProcessorTypes } from "./core/enums";
import { Processor } from "./core/processor";

const x = new Processor({
    processorType: ProcessorTypes.Basic,
    gates: [
        function XOR(a, b) {
            return (a || b) && !(a && b) ? 1 : 0
        },
        function OR(a, b) {
            return a || b ? 1 : 0
        },
        function AND(a, b) {
            return a && b ? 1 : 0;
        },
        function NOT(a) {
            return a === 0 ? 1 : 0;
        }    
    ]
})

const y = new Board()

x.addThreads(7) // 8 total threads: octa-core

y.addProcessor(x) // add processor to board