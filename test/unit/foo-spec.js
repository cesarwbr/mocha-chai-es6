import { expect } from "chai";

import Foo from '../../app/foo.js';

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect(-1).to.equal([1,2,3].indexOf(5));
      expect(-1).to.equal([1,2,3].indexOf(0));
    });

    it('shoud add two numbers', function() {
      let foo = new Foo();

      expect(foo.add(1, 4)).to.equal(5);
    });
  });
});
