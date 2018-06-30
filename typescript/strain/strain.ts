interface Predicate<T> {
    (element: T): boolean
}

const keep = <T>(collection: T[], predicate: Predicate<T>): T[] => {
    const filtered: T[] = []
    collection.forEach((e) => predicate(e) && filtered.push(e))
    return filtered
}

const discard = <T>(collection: T[], predicate: Predicate<T>): T[] => {
    return keep<T>(collection, (e) => !predicate(e))
}

export { keep, discard }
