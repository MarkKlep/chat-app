export const checkPrime = (number: number): boolean => {
    if (number <= 1 || isNaN(number) || !Number.isInteger(number)) {
        return false;
    }

    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    const sqrtNum = Math.floor(Math.sqrt(number));
    let curr = 5;

    while (curr <= sqrtNum) {
        if (number % curr === 0) {
            return false;
        }

        curr++;
    }

    return true;
};

export const eratosthenes = (N: number): number[] => {
    let nums = Array.from({ length: N - 1 }, (_, i) => i + 2);

    let p = 2;
    while (p ** 2 <= N) {
        nums = nums.filter((num) => num % p !== 0 || num === p);
        p = nums.find((num) => num > p)!;
    }

    return nums;
};
