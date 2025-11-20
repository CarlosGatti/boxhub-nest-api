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
exports.Project = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const project_status_enum_1 = require("../prisma/project-status.enum");
const graphql_4 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
const construction_log_model_1 = require("../construction-log/construction-log.model");
const project_document_model_1 = require("../project-document/project-document.model");
const material_entry_model_1 = require("../material-entry/material-entry.model");
const permit_inspection_model_1 = require("../permit-inspection/permit-inspection.model");
const project_photo_model_1 = require("../project-photo/project-photo.model");
const project_count_output_1 = require("./project-count.output");
let Project = class Project {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_status_enum_1.ProjectStatus, { nullable: false, defaultValue: 'PLANNING' }),
    __metadata("design:type", Object)
], Project.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Project.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], Project.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], Project.prototype, "responsibleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Project.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Project.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false }),
    __metadata("design:type", user_model_1.User)
], Project.prototype, "responsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_model_1.ConstructionLog], { nullable: true }),
    __metadata("design:type", Array)
], Project.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_model_1.ProjectDocument], { nullable: true }),
    __metadata("design:type", Array)
], Project.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_model_1.MaterialEntry], { nullable: true }),
    __metadata("design:type", Array)
], Project.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_model_1.PermitInspection], { nullable: true }),
    __metadata("design:type", Array)
], Project.prototype, "permits", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_model_1.ProjectPhoto], { nullable: true }),
    __metadata("design:type", Array)
], Project.prototype, "photos", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_count_output_1.ProjectCount, { nullable: false }),
    __metadata("design:type", project_count_output_1.ProjectCount)
], Project.prototype, "_count", void 0);
Project = __decorate([
    (0, graphql_2.ObjectType)()
], Project);
exports.Project = Project;
//# sourceMappingURL=project.model.js.map