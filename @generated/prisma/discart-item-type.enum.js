"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscartItemType = void 0;
const graphql_1 = require("@nestjs/graphql");
var DiscartItemType;
(function (DiscartItemType) {
    DiscartItemType["SELL"] = "SELL";
    DiscartItemType["DONATE"] = "DONATE";
})(DiscartItemType = exports.DiscartItemType || (exports.DiscartItemType = {}));
(0, graphql_1.registerEnumType)(DiscartItemType, { name: 'DiscartItemType', description: undefined });
//# sourceMappingURL=discart-item-type.enum.js.map