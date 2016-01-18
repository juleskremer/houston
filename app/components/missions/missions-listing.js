System.register(['angular2/core', '../../services/missions/mission.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mission_service_1, router_1;
    var MissionsListingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mission_service_1_1) {
                mission_service_1 = mission_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MissionsListingComponent = (function () {
                function MissionsListingComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                    this.missions = [];
                }
                MissionsListingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getMissions().then(function (missions) { return _this.missions = missions; });
                };
                MissionsListingComponent.prototype.onSelect = function (mission) {
                    this._router.navigate(['MissionDetail', { id: mission.gitID }]);
                };
                MissionsListingComponent = __decorate([
                    core_1.Component({
                        selector: 'missions-listing',
                        templateUrl: 'app/components/missions/missions-listing.html',
                        styleUrls: [],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, mission_service_1.MissionsService])
                ], MissionsListingComponent);
                return MissionsListingComponent;
            })();
            exports_1("MissionsListingComponent", MissionsListingComponent);
        }
    }
});
//# sourceMappingURL=missions-listing.js.map