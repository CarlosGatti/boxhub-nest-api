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
exports.ProjectWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const project_where_input_1 = require("./project-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_project_status_filter_input_1 = require("../prisma/enum-project-status-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const construction_log_list_relation_filter_input_1 = require("../construction-log/construction-log-list-relation-filter.input");
const project_document_list_relation_filter_input_1 = require("../project-document/project-document-list-relation-filter.input");
const material_entry_list_relation_filter_input_1 = require("../material-entry/material-entry-list-relation-filter.input");
const permit_inspection_list_relation_filter_input_1 = require("../permit-inspection/permit-inspection-list-relation-filter.input");
const project_photo_list_relation_filter_input_1 = require("../project-photo/project-photo-list-relation-filter.input");
let ProjectWhereUniqueInput = class ProjectWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ProjectWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_input_1.ProjectWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProjectWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_input_1.ProjectWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProjectWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_input_1.ProjectWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProjectWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectWhereUniqueInput.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectWhereUniqueInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_project_status_filter_input_1.EnumProjectStatusFilter, { nullable: true }),
    __metadata("design:type", enum_project_status_filter_input_1.EnumProjectStatusFilter)
], ProjectWhereUniqueInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectWhereUniqueInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], ProjectWhereUniqueInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectWhereUniqueInput.prototype, "responsibleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], ProjectWhereUniqueInput.prototype, "responsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_list_relation_filter_input_1.ConstructionLogListRelationFilter, { nullable: true }),
    __metadata("design:type", construction_log_list_relation_filter_input_1.ConstructionLogListRelationFilter)
], ProjectWhereUniqueInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_list_relation_filter_input_1.ProjectDocumentListRelationFilter, { nullable: true }),
    __metadata("design:type", project_document_list_relation_filter_input_1.ProjectDocumentListRelationFilter)
], ProjectWhereUniqueInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_list_relation_filter_input_1.MaterialEntryListRelationFilter, { nullable: true }),
    __metadata("design:type", material_entry_list_relation_filter_input_1.MaterialEntryListRelationFilter)
], ProjectWhereUniqueInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_list_relation_filter_input_1.PermitInspectionListRelationFilter, { nullable: true }),
    __metadata("design:type", permit_inspection_list_relation_filter_input_1.PermitInspectionListRelationFilter)
], ProjectWhereUniqueInput.prototype, "permits", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_list_relation_filter_input_1.ProjectPhotoListRelationFilter, { nullable: true }),
    __metadata("design:type", project_photo_list_relation_filter_input_1.ProjectPhotoListRelationFilter)
], ProjectWhereUniqueInput.prototype, "photos", void 0);
ProjectWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectWhereUniqueInput);
exports.ProjectWhereUniqueInput = ProjectWhereUniqueInput;
//# sourceMappingURL=project-where-unique.input.js.map