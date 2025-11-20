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
var LogScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_log_action_filter_input_1 = require("../prisma/enum-log-action-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const json_nullable_filter_input_1 = require("../prisma/json-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let LogScalarWhereInput = LogScalarWhereInput_1 = class LogScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_log_action_filter_input_1.EnumLogActionFilter, { nullable: true }),
    __metadata("design:type", enum_log_action_filter_input_1.EnumLogActionFilter)
], LogScalarWhereInput.prototype, "action", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], LogScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogScalarWhereInput.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogScalarWhereInput.prototype, "route", void 0);
__decorate([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    __metadata("design:type", json_nullable_filter_input_1.JsonNullableFilter)
], LogScalarWhereInput.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], LogScalarWhereInput.prototype, "ipAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogScalarWhereInput.prototype, "createdAt", void 0);
LogScalarWhereInput = LogScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LogScalarWhereInput);
exports.LogScalarWhereInput = LogScalarWhereInput;
//# sourceMappingURL=log-scalar-where.input.js.map