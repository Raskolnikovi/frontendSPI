import { TestWindow } from '@stencil/core/testing';
import { Enseignant } from './enseignant';

describe('enseignant', () => {
  it('should build', () => {
    expect(new Enseignant()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLEnseignantElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Enseignant],
        html: '<enseignant></enseignant>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
