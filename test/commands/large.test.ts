import { expect, test } from '@oclif/test';

describe('large', () => {
    test
        .stdout()
        .command(['large'])
        .it('runs large', () => {
            expect(true).to.be.true;
        });
});
