"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["REQUIRED"] = "REQUIRED";
    PermitStatus["SENT"] = "SENT";
    PermitStatus["APPROVED"] = "APPROVED";
    PermitStatus["REJECTED"] = "REJECTED";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
(0, graphql_1.registerEnumType)(PermitStatus, { name: 'PermitStatus', description: undefined });
//# sourceMappingURL=permit-status.enum.js.map