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
var SubcontractorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcontractorWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const bool_filter_input_1 = require("../prisma/bool-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const insurance_list_relation_filter_input_1 = require("../insurance/insurance-list-relation-filter.input");
let SubcontractorWhereInput = SubcontractorWhereInput_1 = class SubcontractorWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [SubcontractorWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SubcontractorWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SubcontractorWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SubcontractorWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SubcontractorWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SubcontractorWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], SubcontractorWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SubcontractorWhereInput.prototype, "companyName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SubcontractorWhereInput.prototype, "contactName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SubcontractorWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SubcontractorWhereInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SubcontractorWhereInput.prototype, "trade", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SubcontractorWhereInput.prototype, "bankAccount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SubcontractorWhereInput.prototype, "paymentPreference", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], SubcontractorWhereInput.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], SubcontractorWhereInput.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], SubcontractorWhereInput.prototype, "createdViaPublicForm", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SubcontractorWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SubcontractorWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => insurance_list_relation_filter_input_1.InsuranceListRelationFilter, { nullable: true }),
    __metadata("design:type", insurance_list_relation_filter_input_1.InsuranceListRelationFilter)
], SubcontractorWhereInput.prototype, "insurances", void 0);
SubcontractorWhereInput = SubcontractorWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], SubcontractorWhereInput);
exports.SubcontractorWhereInput = SubcontractorWhereInput;
//# sourceMappingURL=subcontractor-where.input.js.map