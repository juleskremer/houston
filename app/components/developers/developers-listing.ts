import {Component, OnInit} from 'angular2/core';
import {DeveloperService} from '../../services/developers/developer.service';
import {Developer} from '../../services/developers/developer';
import {Router} from 'angular2/router';

@Component({
  selector: 'developers-listing',
  templateUrl: 'app/components/developers/developers-listing.html',
  styleUrls: [],
  providers: [],
  directives: [],
  pipes: []
})
export class DevelopersListingComponent implements OnInit {
  developers: Developer[] = [];

  constructor(
    private _router: Router,
    private _service: DeveloperService) { }

  ngOnInit() {
    this._service.getDevelopers().then(developers => this.developers = developers);
  }

  onSelect(developer: Developer) {
    this._router.navigate(['DeveloperDetail', { id: developer.gitID }]);
  }
}