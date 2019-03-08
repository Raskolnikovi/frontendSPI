import { TestWindow } from '@stencil/core/testing';
import { SpiSearch } from './spi-search';

describe('spi-search', () => {
  it('should build', () => {
    expect(new SpiSearch()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSpiSearchElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SpiSearch],
        html: '<spi-search></spi-search>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
