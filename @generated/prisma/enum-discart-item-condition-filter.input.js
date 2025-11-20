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
exports.EnumDiscartItemConditionFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const discart_item_condition_enum_1 = require("./discart-item-condition.enum");
const nested_enum_discart_item_condition_filter_input_1 = require("./nested-enum-discart-item-condition-filter.input");
let EnumDiscartItemConditionFilter = class EnumDiscartItemConditionFilter {
};
__decorate([
    (0, graphql_1.Field)(() => discart_item_condition_enum_1.DiscartItemCondition, { nullable: true }),
    __metadata("design:type", Object)
], EnumDiscartItemConditionFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_condition_enum_1.DiscartItemCondition], { nullable: true }),
    __metadata("design:type", Array)
], EnumDiscartItemConditionFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_condition_enum_1.DiscartItemCondition], { nullable: true }),
    __metadata("design:type", Array)
], EnumDiscartItemConditionFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_discart_item_condition_filter_input_1.NestedEnumDiscartItemConditionFilter, { nullable: true }),
    __metadata("design:type", nested_enum_discart_item_condition_filter_input_1.NestedEnumDiscartItemConditionFilter)
], EnumDiscartItemConditionFilter.prototype, "not", void 0);
EnumDiscartItemConditionFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumDiscartItemConditionFilter);
exports.EnumDiscartItemConditionFilter = EnumDiscartItemConditionFilter;
//# sourceMappingURL=enum-discart-item-condition-filter.input.js.map