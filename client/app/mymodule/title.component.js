System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, TitleComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TitleComponent = class TitleComponent {
                constructor() {
                    this.subtitle = '';
                    this.title = 'Angular Modules';
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", Object)
            ], TitleComponent.prototype, "subtitle", void 0);
            TitleComponent = __decorate([
                core_1.Component({
                    selector: 'app-title',
                    template: `<h1 highlight2>{{title}} {{subtitle}}</h1>`
                }),
                __metadata("design:paramtypes", [])
            ], TitleComponent);
            exports_1("TitleComponent", TitleComponent);
        }
    };
});

//# sourceMappingURL=title.component.js.map