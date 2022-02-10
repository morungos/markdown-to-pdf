const MarkdownConverter = require('../lib/index');

describe('MarkdownConverter', () => {

  it('should instantiate', () => {
    const instance = new MarkdownConverter();
    expect(instance).toBeInstanceOf(MarkdownConverter);
  });

});
