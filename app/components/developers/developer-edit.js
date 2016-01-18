System.register(['angular2/core', '../../services/developers/developer.service', 'angular2/router', '../../services/common/language.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, developer_service_1, router_1, language_service_1;
    var DeveloperEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (developer_service_1_1) {
                developer_service_1 = developer_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (language_service_1_1) {
                language_service_1 = language_service_1_1;
            }],
        execute: function() {
            DeveloperEditComponent = (function () {
                function DeveloperEditComponent(_router, _routeParams, _service, _languageService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this._languageService = _languageService;
                    this.submitted = false;
                }
                DeveloperEditComponent.prototype.onSubmit = function () { this.submitted = true; };
                DeveloperEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getDeveloper(id).then(function (developer) { return _this.developer = developer; });
                    this._languageService.getLanguages().then(function (resp) { return _this.languages = resp; });
                };
                DeveloperEditComponent.prototype.onCancel = function (developer) {
                    this._router.navigate(['DeveloperDetail', { id: developer.gitID }]);
                };
                DeveloperEditComponent = __decorate([
                    core_1.Component({
                        selector: 'developer-edit',
                        templateUrl: 'app/components/developers/developer-edit.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        inputs: ['developer', 'language'],
                        providers: [language_service_1.LanguageService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, developer_service_1.DeveloperService, language_service_1.LanguageService])
                ], DeveloperEditComponent);
                return DeveloperEditComponent;
            })();
            exports_1("DeveloperEditComponent", DeveloperEditComponent);
        }
    }
});
//# sourceMappingURL=developer-edit.js.map