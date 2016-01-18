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
    var MissionDetailComponent;
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
            MissionDetailComponent = (function () {
                function MissionDetailComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                MissionDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getMission(id).then(function (mission) { return _this.mission = mission; });
                };
                MissionDetailComponent.prototype.onSelect = function (mission) {
                    this._router.navigate(['MissionEdit', { id: mission.gitID }]);
                };
                MissionDetailComponent.prototype.gotoMissions = function () {
                    this._router.navigate(['MissionsListing']);
                };
                MissionDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-mission-detail',
                        templateUrl: 'app/components/missions/mission-detail.html',
                        inputs: ['mission']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, mission_service_1.MissionsService])
                ], MissionDetailComponent);
                return MissionDetailComponent;
            })();
            exports_1("MissionDetailComponent", MissionDetailComponent);
        }
    }
});
//# sourceMappingURL=mission-detail.js.map