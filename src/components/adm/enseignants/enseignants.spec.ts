import { TestWindow } from '@stencil/core/testing';
import { Enseignants } from './spi-enseignants';

describe('enseignants', () => {
  it('should build', () => {
    expect(new Enseignants()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLEnseignantsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Enseignants],
        html: '<enseignants></enseignants>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
