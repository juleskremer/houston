import {Component, OnInit} from 'angular2/core';
import {MissionsService} from '../../services/missions/mission.service';
import {Mission} from '../../services/missions/mission';
import {RouteParams, Router} from 'angular2/router';
@Component({
  selector: 'my-mission-detail',
  templateUrl: 'app/components/missions/mission-detail.html',
  inputs: ['mission']
})
export class MissionDetailComponent {
  public mission: Mission;
  
  constructor(
  private _router:Router,
  private _routeParams:RouteParams,
  private _service:MissionsService){}
  
  ngOnInit() {
  let id = this._routeParams.get('id');
  this._service.getMission(id).then(mission => this.mission = mission);
}
  onSelect(mission: Mission) {
    this._router.navigate( ['MissionEdit', { id: mission.gitID }] );
  }
  
  gotoMissions() {
  this._router.navigate(['MissionsListing']);
}
  
}