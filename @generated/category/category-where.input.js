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
var CategoryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const container_list_relation_filter_input_1 = require("../container/container-list-relation-filter.input");
let CategoryWhereInput = CategoryWhereInput_1 = class CategoryWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CategoryWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoryWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CategoryWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CategoryWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], CategoryWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CategoryWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CategoryWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CategoryWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], CategoryWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => container_list_relation_filter_input_1.ContainerListRelationFilter, { nullable: true }),
    __metadata("design:type", container_list_relation_filter_input_1.ContainerListRelationFilter)
], CategoryWhereInput.prototype, "containers", void 0);
CategoryWhereInput = CategoryWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CategoryWhereInput);
exports.CategoryWhereInput = CategoryWhereInput;
//# sourceMappingURL=category-where.input.js.map