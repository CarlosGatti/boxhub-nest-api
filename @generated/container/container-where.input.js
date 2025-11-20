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
var ContainerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const storage_relation_filter_input_1 = require("../storage/storage-relation-filter.input");
const category_list_relation_filter_input_1 = require("../category/category-list-relation-filter.input");
const item_list_relation_filter_input_1 = require("../item/item-list-relation-filter.input");
let ContainerWhereInput = ContainerWhereInput_1 = class ContainerWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ContainerWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContainerWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContainerWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContainerWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContainerWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContainerWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ContainerWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContainerWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContainerWhereInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContainerWhereInput.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContainerWhereInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ContainerWhereInput.prototype, "storageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContainerWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContainerWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_relation_filter_input_1.StorageRelationFilter, { nullable: true }),
    __metadata("design:type", storage_relation_filter_input_1.StorageRelationFilter)
], ContainerWhereInput.prototype, "storage", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_list_relation_filter_input_1.CategoryListRelationFilter, { nullable: true }),
    __metadata("design:type", category_list_relation_filter_input_1.CategoryListRelationFilter)
], ContainerWhereInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_list_relation_filter_input_1.ItemListRelationFilter, { nullable: true }),
    __metadata("design:type", item_list_relation_filter_input_1.ItemListRelationFilter)
], ContainerWhereInput.prototype, "items", void 0);
ContainerWhereInput = ContainerWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ContainerWhereInput);
exports.ContainerWhereInput = ContainerWhereInput;
//# sourceMappingURL=container-where.input.js.map