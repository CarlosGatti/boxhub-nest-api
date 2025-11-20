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
exports.LogCommentUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_create_without_user_input_1 = require("./log-comment-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const log_comment_create_or_connect_without_user_input_1 = require("./log-comment-create-or-connect-without-user.input");
const log_comment_upsert_with_where_unique_without_user_input_1 = require("./log-comment-upsert-with-where-unique-without-user.input");
const log_comment_create_many_user_input_envelope_input_1 = require("./log-comment-create-many-user-input-envelope.input");
const log_comment_where_unique_input_1 = require("./log-comment-where-unique.input");
const log_comment_update_with_where_unique_without_user_input_1 = require("./log-comment-update-with-where-unique-without-user.input");
const log_comment_update_many_with_where_without_user_input_1 = require("./log-comment-update-many-with-where-without-user.input");
const log_comment_scalar_where_input_1 = require("./log-comment-scalar-where.input");
let LogCommentUpdateManyWithoutUserNestedInput = class LogCommentUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_comment_create_without_user_input_1.LogCommentCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_create_without_user_input_1.LogCommentCreateWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_create_or_connect_without_user_input_1.LogCommentCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_create_or_connect_without_user_input_1.LogCommentCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_upsert_with_where_unique_without_user_input_1.LogCommentUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_upsert_with_where_unique_without_user_input_1.LogCommentUpsertWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_create_many_user_input_envelope_input_1.LogCommentCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_create_many_user_input_envelope_input_1.LogCommentCreateManyUserInputEnvelope),
    __metadata("design:type", log_comment_create_many_user_input_envelope_input_1.LogCommentCreateManyUserInputEnvelope)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_update_with_where_unique_without_user_input_1.LogCommentUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_update_with_where_unique_without_user_input_1.LogCommentUpdateWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_update_many_with_where_without_user_input_1.LogCommentUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_update_many_with_where_without_user_input_1.LogCommentUpdateManyWithWhereWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_scalar_where_input_1.LogCommentScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_scalar_where_input_1.LogCommentScalarWhereInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
LogCommentUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentUpdateManyWithoutUserNestedInput);
exports.LogCommentUpdateManyWithoutUserNestedInput = LogCommentUpdateManyWithoutUserNestedInput;
//# sourceMappingURL=log-comment-update-many-without-user-nested.input.js.map