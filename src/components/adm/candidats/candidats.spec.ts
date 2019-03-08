import { TestWindow } from '@stencil/core/testing';
import { Candidats } from './candidats';

describe('candidats', () => {
  it('should build', () => {
    expect(new Candidats()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCandidatsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Candidats],
        html: '<candidats></candidats>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
