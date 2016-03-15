import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HTTP_PROVIDERS} from 'angular2/http';
import {DeveloperService} from './services/developers/developer.service';
import {provideStore} from '@ngrx/store';
import {developers, events, communities, contents} from './services/store/appstore';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    DeveloperService,
    provideStore({
            developers,
            events,
            communities,
            contents
     })
])
.catch(err => console.error(err));