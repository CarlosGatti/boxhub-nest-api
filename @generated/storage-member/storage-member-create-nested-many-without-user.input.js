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
exports.StorageMemberCreateNestedManyWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const storage_member_create_without_user_input_1 = require("./storage-member-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const storage_member_create_or_connect_without_user_input_1 = require("./storage-member-create-or-connect-without-user.input");
const storage_member_create_many_user_input_envelope_input_1 = require("./storage-member-create-many-user-input-envelope.input");
const storage_member_where_unique_input_1 = require("./storage-member-where-unique.input");
let StorageMemberCreateNestedManyWithoutUserInput = class StorageMemberCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [storage_member_create_without_user_input_1.StorageMemberCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_create_without_user_input_1.StorageMemberCreateWithoutUserInput),
    __metadata("design:type", Array)
], StorageMemberCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_create_or_connect_without_user_input_1.StorageMemberCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_create_or_connect_without_user_input_1.StorageMemberCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], StorageMemberCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_create_many_user_input_envelope_input_1.StorageMemberCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_create_many_user_input_envelope_input_1.StorageMemberCreateManyUserInputEnvelope),
    __metadata("design:type", storage_member_create_many_user_input_envelope_input_1.StorageMemberCreateManyUserInputEnvelope)
], StorageMemberCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_where_unique_input_1.StorageMemberWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => storage_member_where_unique_input_1.StorageMemberWhereUniqueInput),
    __metadata("design:type", Array)
], StorageMemberCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
StorageMemberCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberCreateNestedManyWithoutUserInput);
exports.StorageMemberCreateNestedManyWithoutUserInput = StorageMemberCreateNestedManyWithoutUserInput;
//# sourceMappingURL=storage-member-create-nested-many-without-user.input.js.map