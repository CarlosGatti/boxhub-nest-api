"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var ProjectScalarFieldEnum;
(function (ProjectScalarFieldEnum) {
    ProjectScalarFieldEnum["id"] = "id";
    ProjectScalarFieldEnum["name"] = "name";
    ProjectScalarFieldEnum["client"] = "client";
    ProjectScalarFieldEnum["location"] = "location";
    ProjectScalarFieldEnum["status"] = "status";
    ProjectScalarFieldEnum["startDate"] = "startDate";
    ProjectScalarFieldEnum["endDate"] = "endDate";
    ProjectScalarFieldEnum["responsibleId"] = "responsibleId";
    ProjectScalarFieldEnum["createdAt"] = "createdAt";
    ProjectScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProjectScalarFieldEnum = exports.ProjectScalarFieldEnum || (exports.ProjectScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined });
//# sourceMappingURL=project-scalar-field.enum.js.map