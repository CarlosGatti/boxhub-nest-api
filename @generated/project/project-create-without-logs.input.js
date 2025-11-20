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
exports.ProjectCreateWithoutLogsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_status_enum_1 = require("../prisma/project-status.enum");
const user_create_nested_one_without_project_responsible_input_1 = require("../user/user-create-nested-one-without-project-responsible.input");
const project_document_create_nested_many_without_project_input_1 = require("../project-document/project-document-create-nested-many-without-project.input");
const material_entry_create_nested_many_without_project_input_1 = require("../material-entry/material-entry-create-nested-many-without-project.input");
const permit_inspection_create_nested_many_without_project_input_1 = require("../permit-inspection/permit-inspection-create-nested-many-without-project.input");
const project_photo_create_nested_many_without_project_input_1 = require("../project-photo/project-photo-create-nested-many-without-project.input");
let ProjectCreateWithoutLogsInput = class ProjectCreateWithoutLogsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ProjectCreateWithoutLogsInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ProjectCreateWithoutLogsInput.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ProjectCreateWithoutLogsInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_status_enum_1.ProjectStatus, { nullable: true }),
    __metadata("design:type", Object)
], ProjectCreateWithoutLogsInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], ProjectCreateWithoutLogsInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ProjectCreateWithoutLogsInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ProjectCreateWithoutLogsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ProjectCreateWithoutLogsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_project_responsible_input_1.UserCreateNestedOneWithoutProjectResponsibleInput, { nullable: false }),
    __metadata("design:type", user_create_nested_one_without_project_responsible_input_1.UserCreateNestedOneWithoutProjectResponsibleInput)
], ProjectCreateWithoutLogsInput.prototype, "responsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_create_nested_many_without_project_input_1.ProjectDocumentCreateNestedManyWithoutProjectInput, { nullable: true }),
    __metadata("design:type", project_document_create_nested_many_without_project_input_1.ProjectDocumentCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutLogsInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_create_nested_many_without_project_input_1.MaterialEntryCreateNestedManyWithoutProjectInput, { nullable: true }),
    __metadata("design:type", material_entry_create_nested_many_without_project_input_1.MaterialEntryCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutLogsInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_create_nested_many_without_project_input_1.PermitInspectionCreateNestedManyWithoutProjectInput, { nullable: true }),
    __metadata("design:type", permit_inspection_create_nested_many_without_project_input_1.PermitInspectionCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutLogsInput.prototype, "permits", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_create_nested_many_without_project_input_1.ProjectPhotoCreateNestedManyWithoutProjectInput, { nullable: true }),
    __metadata("design:type", project_photo_create_nested_many_without_project_input_1.ProjectPhotoCreateNestedManyWithoutProjectInput)
], ProjectCreateWithoutLogsInput.prototype, "photos", void 0);
ProjectCreateWithoutLogsInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectCreateWithoutLogsInput);
exports.ProjectCreateWithoutLogsInput = ProjectCreateWithoutLogsInput;
//# sourceMappingURL=project-create-without-logs.input.js.map