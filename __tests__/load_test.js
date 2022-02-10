const fs = require('fs').promises;
const path = require('path');

const MarkdownConverter = require('../lib/index');

async function getFileContents(file) {
  return fs.readFile(path.resolve(__dirname, file));
}

describe('MarkdownConverter', () => {

  it('should instantiate', () => {
    const instance = new MarkdownConverter();
    expect(instance).toBeInstanceOf(MarkdownConverter);
  });

  it('should convert a markdown file', async () => {
    const instance = new MarkdownConverter();
    const contents = await getFileContents("./markdown/test1.md");
    expect(contents).toBeInstanceOf(Buffer);
  });

});
