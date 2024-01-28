import { Locator, Page } from "@playwright/test";

type Event = {
  tag: string;
  img: string;
  price: string;
  date: string;
  name: string;
}

export type AddEvent = {
  title: string;
  category: 'Concert' | 'Festival' | 'Party' | 'Art';
  price: string;
  dateFrom: string;
  dateTo: string;
}

export class Events {
  private page: Page;

  searchInput: Locator;
  addNewEventButton: Locator;
  saveNewEventButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchInput = this.page.getByTestId('events-search-input');
    this.addNewEventButton = this.page.getByTestId('add-new-event-button');
    this.saveNewEventButton = this.page.getByTestId('add-new-event-dialog-save-button');
  }

  async addEvent(event: AddEvent) {
    await this.addNewEventButton.click();

    await this.page.locator('#name').fill(event.title);

    await this.page.locator('#category').click();
    await this.page.locator(`.p-dropdown-item[aria-label="${event.category}"]`).click();

    await this.page.locator('#price > input').pressSequentially(event.price);

    await this.page.locator('#dateFrom').fill(event.dateFrom);
    await this.page.locator('#dateTo').fill(event.dateTo);

    await this.saveNewEventButton.click();
  }

  async searchEvents(searchTerm: string) {
    await this.searchInput.fill(searchTerm);
  }

  async getEvents(): Promise<Event[]> {
    const events: Event[] = [];

    const eventCards = await this.page.locator('.p-dataview-content .card').all();

    for (const eventCard of eventCards) {
      const tag = await eventCard.locator('.pi-tag ~ span').textContent();
      const img = await eventCard.locator('img').getAttribute('src');
      const price = await eventCard.locator('.pi-money-bill ~ small').textContent();
      const date = await eventCard.locator('.pi-calendar ~ small').textContent();
      const name = await eventCard.locator('div.text-xl').textContent(); 

      events.push({ 
        tag, 
        img, 
        price, 
        date, 
        name
      });
    }

    return events;
  }
}
