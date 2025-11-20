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
var StorageWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const storage_member_list_relation_filter_input_1 = require("../storage-member/storage-member-list-relation-filter.input");
const container_list_relation_filter_input_1 = require("../container/container-list-relation-filter.input");
let StorageWhereInput = StorageWhereInput_1 = class StorageWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [StorageWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], StorageWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StorageWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], StorageWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StorageWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], StorageWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], StorageWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], StorageWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], StorageWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], StorageWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_list_relation_filter_input_1.StorageMemberListRelationFilter, { nullable: true }),
    __metadata("design:type", storage_member_list_relation_filter_input_1.StorageMemberListRelationFilter)
], StorageWhereInput.prototype, "members", void 0);
__decorate([
    (0, graphql_1.Field)(() => container_list_relation_filter_input_1.ContainerListRelationFilter, { nullable: true }),
    __metadata("design:type", container_list_relation_filter_input_1.ContainerListRelationFilter)
], StorageWhereInput.prototype, "containers", void 0);
StorageWhereInput = StorageWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], StorageWhereInput);
exports.StorageWhereInput = StorageWhereInput;
//# sourceMappingURL=storage-where.input.js.map