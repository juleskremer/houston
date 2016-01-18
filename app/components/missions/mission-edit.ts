import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {MissionsService} from '../../services/missions/mission.service';
import {Mission} from '../../services/missions/mission';
import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'mission-edit',
  templateUrl: 'app/components/missions/mission-edit.html',
  inputs: ['mission']
})
export class MissionEditComponent {
  public mission: Mission;
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  constructor(
  private _router:Router,
  private _routeParams:RouteParams,
  private _service:MissionService){}
  
  ngOnInit() {
  let id = this._routeParams.get('id');
  this._service.getMission(id).then(mission => this.mission = mission);
}
  
}