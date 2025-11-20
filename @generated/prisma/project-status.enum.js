"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["PLANNING"] = "PLANNING";
    ProjectStatus["EXECUTING"] = "EXECUTING";
    ProjectStatus["FINISHED"] = "FINISHED";
    ProjectStatus["ON_HOLD"] = "ON_HOLD";
    ProjectStatus["CANCELED"] = "CANCELED";
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
(0, graphql_1.registerEnumType)(ProjectStatus, { name: 'ProjectStatus', description: undefined });
//# sourceMappingURL=project-status.enum.js.map