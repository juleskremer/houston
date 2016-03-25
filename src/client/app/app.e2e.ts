import {HoustonPage} from './app.po';

const BASE_URL = 'http://localhost:4200';

describe('houston App', function() {
  let page: HoustonPage;

  beforeEach(() => { page = new HoustonPage(); });

  it('should display the app title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Houston');
  });

  it('should redirect to /developers after bootstrap', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual(BASE_URL + '/developers');
  });
});
