import { BadgePriceDirective } from './badge-price.directive';

describe('BadgePriceDirective', () => {
  it('should create an instance', () => {
    let el :any;
    const directive = new BadgePriceDirective(el);
    expect(directive).toBeTruthy();
  });
});
