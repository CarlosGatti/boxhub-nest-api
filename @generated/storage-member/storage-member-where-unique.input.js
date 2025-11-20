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
exports.StorageMemberWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const storage_member_user_id_storage_id_compound_unique_input_1 = require("./storage-member-user-id-storage-id-compound-unique.input");
const storage_member_where_input_1 = require("./storage-member-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_storage_role_filter_input_1 = require("../prisma/enum-storage-role-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const storage_relation_filter_input_1 = require("../storage/storage-relation-filter.input");
let StorageMemberWhereUniqueInput = class StorageMemberWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], StorageMemberWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_user_id_storage_id_compound_unique_input_1.StorageMemberUserIdStorageIdCompoundUniqueInput, { nullable: true }),
    __metadata("design:type", storage_member_user_id_storage_id_compound_unique_input_1.StorageMemberUserIdStorageIdCompoundUniqueInput)
], StorageMemberWhereUniqueInput.prototype, "userId_storageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_input_1.StorageMemberWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], StorageMemberWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_input_1.StorageMemberWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], StorageMemberWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_input_1.StorageMemberWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], StorageMemberWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], StorageMemberWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], StorageMemberWhereUniqueInput.prototype, "storageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_storage_role_filter_input_1.EnumStorageRoleFilter, { nullable: true }),
    __metadata("design:type", enum_storage_role_filter_input_1.EnumStorageRoleFilter)
], StorageMemberWhereUniqueInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], StorageMemberWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], StorageMemberWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], StorageMemberWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_relation_filter_input_1.StorageRelationFilter, { nullable: true }),
    __metadata("design:type", storage_relation_filter_input_1.StorageRelationFilter)
], StorageMemberWhereUniqueInput.prototype, "storage", void 0);
StorageMemberWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberWhereUniqueInput);
exports.StorageMemberWhereUniqueInput = StorageMemberWhereUniqueInput;
//# sourceMappingURL=storage-member-where-unique.input.js.map