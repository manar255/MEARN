
import { SquarePipeForLab } from './square.pipe';

describe('1-square pipe (class only) testing:', () => {
  let squarePipe: SquarePipeForLab;
  beforeEach(() => {
    squarePipe = new SquarePipeForLab();
  });
  it('expect to return 16 when passing 4', () => {
    expect(squarePipe.transform(4)).toBe(16);
  });
  it("expect to return 9 when passing '3'", () => {
    expect(squarePipe.transform('3')).toBe(9);
  });
  it("expect to return 'Not a number' when passing wrong parameter", () => {
    expect(squarePipe.transform('a')).toBe('not a number');
  });
});
