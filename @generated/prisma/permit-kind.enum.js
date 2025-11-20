"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitKind = void 0;
const graphql_1 = require("@nestjs/graphql");
var PermitKind;
(function (PermitKind) {
    PermitKind["BUILDING_PERMIT"] = "BUILDING_PERMIT";
    PermitKind["ELECTRICAL"] = "ELECTRICAL";
    PermitKind["PLUMBING"] = "PLUMBING";
    PermitKind["INSPECTION_REPORT"] = "INSPECTION_REPORT";
    PermitKind["FRAMING"] = "FRAMING";
    PermitKind["ROOFING"] = "ROOFING";
    PermitKind["HVAC"] = "HVAC";
    PermitKind["CONCRETE"] = "CONCRETE";
    PermitKind["FLOORING"] = "FLOORING";
    PermitKind["OTHER"] = "OTHER";
})(PermitKind = exports.PermitKind || (exports.PermitKind = {}));
(0, graphql_1.registerEnumType)(PermitKind, { name: 'PermitKind', description: undefined });
//# sourceMappingURL=permit-kind.enum.js.map