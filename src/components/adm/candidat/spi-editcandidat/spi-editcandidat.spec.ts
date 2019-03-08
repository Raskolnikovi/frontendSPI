import { TestWindow } from '@stencil/core/testing';
import { SpiEditcandidat } from './spi-editcandidat';

describe('spi-editcandidat', () => {
  it('should build', () => {
    expect(new SpiEditcandidat()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSpiEditcandidatElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SpiEditcandidat],
        html: '<spi-editcandidat></spi-editcandidat>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
