//mocha does not come with an assertion library, so we are going to use Chai
import {expect} from "chai"//named reference

describe("Our first test",() => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});