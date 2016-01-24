import {Component, OnInit} from 'angular2/core';
import {DeveloperService} from '../../services/developers/developer.service';
import {Developer} from '../../services/developers/developer';
import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'my-developer-detail',
  templateUrl: 'app/components/developers/developer-detail.html',
  inputs: ['developer']
})
export class DeveloperDetailComponent {
  public developer: Developer;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _service: DeveloperService) { }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this.developer = this._service.getDeveloper(id);
    //this._service.getDeveloper(id).then(developer => this.developer = developer);
  }
  onSelect(developer: Developer) {
    this._router.navigate(['DeveloperEdit', { id: developer.gitID }]);
  }

  gotoDevelopers() {
    this._router.navigate(['DevelopersListing']);
  }

}