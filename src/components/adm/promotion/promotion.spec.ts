import { TestWindow } from '@stencil/core/testing';
import { Promotion } from './promotion';

describe('promotion', () => {
  it('should build', () => {
    expect(new Promotion()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLPromotionElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Promotion],
        html: '<promotion></promotion>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
