"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscartItemCondition = void 0;
const graphql_1 = require("@nestjs/graphql");
var DiscartItemCondition;
(function (DiscartItemCondition) {
    DiscartItemCondition["NEW"] = "NEW";
    DiscartItemCondition["LIKE_NEW"] = "LIKE_NEW";
    DiscartItemCondition["USED"] = "USED";
})(DiscartItemCondition = exports.DiscartItemCondition || (exports.DiscartItemCondition = {}));
(0, graphql_1.registerEnumType)(DiscartItemCondition, { name: 'DiscartItemCondition', description: undefined });
//# sourceMappingURL=discart-item-condition.enum.js.map