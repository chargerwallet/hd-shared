export type Deferred<T, I = any, D = any> = {
    id?: I;
    data?: D;
    promise: Promise<T>;
    resolve: (t: T) => void;
    reject: (e: Error) => void;
};
export declare function createDeferred<T, I = any, D = any>(arg?: I, data?: D): Deferred<T, I, D>;
//# sourceMappingURL=deferred.d.ts.map