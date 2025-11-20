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
exports.StorageMemberUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const storage_member_create_without_user_input_1 = require("./storage-member-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const storage_member_create_or_connect_without_user_input_1 = require("./storage-member-create-or-connect-without-user.input");
const storage_member_upsert_with_where_unique_without_user_input_1 = require("./storage-member-upsert-with-where-unique-without-user.input");
const storage_member_create_many_user_input_envelope_input_1 = require("./storage-member-create-many-user-input-envelope.input");
const storage_member_where_unique_input_1 = require("./storage-member-where-unique.input");
const storage_member_update_with_where_unique_without_user_input_1 = require("./storage-member-update-with-where-unique-without-user.input");
const storage_member_update_many_with_where_without_user_input_1 = require("./storage-member-update-many-with-where-without-user.input");
const storage_member_scalar_where_input_1 = require("./storage-member-scalar-where.input");
let StorageMemberUpdateManyWithoutUserNestedInput = class StorageMemberUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [storage_member_create_without_user_input_1.StorageMemberCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_create_without_user_input_1.StorageMemberCreateWithoutUserInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_create_or_connect_without_user_input_1.StorageMemberCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_create_or_connect_without_user_input_1.StorageMemberCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_upsert_with_where_unique_without_user_input_1.StorageMemberUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_upsert_with_where_unique_without_user_input_1.StorageMemberUpsertWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_create_many_user_input_envelope_input_1.StorageMemberCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_create_many_user_input_envelope_input_1.StorageMemberCreateManyUserInputEnvelope),
    __metadata("design:type", storage_member_create_many_user_input_envelope_input_1.StorageMemberCreateManyUserInputEnvelope)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_unique_input_1.StorageMemberWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_where_unique_input_1.StorageMemberWhereUniqueInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_unique_input_1.StorageMemberWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_where_unique_input_1.StorageMemberWhereUniqueInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_unique_input_1.StorageMemberWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_where_unique_input_1.StorageMemberWhereUniqueInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_unique_input_1.StorageMemberWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_where_unique_input_1.StorageMemberWhereUniqueInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_update_with_where_unique_without_user_input_1.StorageMemberUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_update_with_where_unique_without_user_input_1.StorageMemberUpdateWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_update_many_with_where_without_user_input_1.StorageMemberUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_update_many_with_where_without_user_input_1.StorageMemberUpdateManyWithWhereWithoutUserInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_scalar_where_input_1.StorageMemberScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_scalar_where_input_1.StorageMemberScalarWhereInput),
    __metadata("design:type", Array)
], StorageMemberUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
StorageMemberUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberUpdateManyWithoutUserNestedInput);
exports.StorageMemberUpdateManyWithoutUserNestedInput = StorageMemberUpdateManyWithoutUserNestedInput;
//# sourceMappingURL=storage-member-update-many-without-user-nested.input.js.map