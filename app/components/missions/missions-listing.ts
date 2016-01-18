import {Component, OnInit} from 'angular2/core';
import {MissionsService} from '../../services/missions/mission.service';
import {Mission} from '../../services/missions/mission';
import {Router} from 'angular2/router';

@Component({
  
  selector: 'missions-listing',
  templateUrl: 'app/components/missions/missions-listing.html',
  styleUrls: [],
  providers: [],
  directives: [],
  pipes: []
})
export class MissionsListingComponent implements OnInit {
  missions: Mission[] = [];
  
  constructor(
    private _router: Router,
    private _service: MissionsService){}
  
  ngOnInit() {
    this._service.getMissions().then(missions => this.missions = missions);
  }
  
  onSelect(mission: Mission) {
    this._router.navigate( ['MissionDetail', { id: mission.gitID }] );
  }
}