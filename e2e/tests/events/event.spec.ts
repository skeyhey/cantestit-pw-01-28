import { test, expect } from '@playwright/test';
import { Users } from '../../config/users';
import { EventsPage } from '../../pages/EventsPage';
import { LoginPage } from '../../pages/LoginPage';
import { AddEvent } from '../../components/Events';

let loginPage: LoginPage;
let eventsPage: EventsPage;

test.beforeEach(async ({page}) => {
  loginPage = new LoginPage(page);
  eventsPage = new EventsPage(page);

  await loginPage.login(Users.Test);
});

test('should be able to search events', async ({page}) => {
  const searchTerm = 'muay';

  await eventsPage.events.searchEvents(searchTerm);

  const events = await eventsPage.events.getEvents();

  expect(events.length).toBeGreaterThan(0);

  for (const event of events) {
    expect(event.name.toLowerCase()).toContain(searchTerm.toLowerCase());
  }
});


// EXERCISE: Implement the add event test

// Steps:
// 1. Create method addEvent in Events.ts class
// 2. In test body use first addEvent method, and then getEvents() method to get all events
// 3. Assert that events array length is greater than 0
// 4. Assert that in the events list there is an event with new event name [the one you've added].

test.only('should be able to add new event', async ({page}) => {
  const event: AddEvent = {
    title: `test-event-${Date.now()}`,
    category: 'Party',
    price: '1',
    dateFrom: '01/01/2024',
    dateTo: '02/01/2024'
  };

  await eventsPage.events.addEvent(event);

  const events = await eventsPage.events.getEvents();

  expect.soft(events.length).toBeGreaterThan(0);
  const newEvent = events.pop();

  // FIXME: This assertion is failing, because the name is not the same as the title
  expect(newEvent.name).toBe(event.title);
});
