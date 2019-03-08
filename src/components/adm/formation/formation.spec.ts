import { TestWindow } from '@stencil/core/testing';
import { Formation } from './spi-formation';

describe('formation', () => {
  it('should build', () => {
    expect(new Formation()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFormationElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Formation],
        html: '<formation></formation>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
