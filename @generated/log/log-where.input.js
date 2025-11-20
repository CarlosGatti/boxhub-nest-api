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
var LogWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_log_action_filter_input_1 = require("../prisma/enum-log-action-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const json_nullable_filter_input_1 = require("../prisma/json-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_nullable_relation_filter_input_1 = require("../user/user-nullable-relation-filter.input");
let LogWhereInput = LogWhereInput_1 = class LogWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LogWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_log_action_filter_input_1.EnumLogActionFilter, { nullable: true }),
    __metadata("design:type", enum_log_action_filter_input_1.EnumLogActionFilter)
], LogWhereInput.prototype, "action", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], LogWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogWhereInput.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogWhereInput.prototype, "route", void 0);
__decorate([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    __metadata("design:type", json_nullable_filter_input_1.JsonNullableFilter)
], LogWhereInput.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogWhereInput.prototype, "ipAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_nullable_relation_filter_input_1.UserNullableRelationFilter, { nullable: true }),
    __metadata("design:type", user_nullable_relation_filter_input_1.UserNullableRelationFilter)
], LogWhereInput.prototype, "user", void 0);
LogWhereInput = LogWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LogWhereInput);
exports.LogWhereInput = LogWhereInput;
//# sourceMappingURL=log-where.input.js.map