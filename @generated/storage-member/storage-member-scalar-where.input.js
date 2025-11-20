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
var StorageMemberScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageMemberScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const enum_storage_role_filter_input_1 = require("../prisma/enum-storage-role-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let StorageMemberScalarWhereInput = StorageMemberScalarWhereInput_1 = class StorageMemberScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [StorageMemberScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], StorageMemberScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StorageMemberScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], StorageMemberScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StorageMemberScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], StorageMemberScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], StorageMemberScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], StorageMemberScalarWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], StorageMemberScalarWhereInput.prototype, "storageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_storage_role_filter_input_1.EnumStorageRoleFilter, { nullable: true }),
    __metadata("design:type", enum_storage_role_filter_input_1.EnumStorageRoleFilter)
], StorageMemberScalarWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], StorageMemberScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], StorageMemberScalarWhereInput.prototype, "updatedAt", void 0);
StorageMemberScalarWhereInput = StorageMemberScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberScalarWhereInput);
exports.StorageMemberScalarWhereInput = StorageMemberScalarWhereInput;
//# sourceMappingURL=storage-member-scalar-where.input.js.map