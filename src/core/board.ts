import { Processor, Thread } from "./processor";

export class Board {
    private cores: Array<Thread>;

    addProcessor(proc: Processor) {
        this.cores = proc._cores;
    }
}