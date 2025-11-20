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
exports.EnumDiscartItemStatusFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const discart_item_status_enum_1 = require("./discart-item-status.enum");
const nested_enum_discart_item_status_filter_input_1 = require("./nested-enum-discart-item-status-filter.input");
let EnumDiscartItemStatusFilter = class EnumDiscartItemStatusFilter {
};
__decorate([
    (0, graphql_1.Field)(() => discart_item_status_enum_1.DiscartItemStatus, { nullable: true }),
    __metadata("design:type", Object)
], EnumDiscartItemStatusFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_status_enum_1.DiscartItemStatus], { nullable: true }),
    __metadata("design:type", Array)
], EnumDiscartItemStatusFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_status_enum_1.DiscartItemStatus], { nullable: true }),
    __metadata("design:type", Array)
], EnumDiscartItemStatusFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_discart_item_status_filter_input_1.NestedEnumDiscartItemStatusFilter, { nullable: true }),
    __metadata("design:type", nested_enum_discart_item_status_filter_input_1.NestedEnumDiscartItemStatusFilter)
], EnumDiscartItemStatusFilter.prototype, "not", void 0);
EnumDiscartItemStatusFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumDiscartItemStatusFilter);
exports.EnumDiscartItemStatusFilter = EnumDiscartItemStatusFilter;
//# sourceMappingURL=enum-discart-item-status-filter.input.js.map