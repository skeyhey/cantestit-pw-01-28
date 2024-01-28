import {test} from '@playwright/test';

// 1. beforeAll
test.beforeAll(async () => {
  console.log('BEFORE ALL');
})

// 2. beforeEach
// 5. beforeEach
test.beforeEach(async ({page}) => {
  console.log('BEFORE EACH');
});

// 8. afterAll
test.afterAll(async () => {
  console.log('AFTER ALL');
});

// 4. afterEach
// 7. afterEach
test.afterEach(async ({page}) => {
  console.log('AFTER EACH');
});

// 3. test - 1
test('TEST - 1', async ({page}) => {
  console.log('TEST - 1');
});

// 6. test - 2
test('TEST - 2', async ({page}) => {
  console.log('TEST - 2');
});
