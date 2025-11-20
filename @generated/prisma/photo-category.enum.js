"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoCategory = void 0;
const graphql_1 = require("@nestjs/graphql");
var PhotoCategory;
(function (PhotoCategory) {
    PhotoCategory["BEFORE"] = "BEFORE";
    PhotoCategory["DURING"] = "DURING";
    PhotoCategory["AFTER"] = "AFTER";
    PhotoCategory["ISSUE"] = "ISSUE";
    PhotoCategory["INSPECTION"] = "INSPECTION";
})(PhotoCategory = exports.PhotoCategory || (exports.PhotoCategory = {}));
(0, graphql_1.registerEnumType)(PhotoCategory, { name: 'PhotoCategory', description: undefined });
//# sourceMappingURL=photo-category.enum.js.map