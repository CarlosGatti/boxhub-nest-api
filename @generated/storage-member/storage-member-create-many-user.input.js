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
exports.StorageMemberCreateManyUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const storage_role_enum_1 = require("../prisma/storage-role.enum");
let StorageMemberCreateManyUserInput = class StorageMemberCreateManyUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], StorageMemberCreateManyUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], StorageMemberCreateManyUserInput.prototype, "storageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_role_enum_1.StorageRole, { nullable: true }),
    __metadata("design:type", Object)
], StorageMemberCreateManyUserInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], StorageMemberCreateManyUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], StorageMemberCreateManyUserInput.prototype, "updatedAt", void 0);
StorageMemberCreateManyUserInput = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberCreateManyUserInput);
exports.StorageMemberCreateManyUserInput = StorageMemberCreateManyUserInput;
//# sourceMappingURL=storage-member-create-many-user.input.js.map