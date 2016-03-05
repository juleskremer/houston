import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {ICommunity} from '../../services/communities/community';
import {Observable} from 'rxjs';
import {CommunityEditFormComponent} from './community-editform';
import {Store} from '@ngrx/store';
import {AppStore} from '../../services/store/AppStore';
import {CommunitiesService} from '../../services/communities/communities.service';
import {Router} from 'angular2/router';

@Component({
    selector: 'community-edit',
    directives: [CommunityEditFormComponent],
    template:`
        <community-editform [community]="communities$ | async" 
        (save)="saveEvent($community)"
        (cancel)="onCancel()">`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityEditComponent {
   
    community$: Observable<ICommunity>;

    constructor(private _router: Router, private store: Store<AppStore>, private _eventsService: CommunitiesService) 
    {
        this.community$ = store.select('selectedCommunity');
    }
    
    saveCommunity(community: ICommunity){
        //TODO:  Need to confirm save & route or show notification
        this._eventsService.saveCommunity(community); 
    }
    
    onCancel(){
        //TODO:  Can I set this to null here or not?
        this.store.dispatch({type: 'SELECT_EVENT', payload: null});
        this._router.navigate(['CommunitiesListing']);
    }
}