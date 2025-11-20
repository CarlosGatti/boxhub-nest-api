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
exports.StorageUpdateOneRequiredWithoutMembersNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const storage_create_without_members_input_1 = require("./storage-create-without-members.input");
const class_transformer_1 = require("class-transformer");
const storage_create_or_connect_without_members_input_1 = require("./storage-create-or-connect-without-members.input");
const storage_upsert_without_members_input_1 = require("./storage-upsert-without-members.input");
const client_1 = require("@prisma/client");
const storage_where_unique_input_1 = require("./storage-where-unique.input");
const storage_update_to_one_with_where_without_members_input_1 = require("./storage-update-to-one-with-where-without-members.input");
let StorageUpdateOneRequiredWithoutMembersNestedInput = class StorageUpdateOneRequiredWithoutMembersNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => storage_create_without_members_input_1.StorageCreateWithoutMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_create_without_members_input_1.StorageCreateWithoutMembersInput),
    __metadata("design:type", storage_create_without_members_input_1.StorageCreateWithoutMembersInput)
], StorageUpdateOneRequiredWithoutMembersNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_create_or_connect_without_members_input_1.StorageCreateOrConnectWithoutMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_create_or_connect_without_members_input_1.StorageCreateOrConnectWithoutMembersInput),
    __metadata("design:type", storage_create_or_connect_without_members_input_1.StorageCreateOrConnectWithoutMembersInput)
], StorageUpdateOneRequiredWithoutMembersNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_upsert_without_members_input_1.StorageUpsertWithoutMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_upsert_without_members_input_1.StorageUpsertWithoutMembersInput),
    __metadata("design:type", storage_upsert_without_members_input_1.StorageUpsertWithoutMembersInput)
], StorageUpdateOneRequiredWithoutMembersNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_where_unique_input_1.StorageWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_where_unique_input_1.StorageWhereUniqueInput),
    __metadata("design:type", Object)
], StorageUpdateOneRequiredWithoutMembersNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_update_to_one_with_where_without_members_input_1.StorageUpdateToOneWithWhereWithoutMembersInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_update_to_one_with_where_without_members_input_1.StorageUpdateToOneWithWhereWithoutMembersInput),
    __metadata("design:type", storage_update_to_one_with_where_without_members_input_1.StorageUpdateToOneWithWhereWithoutMembersInput)
], StorageUpdateOneRequiredWithoutMembersNestedInput.prototype, "update", void 0);
StorageUpdateOneRequiredWithoutMembersNestedInput = __decorate([
    (0, graphql_2.InputType)()
], StorageUpdateOneRequiredWithoutMembersNestedInput);
exports.StorageUpdateOneRequiredWithoutMembersNestedInput = StorageUpdateOneRequiredWithoutMembersNestedInput;
//# sourceMappingURL=storage-update-one-required-without-members-nested.input.js.map