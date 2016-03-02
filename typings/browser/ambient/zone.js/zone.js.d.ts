// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/9027703c0bd831319dcdf7f3169f7a468537f448/zone.js/zone.js.d.ts
// Type definitions for Zone.js
// Project: https://github.com/angular/zone.js
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Zone {
    constructor(parentZone: Zone, data: any);

    fork(locals?: {[key: string]: any}): Zone;
    bind(fn: Function, skipEnqueue?: boolean): void;
    bindOnce(fn: Function): any;
    run(fn: Function, applyTo?: any, applyWith?: any): void;
    isRootZone(): boolean;

    static bindPromiseFn<T extends () => Promise<any>>(fn: T): T;

    static longStackTraceZone: {[key: string]: any};
}