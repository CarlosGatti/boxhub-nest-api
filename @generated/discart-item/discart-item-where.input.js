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
var DiscartItemWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscartItemWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const enum_discart_item_type_filter_input_1 = require("../prisma/enum-discart-item-type-filter.input");
const float_nullable_filter_input_1 = require("../prisma/float-nullable-filter.input");
const enum_discart_item_condition_filter_input_1 = require("../prisma/enum-discart-item-condition-filter.input");
const enum_discart_item_status_filter_input_1 = require("../prisma/enum-discart-item-status-filter.input");
const string_nullable_list_filter_input_1 = require("../prisma/string-nullable-list-filter.input");
const json_nullable_filter_input_1 = require("../prisma/json-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let DiscartItemWhereInput = DiscartItemWhereInput_1 = class DiscartItemWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [DiscartItemWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DiscartItemWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiscartItemWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DiscartItemWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [DiscartItemWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], DiscartItemWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], DiscartItemWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], DiscartItemWhereInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], DiscartItemWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_discart_item_type_filter_input_1.EnumDiscartItemTypeFilter, { nullable: true }),
    __metadata("design:type", enum_discart_item_type_filter_input_1.EnumDiscartItemTypeFilter)
], DiscartItemWhereInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_nullable_filter_input_1.FloatNullableFilter, { nullable: true }),
    __metadata("design:type", float_nullable_filter_input_1.FloatNullableFilter)
], DiscartItemWhereInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], DiscartItemWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_discart_item_condition_filter_input_1.EnumDiscartItemConditionFilter, { nullable: true }),
    __metadata("design:type", enum_discart_item_condition_filter_input_1.EnumDiscartItemConditionFilter)
], DiscartItemWhereInput.prototype, "condition", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_discart_item_status_filter_input_1.EnumDiscartItemStatusFilter, { nullable: true }),
    __metadata("design:type", enum_discart_item_status_filter_input_1.EnumDiscartItemStatusFilter)
], DiscartItemWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_list_filter_input_1.StringNullableListFilter, { nullable: true }),
    __metadata("design:type", string_nullable_list_filter_input_1.StringNullableListFilter)
], DiscartItemWhereInput.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => json_nullable_filter_input_1.JsonNullableFilter, { nullable: true }),
    __metadata("design:type", json_nullable_filter_input_1.JsonNullableFilter)
], DiscartItemWhereInput.prototype, "pickupAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], DiscartItemWhereInput.prototype, "contactPhone", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], DiscartItemWhereInput.prototype, "createdById", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], DiscartItemWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], DiscartItemWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], DiscartItemWhereInput.prototype, "createdBy", void 0);
DiscartItemWhereInput = DiscartItemWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], DiscartItemWhereInput);
exports.DiscartItemWhereInput = DiscartItemWhereInput;
//# sourceMappingURL=discart-item-where.input.js.map