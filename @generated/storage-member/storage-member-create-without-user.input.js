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
exports.StorageMemberCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const storage_role_enum_1 = require("../prisma/storage-role.enum");
const storage_create_nested_one_without_members_input_1 = require("../storage/storage-create-nested-one-without-members.input");
let StorageMemberCreateWithoutUserInput = class StorageMemberCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => storage_role_enum_1.StorageRole, { nullable: true }),
    __metadata("design:type", Object)
], StorageMemberCreateWithoutUserInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], StorageMemberCreateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], StorageMemberCreateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_create_nested_one_without_members_input_1.StorageCreateNestedOneWithoutMembersInput, { nullable: false }),
    __metadata("design:type", storage_create_nested_one_without_members_input_1.StorageCreateNestedOneWithoutMembersInput)
], StorageMemberCreateWithoutUserInput.prototype, "storage", void 0);
StorageMemberCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberCreateWithoutUserInput);
exports.StorageMemberCreateWithoutUserInput = StorageMemberCreateWithoutUserInput;
//# sourceMappingURL=storage-member-create-without-user.input.js.map