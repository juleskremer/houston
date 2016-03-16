import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Mission, MissionsService} from '../../_/missions';


@Component({
  selector: 'mission-edit',
  templateUrl: 'app/missions/mission-edit/mission-edit.html',
  inputs: ['mission']
})
export class MissionEditComponent {
  public mission:Mission;

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor(private _router:Router,
              private _routeParams:RouteParams,
              private _service:MissionsService) {
  }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getMission(id).then(mission => this.mission = mission);
  }

}