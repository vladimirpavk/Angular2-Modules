System.register(["@angular/core", "@angular/platform-browser", "./high2.directive", "./title.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, high2_directive_1, title_component_1, MyModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (high2_directive_1_1) {
                high2_directive_1 = high2_directive_1_1;
            },
            function (title_component_1_1) {
                title_component_1 = title_component_1_1;
            }
        ],
        execute: function () {
            MyModule = class MyModule {
            };
            MyModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule],
                    declarations: [
                        high2_directive_1.HighlightDirective2,
                        title_component_1.TitleComponent
                    ],
                    exports: [high2_directive_1.HighlightDirective2, title_component_1.TitleComponent]
                })
            ], MyModule);
            exports_1("MyModule", MyModule);
        }
    };
});

//# sourceMappingURL=mymodule.module.js.map
