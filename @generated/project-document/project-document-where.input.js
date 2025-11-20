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
var ProjectDocumentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDocumentWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_document_type_filter_input_1 = require("../prisma/enum-document-type-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const project_relation_filter_input_1 = require("../project/project-relation-filter.input");
let ProjectDocumentWhereInput = ProjectDocumentWhereInput_1 = class ProjectDocumentWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProjectDocumentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectDocumentWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProjectDocumentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectDocumentWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProjectDocumentWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectDocumentWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectDocumentWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectDocumentWhereInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectDocumentWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectDocumentWhereInput.prototype, "fileUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_document_type_filter_input_1.EnumDocumentTypeFilter, { nullable: true }),
    __metadata("design:type", enum_document_type_filter_input_1.EnumDocumentTypeFilter)
], ProjectDocumentWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectDocumentWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_relation_filter_input_1.ProjectRelationFilter, { nullable: true }),
    __metadata("design:type", project_relation_filter_input_1.ProjectRelationFilter)
], ProjectDocumentWhereInput.prototype, "project", void 0);
ProjectDocumentWhereInput = ProjectDocumentWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProjectDocumentWhereInput);
exports.ProjectDocumentWhereInput = ProjectDocumentWhereInput;
//# sourceMappingURL=project-document-where.input.js.map