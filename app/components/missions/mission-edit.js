System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var MissionEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MissionEditComponent = (function () {
                function MissionEditComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                    this.submitted = false;
                }
                MissionEditComponent.prototype.onSubmit = function () { this.submitted = true; };
                MissionEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getMission(id).then(function (mission) { return _this.mission = mission; });
                };
                MissionEditComponent = __decorate([
                    core_1.Component({
                        selector: 'mission-edit',
                        templateUrl: 'app/components/missions/mission-edit.html',
                        inputs: ['mission']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, Object])
                ], MissionEditComponent);
                return MissionEditComponent;
            })();
            exports_1("MissionEditComponent", MissionEditComponent);
        }
    }
});
//# sourceMappingURL=mission-edit.js.map