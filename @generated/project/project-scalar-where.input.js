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
var ProjectScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_project_status_filter_input_1 = require("../prisma/enum-project-status-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
let ProjectScalarWhereInput = ProjectScalarWhereInput_1 = class ProjectScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProjectScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProjectScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProjectScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectScalarWhereInput.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectScalarWhereInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_project_status_filter_input_1.EnumProjectStatusFilter, { nullable: true }),
    __metadata("design:type", enum_project_status_filter_input_1.EnumProjectStatusFilter)
], ProjectScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectScalarWhereInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], ProjectScalarWhereInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectScalarWhereInput.prototype, "responsibleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectScalarWhereInput.prototype, "updatedAt", void 0);
ProjectScalarWhereInput = ProjectScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProjectScalarWhereInput);
exports.ProjectScalarWhereInput = ProjectScalarWhereInput;
//# sourceMappingURL=project-scalar-where.input.js.map