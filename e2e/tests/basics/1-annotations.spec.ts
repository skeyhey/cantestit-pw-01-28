import { test } from '@playwright/test';

test('TEST', async () => {
  console.log('TEST');
});

// test.only('TEST ONLY', async () => {
//   console.log('TEST ONLY');
// });

// // FIXME: flow was redesigned, so this test will fail
// test.skip('TEST SKIP', async () => {
//   console.log('TEST SKIP');
// });

// test.fixme('TEST FIXME', async () => {
//   console.log('TEST FIXME');
// });

// test('TEST - SKIP BROWSER - FIREFOX', async ({ browserName }) => {
//   test.skip(browserName === 'firefox', 'This feature is not supported in Firefox');

//   console.log('TEST - SKIP BROWSER - FIREFOX');
// });

test.describe('TEST DESCRIBE', () => {
  test('TEST DESCRIBE - 1', async () => {
    console.log('TEST DESCRIBE - 1');
  });

  test('TEST DESCRIBE - 2', async () => {
    console.log('TEST DESCRIBE - 2');
  });
});

test.describe.skip('TEST DESCRIBE SKIP', () => {
  test('TEST DESCRIBE SKIP - 1', async () => {
    console.log('TEST DESCRIBE - 1');
  });

  test('TEST DESCRIBE SKIP - 2', async () => {
    console.log('TEST DESCRIBE - 2');
  });
});
