import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {provideStore} from '@ngrx/store';

import {AppComponent} from './app.component'
import {DeveloperService} from './_/developers';
import {developers, events, communities} from './_/store';


bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    DeveloperService,
    provideStore({
            developers,
            events,
            communities,
     })
])
.catch(err => console.error(err));