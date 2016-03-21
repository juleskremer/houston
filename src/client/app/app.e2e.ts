import { HoustonPage } from './app.po';

describe('houston App', function() {
  let page: HoustonPage;

  beforeEach(() => {
    page = new HoustonPage();
  });

  it('should display the app title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Houston');
  });
});
