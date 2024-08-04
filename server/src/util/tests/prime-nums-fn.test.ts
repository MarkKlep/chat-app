import { describe, it } from 'mocha';
import { checkPrime, eratosthenes } from '../prime-nums-fn.ts';
import { assert } from 'chai';

describe('checkPrime', function () {
    it('should return false for 0', function () {
        assert.isFalse(checkPrime(0));
    });

    it('should return false for 1', function () {
        assert.isFalse(checkPrime(1));
    });

    it('should return false for negative numbers', function () {
        assert.isFalse(checkPrime(-1));
    });

    it('should return false for non-integers', function () {
        assert.isFalse(checkPrime(1.5));
    });

    it('should return false for NaN', function () {
        assert.isFalse(checkPrime(NaN));
    });

    it('should return false for 4', function () {
        assert.isFalse(checkPrime(4));
    });

    it('should return true for 2', function () {
        assert.isTrue(checkPrime(2));
    });

    it('should return true for 3', function () {
        assert.isTrue(checkPrime(3));
    });

    it('should return true for 5', function () {
        assert.isTrue(checkPrime(5));
    });

    it('should return true for 11', function () {
        assert.isTrue(checkPrime(13));
    });

    it('should return true for 17', function () {
        assert.isTrue(checkPrime(17));
    });

    it('should return true for 51', function () {
        assert.isFalse(checkPrime(51));
    });

    it('should return true for 97', function () {
        assert.isTrue(checkPrime(97));
    });
});

describe('eratosthenes', function () {
    it('should return an empty array for 0', function () {
        const expectedOutput: number[] = [];

        assert.deepEqual(eratosthenes(0), expectedOutput);
    });

    it('should return an empty array for 1', function () {
        const expectedOutput: number[] = [2, 3, 5, 7, 11, 13];

        assert.deepEqual(eratosthenes(15), expectedOutput);
    });
});
