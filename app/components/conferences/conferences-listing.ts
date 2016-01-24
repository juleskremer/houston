import {Component, OnInit} from 'angular2/core';
import {ConferencesService} from '../../services/conferences/conference.service';
import {Conference} from '../../services/conferences/conference';
import {Router} from 'angular2/router';

@Component({
  
  selector: 'conferences-listing',
  templateUrl: 'app/components/conferences/conferences-listing.html',
  styleUrls: [],
  providers: [],
  directives: [],
  pipes: []
})
export class ConferencesListingComponent implements OnInit {
  conferences: Conference[] = [];
  
  constructor(
    private _router: Router,
    private _service: ConferencesService){}
  
  ngOnInit() {
    this._service.getConferences().then(conferences => this.conferences = conferences);
  }
  
}