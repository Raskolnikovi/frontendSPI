import { TestWindow } from '@stencil/core/testing';
import { Formations } from './formations';

describe('formations', () => {
  it('should build', () => {
    expect(new Formations()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFormationsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Formations],
        html: '<formations></formations>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
