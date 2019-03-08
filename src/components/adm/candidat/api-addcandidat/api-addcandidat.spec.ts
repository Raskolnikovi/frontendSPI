import { TestWindow } from '@stencil/core/testing';
import { ApiAddcandidat } from './api-addcandidat';

describe('api-addcandidat', () => {
  it('should build', () => {
    expect(new ApiAddcandidat()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLApiAddcandidatElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ApiAddcandidat],
        html: '<api-addcandidat></api-addcandidat>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
