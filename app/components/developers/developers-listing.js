System.register(['angular2/core', '../../services/developers/developer.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, developer_service_1, router_1;
    var DevelopersListingComponent;
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
            }],
        execute: function() {
            DevelopersListingComponent = (function () {
                function DevelopersListingComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                    this.developers = [];
                }
                DevelopersListingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getDevelopers().then(function (developers) { return _this.developers = developers; });
                };
                DevelopersListingComponent.prototype.onSelect = function (developer) {
                    this._router.navigate(['DeveloperDetail', { id: developer.gitID }]);
                };
                DevelopersListingComponent = __decorate([
                    core_1.Component({
                        selector: 'developers-listing',
                        templateUrl: 'app/components/developers/developers-listing.html',
                        styleUrls: [],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, developer_service_1.DeveloperService])
                ], DevelopersListingComponent);
                return DevelopersListingComponent;
            })();
            exports_1("DevelopersListingComponent", DevelopersListingComponent);
        }
    }
});
//# sourceMappingURL=developers-listing.js.map