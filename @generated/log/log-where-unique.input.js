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
exports.LogWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const log_where_input_1 = require("./log-where.input");
const enum_log_action_filter_input_1 = require("../prisma/enum-log-action-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const json_nullable_filter_input_1 = require("../prisma/json-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_nullable_relation_filter_input_1 = require("../user/user-nullable-relation-filter.input");
let LogWhereUniqueInput = class LogWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LogWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_input_1.LogWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_input_1.LogWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_input_1.LogWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_log_action_filter_input_1.EnumLogActionFilter, { nullable: true }),
    __metadata("design:type", enum_log_action_filter_input_1.EnumLogActionFilter)
], LogWhereUniqueInput.prototype, "action", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], LogWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogWhereUniqueInput.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogWhereUniqueInput.prototype, "route", void 0);
__decorate([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    __metadata("design:type", json_nullable_filter_input_1.JsonNullableFilter)
], LogWhereUniqueInput.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogWhereUniqueInput.prototype, "ipAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_relation_filter_input_1.UserNullableRelationFilter, { nullable: true }),
    __metadata("design:type", user_nullable_relation_filter_input_1.UserNullableRelationFilter)
], LogWhereUniqueInput.prototype, "user", void 0);
LogWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], LogWhereUniqueInput);
exports.LogWhereUniqueInput = LogWhereUniqueInput;
//# sourceMappingURL=log-where-unique.input.js.map