describe('basic', () => {
  it('"before"이 "after"로 바뀐다', async function () {
    const beforeValue = 'before'

    expect(beforeValue).toBe('after')
    expect('before').toBe('after')
  });
});
