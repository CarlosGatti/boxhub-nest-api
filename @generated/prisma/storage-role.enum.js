"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageRole = void 0;
const graphql_1 = require("@nestjs/graphql");
var StorageRole;
(function (StorageRole) {
    StorageRole["ADMIN"] = "ADMIN";
    StorageRole["MEMBER"] = "MEMBER";
})(StorageRole = exports.StorageRole || (exports.StorageRole = {}));
(0, graphql_1.registerEnumType)(StorageRole, { name: 'StorageRole', description: undefined });
//# sourceMappingURL=storage-role.enum.js.map