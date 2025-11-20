"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitInspection = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const permit_kind_enum_1 = require("../prisma/permit-kind.enum");
const permit_status_enum_1 = require("../prisma/permit-status.enum");
const user_model_1 = require("../user/user.model");
const project_model_1 = require("../project/project.model");
let PermitInspection = class PermitInspection {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], PermitInspection.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], PermitInspection.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PermitInspection.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_kind_enum_1.PermitKind, { nullable: false }),
    __metadata("design:type", Object)
], PermitInspection.prototype, "kind", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_status_enum_1.PermitStatus, { nullable: false, defaultValue: 'REQUIRED' }),
    __metadata("design:type", Object)
], PermitInspection.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspection.prototype, "requestedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspection.prototype, "approvedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspection.prototype, "fileUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspection.prototype, "responsibleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], PermitInspection.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], PermitInspection.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspection.prototype, "responsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_model_1.Project, { nullable: false }),
    __metadata("design:type", project_model_1.Project)
], PermitInspection.prototype, "project", void 0);
PermitInspection = __decorate([
    (0, graphql_2.ObjectType)()
], PermitInspection);
exports.PermitInspection = PermitInspection;
//# sourceMappingURL=permit-inspection.model.js.map