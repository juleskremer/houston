System.register(['angular2/core', 'angular2/router', './services/developers/developer.service', './components/developers/developers', './components/missions/missions', './services/missions/mission.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, developer_service_1, developers_1, missions_1, mission_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (developer_service_1_1) {
                developer_service_1 = developer_service_1_1;
            },
            function (developers_1_1) {
                developers_1 = developers_1_1;
            },
            function (missions_1_1) {
                missions_1 = missions_1_1;
            },
            function (mission_service_1_1) {
                mission_service_1 = mission_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  \n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer\">\n  <div class=\"mdl-layout__drawer\">\n    <span class=\"mdl-layout-title\">Mission Control</span>\n    <nav class=\"mdl-navigation\">\n      <a class=\"mdl-navigation__link\" [routerLink]=\"['MissionsComponent']\">Missions</a>\n      <a class=\"mdl-navigation__link\" [routerLink]=\"['DevelopersComponent']\">Developers</a>\n    </nav>\n  </div>\n         \n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row\">\n        <div class=\"mdl-layout-spacer\"></div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right\">\n            <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"fixed-header-drawer-exp\">\n              <i class=\"material-icons\">search</i>\n            </label>\n            <div class=\"mdl-textfield__expandable-holder\">\n              <input class=\"mdl-textfield__input\" type=\"text\" name=\"sample\" id=\"fixed-header-drawer-exp\">\n            </div>\n          </div>\n        </div>    \n    </header>\n    \n    <main class=\"mdl-layout__content\">      \n      <div class=\"page-content\" style=\"padding-left:10px;\">\n        \n        <router-outlet></router-outlet>\n  \n      </div>            \n    </main>   \n    \n  </div>\n</div>\n  \n  ",
                        directives: [developers_1.DevelopersComponent, missions_1.MissionsComponent, [router_1.ROUTER_DIRECTIVES]],
                        providers: [developer_service_1.DeveloperService, mission_service_1.MissionsService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/developers/...',
                            name: 'DevelopersComponent',
                            component: developers_1.DevelopersComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/missions/...',
                            name: 'MissionsComponent',
                            component: missions_1.MissionsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map