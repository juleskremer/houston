import {EventEmitter, Output, Component, Input, ChangeDetectionStrategy} from 'angular2/core';

import {COMMUNITY_TYPES} from '../../_/const/const';
import {ICommunity} from '../../_/communities';


@Component({
  selector: 'community-editform',
  templateUrl: 'app/communities/community-editform.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  inputs: ['community'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityEditFormComponent {
  submitted = false;
  communityTypes = COMMUNITY_TYPES;

  @Output()
  save: EventEmitter<ICommunity> = new EventEmitter();
  @Output()
  cancel: EventEmitter<ICommunity> = new EventEmitter();

  originalID: string;
  selectedCommunity: ICommunity;

  @Input('community')
  set community(value: ICommunity) {
    if (value) this.originalID = value.id;
    this.selectedCommunity = Object.assign({}, value);
  }

  onSubmit() { this.submitted = true; }
}