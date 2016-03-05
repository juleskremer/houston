import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import {ICommunity} from '../../services/communities/community';
import {Observable} from 'rxjs';
import {EventEmitter, Output} from 'angular2/core';
import {COMMUNITY_TYPES} from '../../const/const';

@Component({
    selector: 'community-editform',
    templateUrl: 'app/components/communityies/community-editform.html',
    styles: ['.mdl-textfield__label {top: 0;}'],
    inputs: ['community'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityEditFormComponent {
    submitted = false;
    selectedType = {};
    communityTypes = COMMUNITY_TYPES;

    //@Input() community: ICommunity;
    @Input('community') _community: ICommunity;
    @Output() save: EventEmitter<ICommunity> = new EventEmitter();
    @Output() cancel: EventEmitter<ICommunity> = new EventEmitter(); 

    originalID: string;
    selectedCommunity: ICommunity;
    
    set _community(value: ICommunity){
        if (value) this.originalID = value.id;
        this.selectedCommunity = Object.assign({}, value);
    }

    onSubmit() { 
        this.submitted = true; 
    }
    
    onTypeChange(community){
        this.selectedCommunity.type = event.target.options.selectedIndex; 
        this.selectedType = COMMUNITY_TYPES[event.target.options.selectedIndex]
    }

}