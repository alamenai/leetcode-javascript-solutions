
export class TimeLimitedCache {
    private cache: Map<number, { value: number, timeout: NodeJS.Timeout }>

    constructor() {
        this.cache = new Map<number, { value: number, timeout: NodeJS.Timeout }>();
    }

    set(key: number, value: number, duration: number): boolean {

        const isExist = this.cache.has(key)
        if (isExist) {
            clearTimeout(this.cache.get(key)?.timeout);
        }

        this.cache.set(key, {
            value, timeout: setTimeout(() => {
                this.cache.delete(key);
            }, duration)
        })

        return isExist

    }

    get(key: number): number {
        return this.cache.get(key)?.value || -1
    }

    count(): number {
        return this.cache.size
    }
}
