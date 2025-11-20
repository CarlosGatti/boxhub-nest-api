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
exports.StorageUpsertWithoutMembersInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const storage_update_without_members_input_1 = require("./storage-update-without-members.input");
const class_transformer_1 = require("class-transformer");
const storage_create_without_members_input_1 = require("./storage-create-without-members.input");
const storage_where_input_1 = require("./storage-where.input");
let StorageUpsertWithoutMembersInput = class StorageUpsertWithoutMembersInput {
};
__decorate([
    (0, graphql_1.Field)(() => storage_update_without_members_input_1.StorageUpdateWithoutMembersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => storage_update_without_members_input_1.StorageUpdateWithoutMembersInput),
    __metadata("design:type", storage_update_without_members_input_1.StorageUpdateWithoutMembersInput)
], StorageUpsertWithoutMembersInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_create_without_members_input_1.StorageCreateWithoutMembersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => storage_create_without_members_input_1.StorageCreateWithoutMembersInput),
    __metadata("design:type", storage_create_without_members_input_1.StorageCreateWithoutMembersInput)
], StorageUpsertWithoutMembersInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_where_input_1.StorageWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_where_input_1.StorageWhereInput),
    __metadata("design:type", storage_where_input_1.StorageWhereInput)
], StorageUpsertWithoutMembersInput.prototype, "where", void 0);
StorageUpsertWithoutMembersInput = __decorate([
    (0, graphql_2.InputType)()
], StorageUpsertWithoutMembersInput);
exports.StorageUpsertWithoutMembersInput = StorageUpsertWithoutMembersInput;
//# sourceMappingURL=storage-upsert-without-members.input.js.map