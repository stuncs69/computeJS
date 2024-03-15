import { ProcessorTypes } from "./enums";

export class Thread {
    private _thread;

    constructor(proc: { processorType: ProcessorTypes, gates?: Array<(a: number, b: number) => number>, instructions?: Array<() => any> }) {
        this._thread = proc;
    }
}

export class Processor {
    public _cores: Array<Thread> = [];
    private _replica;

    constructor(proc: { processorType: ProcessorTypes, gates?: Array<(a: number, b: number) => number>, instructions?: Array<() => any> }) {
        this._cores.push(new Thread(proc))
        this._replica = proc;
    }

    public addThreads(cores: number) {
        for (let i = 0; i < cores; i++) {
            this._cores.push(new Thread(this._replica))
        }
    }
}