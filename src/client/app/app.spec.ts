import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AppComponent} from './app.ts';

beforeEachProviders(() => [AppComponent]);

describe('Houston App', () => {

  it('should initiate the data service upon bootstrap', inject([AppComponent], (app: AppComponent) => {
    expect(app['_dataService'].developers$).toBeDefined();
  }));

});

