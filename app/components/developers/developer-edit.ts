import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {DeveloperService} from '../../services/developers/developer.service';
import {Developer} from '../../services/developers/developer';
import {RouteParams, Router} from 'angular2/router';
import {Language} from '../../services/common/language-model';
import {LanguageService} from '../../services/common/language.service';

@Component({
  selector: 'developer-edit',
  templateUrl: 'app/components/developers/developer-edit.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  inputs: ['developer', 'language'],
  providers: [LanguageService]
})
export class DeveloperEditComponent {
  public developer: Developer;
  public languages: Language[];
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  constructor(
  private _router:Router,
  private _routeParams:RouteParams,
  private _service:DeveloperService, private _languageService:LanguageService){}
  
  ngOnInit() {
  let id = this._routeParams.get('id');
  this._service.getDeveloper(id).then(developer => this.developer = developer);
  this._languageService.getLanguages().then((resp) => this.languages = resp);

    }
  
  onSave(developer: Developer){
      this._service.saveDeveloper(developer);
  }
  onCancel(developer: Developer) {
    this._router.navigate( ['DeveloperDetail', { id: developer.gitID }] );
  }
}