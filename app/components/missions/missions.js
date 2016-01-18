System.register(['angular2/core', '../../services/missions/mission.service', 'angular2/router', './missions-listing', './mission-detail', './mission-edit'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mission_service_1, router_1, missions_listing_1, mission_detail_1, mission_edit_1;
    var MissionsComponent;
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
            },
            function (missions_listing_1_1) {
                missions_listing_1 = missions_listing_1_1;
            },
            function (mission_detail_1_1) {
                mission_detail_1 = mission_detail_1_1;
            },
            function (mission_edit_1_1) {
                mission_edit_1 = mission_edit_1_1;
            }],
        execute: function() {
            MissionsComponent = (function () {
                function MissionsComponent() {
                }
                MissionsComponent = __decorate([
                    core_1.Component({
                        template: "\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.RouterOutlet],
                        providers: [mission_service_1.MissionsService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MissionsListing', component: missions_listing_1.MissionsListingComponent, useAsDefault: true },
                        { path: '/:id', name: 'MissionDetail', component: mission_detail_1.MissionDetailComponent },
                        { path: '/mission-detail/:id', name: 'MissionEdit', component: mission_edit_1.MissionEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MissionsComponent);
                return MissionsComponent;
            })();
            exports_1("MissionsComponent", MissionsComponent);
        }
    }
});
//# sourceMappingURL=missions.js.map