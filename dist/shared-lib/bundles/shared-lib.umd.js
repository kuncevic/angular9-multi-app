(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('shared-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['shared-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var SharedLibService = /** @class */ (function () {
        function SharedLibService() {
        }
        SharedLibService.ɵfac = function SharedLibService_Factory(t) { return new (t || SharedLibService)(); };
        SharedLibService.ɵprov = core.ɵɵdefineInjectable({ token: SharedLibService, factory: function (t) { return SharedLibService.ɵfac(t); }, providedIn: 'root' });
        return SharedLibService;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(SharedLibService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);

    var SharedLibComponent = /** @class */ (function () {
        function SharedLibComponent() {
        }
        SharedLibComponent.prototype.ngOnInit = function () {
        };
        SharedLibComponent.ɵfac = function SharedLibComponent_Factory(t) { return new (t || SharedLibComponent)(); };
        SharedLibComponent.ɵcmp = core.ɵɵdefineComponent({ type: SharedLibComponent, selectors: [["lib-shared-lib"]], decls: 2, vars: 0, template: function SharedLibComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " shared-lib works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return SharedLibComponent;
    }());
    /*@__PURE__*/ core.ɵsetClassMetadata(SharedLibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-shared-lib',
                    template: "\n    <p>\n      shared-lib works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null);

    var SharedLibModule = /** @class */ (function () {
        function SharedLibModule() {
        }
        SharedLibModule.ɵmod = core.ɵɵdefineNgModule({ type: SharedLibModule });
        SharedLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); }, imports: [[]] });
        return SharedLibModule;
    }());
    /*@__PURE__*/ core.ɵɵsetNgModuleScope(SharedLibModule, { declarations: [SharedLibComponent], exports: [SharedLibComponent] });
    /*@__PURE__*/ core.ɵsetClassMetadata(SharedLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [SharedLibComponent],
                    imports: [],
                    exports: [SharedLibComponent]
                }]
        }], null, null);

    exports.SharedLibComponent = SharedLibComponent;
    exports.SharedLibModule = SharedLibModule;
    exports.SharedLibService = SharedLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared-lib.umd.js.map
