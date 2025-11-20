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
exports.ConstructionLogWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const construction_log_where_input_1 = require("./construction-log-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_log_type_filter_input_1 = require("../prisma/enum-log-type-filter.input");
const json_nullable_filter_input_1 = require("../prisma/json-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const project_relation_filter_input_1 = require("../project/project-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const log_comment_list_relation_filter_input_1 = require("../log-comment/log-comment-list-relation-filter.input");
let ConstructionLogWhereUniqueInput = class ConstructionLogWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ConstructionLogWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_where_input_1.ConstructionLogWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ConstructionLogWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_where_input_1.ConstructionLogWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ConstructionLogWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_where_input_1.ConstructionLogWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ConstructionLogWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ConstructionLogWhereUniqueInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ConstructionLogWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ConstructionLogWhereUniqueInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ConstructionLogWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_log_type_filter_input_1.EnumLogTypeFilter, { nullable: true }),
    __metadata("design:type", enum_log_type_filter_input_1.EnumLogTypeFilter)
], ConstructionLogWhereUniqueInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    __metadata("design:type", json_nullable_filter_input_1.JsonNullableFilter)
], ConstructionLogWhereUniqueInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ConstructionLogWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_relation_filter_input_1.ProjectRelationFilter, { nullable: true }),
    __metadata("design:type", project_relation_filter_input_1.ProjectRelationFilter)
], ConstructionLogWhereUniqueInput.prototype, "project", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], ConstructionLogWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_list_relation_filter_input_1.LogCommentListRelationFilter, { nullable: true }),
    __metadata("design:type", log_comment_list_relation_filter_input_1.LogCommentListRelationFilter)
], ConstructionLogWhereUniqueInput.prototype, "comments", void 0);
ConstructionLogWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogWhereUniqueInput);
exports.ConstructionLogWhereUniqueInput = ConstructionLogWhereUniqueInput;
//# sourceMappingURL=construction-log-where-unique.input.js.map