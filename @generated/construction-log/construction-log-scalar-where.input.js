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
var ConstructionLogScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionLogScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_log_type_filter_input_1 = require("../prisma/enum-log-type-filter.input");
const json_nullable_filter_input_1 = require("../prisma/json-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let ConstructionLogScalarWhereInput = ConstructionLogScalarWhereInput_1 = class ConstructionLogScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ConstructionLogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ConstructionLogScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConstructionLogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ConstructionLogScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ConstructionLogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ConstructionLogScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ConstructionLogScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ConstructionLogScalarWhereInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ConstructionLogScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ConstructionLogScalarWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ConstructionLogScalarWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_log_type_filter_input_1.EnumLogTypeFilter, { nullable: true }),
    __metadata("design:type", enum_log_type_filter_input_1.EnumLogTypeFilter)
], ConstructionLogScalarWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    __metadata("design:type", json_nullable_filter_input_1.JsonNullableFilter)
], ConstructionLogScalarWhereInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ConstructionLogScalarWhereInput.prototype, "createdAt", void 0);
ConstructionLogScalarWhereInput = ConstructionLogScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogScalarWhereInput);
exports.ConstructionLogScalarWhereInput = ConstructionLogScalarWhereInput;
//# sourceMappingURL=construction-log-scalar-where.input.js.map