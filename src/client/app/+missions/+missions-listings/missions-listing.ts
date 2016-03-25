import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Mission, MissionsService} from '../../missions';


@Component({

  selector: 'missions-listing',
  templateUrl: 'app/+missions/+missions-listings/missions-listing.html',
  styleUrls: [],
  providers: [],
  directives: [],
  pipes: []
})
export class MissionsListingComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private _router: Router, private _service: MissionsService) {}

  ngOnInit() { this._service.getMissions().then(missions => this.missions = missions); }

  onSelect(mission: Mission) { this._router.navigate(['MissionDetail', {id: mission.gitID}]); }
}
