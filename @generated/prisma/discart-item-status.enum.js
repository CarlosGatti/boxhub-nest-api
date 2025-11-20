"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscartItemStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var DiscartItemStatus;
(function (DiscartItemStatus) {
    DiscartItemStatus["ACTIVE"] = "ACTIVE";
    DiscartItemStatus["RESERVED"] = "RESERVED";
    DiscartItemStatus["SOLD"] = "SOLD";
})(DiscartItemStatus = exports.DiscartItemStatus || (exports.DiscartItemStatus = {}));
(0, graphql_1.registerEnumType)(DiscartItemStatus, { name: 'DiscartItemStatus', description: undefined });
//# sourceMappingURL=discart-item-status.enum.js.map