export class HoustonPage {
  navigateTo() { return browser.get('/'); }

  getTitle() {
    // TODO(i): use getText() instead, but we need to fix stylesheet not to hide the title
    //          on small screens
    return element(by.className('mdl-layout-title')).getInnerHtml();
  }
}
