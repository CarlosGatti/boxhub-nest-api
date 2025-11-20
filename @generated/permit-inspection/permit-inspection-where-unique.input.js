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
exports.PermitInspectionWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const permit_inspection_where_input_1 = require("./permit-inspection-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_permit_kind_filter_input_1 = require("../prisma/enum-permit-kind-filter.input");
const enum_permit_status_filter_input_1 = require("../prisma/enum-permit-status-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_nullable_relation_filter_input_1 = require("../user/user-nullable-relation-filter.input");
const project_relation_filter_input_1 = require("../project/project-relation-filter.input");
let PermitInspectionWhereUniqueInput = class PermitInspectionWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PermitInspectionWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_input_1.PermitInspectionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PermitInspectionWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_input_1.PermitInspectionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PermitInspectionWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_input_1.PermitInspectionWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PermitInspectionWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], PermitInspectionWhereUniqueInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PermitInspectionWhereUniqueInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_permit_kind_filter_input_1.EnumPermitKindFilter, { nullable: true }),
    __metadata("design:type", enum_permit_kind_filter_input_1.EnumPermitKindFilter)
], PermitInspectionWhereUniqueInput.prototype, "kind", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_permit_status_filter_input_1.EnumPermitStatusFilter, { nullable: true }),
    __metadata("design:type", enum_permit_status_filter_input_1.EnumPermitStatusFilter)
], PermitInspectionWhereUniqueInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], PermitInspectionWhereUniqueInput.prototype, "requestedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], PermitInspectionWhereUniqueInput.prototype, "approvedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PermitInspectionWhereUniqueInput.prototype, "fileUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], PermitInspectionWhereUniqueInput.prototype, "responsibleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PermitInspectionWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PermitInspectionWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_relation_filter_input_1.UserNullableRelationFilter, { nullable: true }),
    __metadata("design:type", user_nullable_relation_filter_input_1.UserNullableRelationFilter)
], PermitInspectionWhereUniqueInput.prototype, "responsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_relation_filter_input_1.ProjectRelationFilter, { nullable: true }),
    __metadata("design:type", project_relation_filter_input_1.ProjectRelationFilter)
], PermitInspectionWhereUniqueInput.prototype, "project", void 0);
PermitInspectionWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], PermitInspectionWhereUniqueInput);
exports.PermitInspectionWhereUniqueInput = PermitInspectionWhereUniqueInput;
//# sourceMappingURL=permit-inspection-where-unique.input.js.map