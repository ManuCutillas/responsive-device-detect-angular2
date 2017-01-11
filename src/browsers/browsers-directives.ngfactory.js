/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require("./browsers-directives");
var import1 = require("@angular/core/src/change_detection/change_detection");
var import2 = require("@angular/core/src/linker/view_utils");
var Wrapper_IsChrome = (function () {
    function Wrapper_IsChrome(p0, p1, p2) {
        this.changed = false;
        this._isChrome = import1.UNINITIALIZED;
        this.context = new import0.IsChrome(p0, p1, p2);
    }
    Wrapper_IsChrome.prototype.check_isChrome = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isChrome, currValue))) {
            this.changed = true;
            this.context.isChrome = currValue;
            this._isChrome = currValue;
        }
    };
    Wrapper_IsChrome.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsChrome;
}());
exports.Wrapper_IsChrome = Wrapper_IsChrome;
var Wrapper_IsFirefox = (function () {
    function Wrapper_IsFirefox(p0, p1, p2) {
        this.changed = false;
        this._isFirefox = import1.UNINITIALIZED;
        this.context = new import0.IsFirefox(p0, p1, p2);
    }
    Wrapper_IsFirefox.prototype.check_isFirefox = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isFirefox, currValue))) {
            this.changed = true;
            this.context.isFirefox = currValue;
            this._isFirefox = currValue;
        }
    };
    Wrapper_IsFirefox.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsFirefox;
}());
exports.Wrapper_IsFirefox = Wrapper_IsFirefox;
var Wrapper_IsSafari = (function () {
    function Wrapper_IsSafari(p0, p1, p2) {
        this.changed = false;
        this._isSafari = import1.UNINITIALIZED;
        this.context = new import0.IsSafari(p0, p1, p2);
    }
    Wrapper_IsSafari.prototype.check_isSafari = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isSafari, currValue))) {
            this.changed = true;
            this.context.isSafari = currValue;
            this._isSafari = currValue;
        }
    };
    Wrapper_IsSafari.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsSafari;
}());
exports.Wrapper_IsSafari = Wrapper_IsSafari;
var Wrapper_IsOpera = (function () {
    function Wrapper_IsOpera(p0, p1, p2) {
        this.changed = false;
        this._isOpera = import1.UNINITIALIZED;
        this.context = new import0.IsOpera(p0, p1, p2);
    }
    Wrapper_IsOpera.prototype.check_isOpera = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isOpera, currValue))) {
            this.changed = true;
            this.context.isOpera = currValue;
            this._isOpera = currValue;
        }
    };
    Wrapper_IsOpera.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsOpera;
}());
exports.Wrapper_IsOpera = Wrapper_IsOpera;
var Wrapper_IsIE = (function () {
    function Wrapper_IsIE(p0, p1, p2) {
        this.changed = false;
        this._isIE = import1.UNINITIALIZED;
        this.context = new import0.IsIE(p0, p1, p2);
    }
    Wrapper_IsIE.prototype.check_isIE = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isIE, currValue))) {
            this.changed = true;
            this.context.isIE = currValue;
            this._isIE = currValue;
        }
    };
    Wrapper_IsIE.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsIE;
}());
exports.Wrapper_IsIE = Wrapper_IsIE;
var Wrapper_ShowItBrowser = (function () {
    function Wrapper_ShowItBrowser(p0, p1, p2) {
        this.changed = false;
        this._showItBrowser = import1.UNINITIALIZED;
        this.context = new import0.ShowItBrowser(p0, p1, p2);
    }
    Wrapper_ShowItBrowser.prototype.check_showItBrowser = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._showItBrowser, currValue))) {
            this.changed = true;
            this.context.showItBrowser = currValue;
            this._showItBrowser = currValue;
        }
    };
    Wrapper_ShowItBrowser.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ShowItBrowser;
}());
exports.Wrapper_ShowItBrowser = Wrapper_ShowItBrowser;
var Wrapper_HideItBrowser = (function () {
    function Wrapper_HideItBrowser(p0, p1, p2) {
        this.changed = false;
        this._hideItBrowser = import1.UNINITIALIZED;
        this.context = new import0.HideItBrowser(p0, p1, p2);
    }
    Wrapper_HideItBrowser.prototype.check_hideItBrowser = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._hideItBrowser, currValue))) {
            this.changed = true;
            this.context.hideItBrowser = currValue;
            this._hideItBrowser = currValue;
        }
    };
    Wrapper_HideItBrowser.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HideItBrowser;
}());
exports.Wrapper_HideItBrowser = Wrapper_HideItBrowser;
var Wrapper_IsIE9 = (function () {
    function Wrapper_IsIE9(p0, p1, p2) {
        this.changed = false;
        this._isIE9 = import1.UNINITIALIZED;
        this.context = new import0.IsIE9(p0, p1, p2);
    }
    Wrapper_IsIE9.prototype.check_isIE9 = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isIE9, currValue))) {
            this.changed = true;
            this.context.isIE9 = currValue;
            this._isIE9 = currValue;
        }
    };
    Wrapper_IsIE9.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsIE9;
}());
exports.Wrapper_IsIE9 = Wrapper_IsIE9;
var Wrapper_IsIE10 = (function () {
    function Wrapper_IsIE10(p0, p1, p2) {
        this.changed = false;
        this._isIE10 = import1.UNINITIALIZED;
        this.context = new import0.IsIE10(p0, p1, p2);
    }
    Wrapper_IsIE10.prototype.check_isIE10 = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isIE10, currValue))) {
            this.changed = true;
            this.context.isIE10 = currValue;
            this._isIE10 = currValue;
        }
    };
    Wrapper_IsIE10.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsIE10;
}());
exports.Wrapper_IsIE10 = Wrapper_IsIE10;
var Wrapper_IsIE11 = (function () {
    function Wrapper_IsIE11(p0, p1, p2) {
        this.changed = false;
        this._isIE11 = import1.UNINITIALIZED;
        this.context = new import0.IsIE11(p0, p1, p2);
    }
    Wrapper_IsIE11.prototype.check_isIE11 = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isIE11, currValue))) {
            this.changed = true;
            this.context.isIE11 = currValue;
            this._isIE11 = currValue;
        }
    };
    Wrapper_IsIE11.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsIE11;
}());
exports.Wrapper_IsIE11 = Wrapper_IsIE11;
var Wrapper_IsIE12 = (function () {
    function Wrapper_IsIE12(p0, p1, p2) {
        this.changed = false;
        this._isIE12 = import1.UNINITIALIZED;
        this.context = new import0.IsIE12(p0, p1, p2);
    }
    Wrapper_IsIE12.prototype.check_isIE12 = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._isIE12, currValue))) {
            this.changed = true;
            this.context.isIE12 = currValue;
            this._isIE12 = currValue;
        }
    };
    Wrapper_IsIE12.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_IsIE12;
}());
exports.Wrapper_IsIE12 = Wrapper_IsIE12;
var Wrapper_ShowIEVersion = (function () {
    function Wrapper_ShowIEVersion(p0, p1, p2) {
        this.changed = false;
        this._showIEVersion = import1.UNINITIALIZED;
        this.context = new import0.ShowIEVersion(p0, p1, p2);
    }
    Wrapper_ShowIEVersion.prototype.check_showIEVersion = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._showIEVersion, currValue))) {
            this.changed = true;
            this.context.showIEVersion = currValue;
            this._showIEVersion = currValue;
        }
    };
    Wrapper_ShowIEVersion.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_ShowIEVersion;
}());
exports.Wrapper_ShowIEVersion = Wrapper_ShowIEVersion;
var Wrapper_HideIEVersion = (function () {
    function Wrapper_HideIEVersion(p0, p1, p2) {
        this.changed = false;
        this._hideIEVersion = import1.UNINITIALIZED;
        this.context = new import0.HideIEVersion(p0, p1, p2);
    }
    Wrapper_HideIEVersion.prototype.check_hideIEVersion = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._hideIEVersion, currValue))) {
            this.changed = true;
            this.context.hideIEVersion = currValue;
            this._hideIEVersion = currValue;
        }
    };
    Wrapper_HideIEVersion.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HideIEVersion;
}());
exports.Wrapper_HideIEVersion = Wrapper_HideIEVersion;
var Wrapper_BrowserInfo = (function () {
    function Wrapper_BrowserInfo(p0, p1) {
        this.changed = false;
        this._browserInfo = import1.UNINITIALIZED;
        this.context = new import0.BrowserInfo(p0, p1);
    }
    Wrapper_BrowserInfo.prototype.check_browserInfo = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._browserInfo, currValue))) {
            this.changed = true;
            this.context.browserInfo = currValue;
            this._browserInfo = currValue;
        }
    };
    Wrapper_BrowserInfo.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_BrowserInfo;
}());
exports.Wrapper_BrowserInfo = Wrapper_BrowserInfo;
var Wrapper_IeInfo = (function () {
    function Wrapper_IeInfo(p0, p1) {
        this.changed = false;
        this._ieInfo = import1.UNINITIALIZED;
        this.context = new import0.IeInfo(p0, p1);
    }
    Wrapper_IeInfo.prototype.check_ieInfo = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import2.checkBinding(throwOnChange, this._ieInfo, currValue))) {
            this.changed = true;
            this.context.ieInfo = currValue;
            this._ieInfo = currValue;
        }
    };
    Wrapper_IeInfo.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    return Wrapper_IeInfo;
}());
exports.Wrapper_IeInfo = Wrapper_IeInfo;
//# sourceMappingURL=browsers-directives.ngfactory.js.map