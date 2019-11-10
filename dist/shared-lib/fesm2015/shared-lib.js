import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class SharedLibService {
    constructor() {
    }
}
SharedLibService.ɵfac = function SharedLibService_Factory(t) { return new (t || SharedLibService)(); };
SharedLibService.ɵprov = ɵɵdefineInjectable({ token: SharedLibService, factory: function (t) { return SharedLibService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ ɵsetClassMetadata(SharedLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null);

class SharedLibComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SharedLibComponent.ɵfac = function SharedLibComponent_Factory(t) { return new (t || SharedLibComponent)(); };
SharedLibComponent.ɵcmp = ɵɵdefineComponent({ type: SharedLibComponent, selectors: [["lib-shared-lib"]], decls: 2, vars: 0, template: function SharedLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " shared-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ ɵsetClassMetadata(SharedLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-shared-lib',
                template: `
    <p>
      shared-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null);

class SharedLibModule {
}
SharedLibModule.ɵmod = ɵɵdefineNgModule({ type: SharedLibModule });
SharedLibModule.ɵinj = ɵɵdefineInjector({ factory: function SharedLibModule_Factory(t) { return new (t || SharedLibModule)(); }, imports: [[]] });
/*@__PURE__*/ ɵɵsetNgModuleScope(SharedLibModule, { declarations: [SharedLibComponent], exports: [SharedLibComponent] });
/*@__PURE__*/ ɵsetClassMetadata(SharedLibModule, [{
        type: NgModule,
        args: [{
                declarations: [SharedLibComponent],
                imports: [],
                exports: [SharedLibComponent]
            }]
    }], null, null);

/*
 * Public API Surface of shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SharedLibComponent, SharedLibModule, SharedLibService };
//# sourceMappingURL=shared-lib.js.map
