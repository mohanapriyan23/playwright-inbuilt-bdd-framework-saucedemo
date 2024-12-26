import { BasePage } from './base.page';
import { InventoryLocators } from '../locators/inventory.locators';

export class InventoryPage extends BasePage {
  async assertInventoryPageLoaded() {
    await this.assertText(InventoryLocators.inventoryTitle, 'Products');
  }

  async getItemCount() {
    return await this.page.locator(InventoryLocators.inventoryItems).count();
  }
}
