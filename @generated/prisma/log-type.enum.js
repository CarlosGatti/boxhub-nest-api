"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogType = void 0;
const graphql_1 = require("@nestjs/graphql");
var LogType;
(function (LogType) {
    LogType["OBSERVATION"] = "OBSERVATION";
    LogType["ISSUE"] = "ISSUE";
    LogType["GOOD_PRACTICE"] = "GOOD_PRACTICE";
    LogType["MATERIAL_RECEIPT"] = "MATERIAL_RECEIPT";
    LogType["DAILY_CHECKIN"] = "DAILY_CHECKIN";
    LogType["OTHER"] = "OTHER";
})(LogType = exports.LogType || (exports.LogType = {}));
(0, graphql_1.registerEnumType)(LogType, { name: 'LogType', description: undefined });
//# sourceMappingURL=log-type.enum.js.map