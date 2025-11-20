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
exports.ContainerWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const container_where_input_1 = require("./container-where.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const storage_relation_filter_input_1 = require("../storage/storage-relation-filter.input");
const category_list_relation_filter_input_1 = require("../category/category-list-relation-filter.input");
const item_list_relation_filter_input_1 = require("../item/item-list-relation-filter.input");
let ContainerWhereUniqueInput = class ContainerWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContainerWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ContainerWhereUniqueInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => [container_where_input_1.ContainerWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContainerWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [container_where_input_1.ContainerWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContainerWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [container_where_input_1.ContainerWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContainerWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContainerWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContainerWhereUniqueInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ContainerWhereUniqueInput.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ContainerWhereUniqueInput.prototype, "storageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContainerWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ContainerWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_relation_filter_input_1.StorageRelationFilter, { nullable: true }),
    __metadata("design:type", storage_relation_filter_input_1.StorageRelationFilter)
], ContainerWhereUniqueInput.prototype, "storage", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_list_relation_filter_input_1.CategoryListRelationFilter, { nullable: true }),
    __metadata("design:type", category_list_relation_filter_input_1.CategoryListRelationFilter)
], ContainerWhereUniqueInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_list_relation_filter_input_1.ItemListRelationFilter, { nullable: true }),
    __metadata("design:type", item_list_relation_filter_input_1.ItemListRelationFilter)
], ContainerWhereUniqueInput.prototype, "items", void 0);
ContainerWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ContainerWhereUniqueInput);
exports.ContainerWhereUniqueInput = ContainerWhereUniqueInput;
//# sourceMappingURL=container-where-unique.input.js.map