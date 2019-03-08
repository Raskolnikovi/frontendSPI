import { TestWindow } from '@stencil/core/testing';
import { Promotions } from './promotions';

describe('promotions', () => {
  it('should build', () => {
    expect(new Promotions()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPromotionsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Promotions],
        html: '<promotions></promotions>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
