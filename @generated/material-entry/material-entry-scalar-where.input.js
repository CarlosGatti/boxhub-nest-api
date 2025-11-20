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
var MaterialEntryScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialEntryScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const float_filter_input_1 = require("../prisma/float-filter.input");
const int_nullable_filter_input_1 = require("../prisma/int-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const json_nullable_filter_input_1 = require("../prisma/json-nullable-filter.input");
let MaterialEntryScalarWhereInput = MaterialEntryScalarWhereInput_1 = class MaterialEntryScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [MaterialEntryScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], MaterialEntryScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MaterialEntryScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], MaterialEntryScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [MaterialEntryScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], MaterialEntryScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], MaterialEntryScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], MaterialEntryScalarWhereInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], MaterialEntryScalarWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], MaterialEntryScalarWhereInput.prototype, "supplier", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_filter_input_1.FloatFilter, { nullable: true }),
    __metadata("design:type", float_filter_input_1.FloatFilter)
], MaterialEntryScalarWhereInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_nullable_filter_input_1.IntNullableFilter, { nullable: true }),
    __metadata("design:type", int_nullable_filter_input_1.IntNullableFilter)
], MaterialEntryScalarWhereInput.prototype, "receivedById", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], MaterialEntryScalarWhereInput.prototype, "receivedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], MaterialEntryScalarWhereInput.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    __metadata("design:type", json_nullable_filter_input_1.JsonNullableFilter)
], MaterialEntryScalarWhereInput.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], MaterialEntryScalarWhereInput.prototype, "createdAt", void 0);
MaterialEntryScalarWhereInput = MaterialEntryScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], MaterialEntryScalarWhereInput);
exports.MaterialEntryScalarWhereInput = MaterialEntryScalarWhereInput;
//# sourceMappingURL=material-entry-scalar-where.input.js.map