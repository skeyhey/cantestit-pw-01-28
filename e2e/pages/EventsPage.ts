import { Page } from "@playwright/test";
import { SideMenu } from "../components/SideMenu";
import { Events } from "../components/Events";

export class EventsPage {
  sideMenu: SideMenu;
  events: Events;

  constructor(page: Page) {
    this.sideMenu = new SideMenu(page);
    // this.footer = new Footer(page)
    this.events = new Events(page);
    // this.navbar = new Navbar(page)
  }
}
