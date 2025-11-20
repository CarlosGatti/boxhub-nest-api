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
var NestedEnumDiscartItemConditionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDiscartItemConditionFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const discart_item_condition_enum_1 = require("./discart-item-condition.enum");
let NestedEnumDiscartItemConditionFilter = NestedEnumDiscartItemConditionFilter_1 = class NestedEnumDiscartItemConditionFilter {
};
__decorate([
    (0, graphql_1.Field)(() => discart_item_condition_enum_1.DiscartItemCondition, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumDiscartItemConditionFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_condition_enum_1.DiscartItemCondition], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumDiscartItemConditionFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_condition_enum_1.DiscartItemCondition], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumDiscartItemConditionFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumDiscartItemConditionFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumDiscartItemConditionFilter)
], NestedEnumDiscartItemConditionFilter.prototype, "not", void 0);
NestedEnumDiscartItemConditionFilter = NestedEnumDiscartItemConditionFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumDiscartItemConditionFilter);
exports.NestedEnumDiscartItemConditionFilter = NestedEnumDiscartItemConditionFilter;
//# sourceMappingURL=nested-enum-discart-item-condition-filter.input.js.map