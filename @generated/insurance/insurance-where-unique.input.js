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
exports.InsuranceWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const insurance_where_input_1 = require("./insurance-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const subcontractor_relation_filter_input_1 = require("../subcontractor/subcontractor-relation-filter.input");
let InsuranceWhereUniqueInput = class InsuranceWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], InsuranceWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_where_input_1.InsuranceWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], InsuranceWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_where_input_1.InsuranceWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], InsuranceWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_where_input_1.InsuranceWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], InsuranceWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], InsuranceWhereUniqueInput.prototype, "subcontractorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], InsuranceWhereUniqueInput.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], InsuranceWhereUniqueInput.prototype, "expiration", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], InsuranceWhereUniqueInput.prototype, "documentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], InsuranceWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => subcontractor_relation_filter_input_1.SubcontractorRelationFilter, { nullable: true }),
    __metadata("design:type", subcontractor_relation_filter_input_1.SubcontractorRelationFilter)
], InsuranceWhereUniqueInput.prototype, "subcontractor", void 0);
InsuranceWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], InsuranceWhereUniqueInput);
exports.InsuranceWhereUniqueInput = InsuranceWhereUniqueInput;
//# sourceMappingURL=insurance-where-unique.input.js.map