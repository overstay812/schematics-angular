import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class SuperUiLibService {
    constructor() { }
}
SuperUiLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SuperUiLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SuperUiLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuperUiLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SuperUiLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.1", type: SuperUiLibComponent, selector: "lib-super-ui-lib", ngImport: i0, template: `
    <p>
      super-ui-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-super-ui-lib',
                    template: `
    <p>
      super-ui-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class SuperUiLibModule {
}
SuperUiLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SuperUiLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibModule, declarations: [SuperUiLibComponent], exports: [SuperUiLibComponent] });
SuperUiLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SuperUiLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SuperUiLibComponent
                    ],
                    imports: [],
                    exports: [
                        SuperUiLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of super-ui-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SuperUiLibComponent, SuperUiLibModule, SuperUiLibService };
//# sourceMappingURL=super-ui-lib.mjs.map
