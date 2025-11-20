"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentType = void 0;
const graphql_1 = require("@nestjs/graphql");
var DocumentType;
(function (DocumentType) {
    DocumentType["CONTRACT"] = "CONTRACT";
    DocumentType["PERMIT"] = "PERMIT";
    DocumentType["INVOICE"] = "INVOICE";
    DocumentType["PLAN"] = "PLAN";
    DocumentType["PHOTO"] = "PHOTO";
    DocumentType["OTHER"] = "OTHER";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
(0, graphql_1.registerEnumType)(DocumentType, { name: 'DocumentType', description: undefined });
//# sourceMappingURL=document-type.enum.js.map