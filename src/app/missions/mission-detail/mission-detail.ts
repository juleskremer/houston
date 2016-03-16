import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Mission, MissionsService} from '../../_/missions';


@Component({
    selector: 'my-mission-detail',
    templateUrl: 'app/missions/mission-detail/mission-detail.html',
    inputs: ['mission']
})
export class MissionDetailComponent {
    public mission: Mission;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _service: MissionsService) { }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getMission(id).then(mission => this.mission = mission);
    }
    onSelect(mission: Mission) {
        this._router.navigate(['MissionEdit', { id: mission.gitID }]);
    }

    gotoMissions() {
        this._router.navigate(['MissionsListing']);
    }

}