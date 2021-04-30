var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OaValidationError = /** @class */ (function (_super) {
    __extends(OaValidationError, _super);
    function OaValidationError(type, item, validationError) {
        var _this = _super.call(this, "Object is not a valid \"" + type + "\". Check `.item` and `.validationError` for more info") || this;
        _this.name = 'OaValidationError';
        _this.item = item;
        _this.validationError = validationError;
        return _this;
    }
    return OaValidationError;
}(Error));
export { OaValidationError };
//# sourceMappingURL=OaValidationError.js.map