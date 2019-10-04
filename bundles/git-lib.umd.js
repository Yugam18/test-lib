(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('mystile.css')) :
    typeof define === 'function' && define.amd ? define('git-lib', ['exports', '@angular/core', 'mystile.css'], factory) :
    (global = global || self, factory(global['git-lib'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooLibService = /** @class */ (function () {
        function FooLibService() {
        }
        FooLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FooLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ FooLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FooLibService_Factory() { return new FooLibService(); }, token: FooLibService, providedIn: "root" });
        return FooLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooLibComponent = /** @class */ (function () {
        function FooLibComponent() {
        }
        /**
         * @return {?}
         */
        FooLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        FooLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'foo-private',
                        template: "\n    <div class=\"body\">\n      my private Library\n    </div>\n  ",
                        styles: [".body{width:30%;color:green}"]
                    }] }
        ];
        /** @nocollapse */
        FooLibComponent.ctorParameters = function () { return []; };
        return FooLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TsuButtonComponent = /** @class */ (function () {
        function TsuButtonComponent() {
        }
        /**
         * @return {?}
         */
        TsuButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        TsuButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'foo-tsu-button',
                        template: "<p>tsu-button works!</p>\n",
                        styles: [".body{color:red}"]
                    }] }
        ];
        /** @nocollapse */
        TsuButtonComponent.ctorParameters = function () { return []; };
        return TsuButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooLibModule1 = /** @class */ (function () {
        function FooLibModule1() {
        }
        FooLibModule1.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FooLibComponent, TsuButtonComponent],
                        imports: [],
                        exports: [FooLibComponent]
                    },] }
        ];
        return FooLibModule1;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StyleComp = /** @class */ (function () {
        function StyleComp() {
        }
        return StyleComp;
    }());

    exports.FooLibComponent = FooLibComponent;
    exports.FooLibModule1 = FooLibModule1;
    exports.FooLibService = FooLibService;
    exports.StyleComp = StyleComp;
    exports.ɵa = TsuButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=git-lib.umd.js.map
