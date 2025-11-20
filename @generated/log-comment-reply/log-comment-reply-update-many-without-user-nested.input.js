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
exports.LogCommentReplyUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_reply_create_without_user_input_1 = require("./log-comment-reply-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const log_comment_reply_create_or_connect_without_user_input_1 = require("./log-comment-reply-create-or-connect-without-user.input");
const log_comment_reply_upsert_with_where_unique_without_user_input_1 = require("./log-comment-reply-upsert-with-where-unique-without-user.input");
const log_comment_reply_create_many_user_input_envelope_input_1 = require("./log-comment-reply-create-many-user-input-envelope.input");
const log_comment_reply_where_unique_input_1 = require("./log-comment-reply-where-unique.input");
const log_comment_reply_update_with_where_unique_without_user_input_1 = require("./log-comment-reply-update-with-where-unique-without-user.input");
const log_comment_reply_update_many_with_where_without_user_input_1 = require("./log-comment-reply-update-many-with-where-without-user.input");
const log_comment_reply_scalar_where_input_1 = require("./log-comment-reply-scalar-where.input");
let LogCommentReplyUpdateManyWithoutUserNestedInput = class LogCommentReplyUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_create_without_user_input_1.LogCommentReplyCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_without_user_input_1.LogCommentReplyCreateWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_create_or_connect_without_user_input_1.LogCommentReplyCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_or_connect_without_user_input_1.LogCommentReplyCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_upsert_with_where_unique_without_user_input_1.LogCommentReplyUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_upsert_with_where_unique_without_user_input_1.LogCommentReplyUpsertWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_many_user_input_envelope_input_1.LogCommentReplyCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_many_user_input_envelope_input_1.LogCommentReplyCreateManyUserInputEnvelope),
    __metadata("design:type", log_comment_reply_create_many_user_input_envelope_input_1.LogCommentReplyCreateManyUserInputEnvelope)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_update_with_where_unique_without_user_input_1.LogCommentReplyUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_update_with_where_unique_without_user_input_1.LogCommentReplyUpdateWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_update_many_with_where_without_user_input_1.LogCommentReplyUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_update_many_with_where_without_user_input_1.LogCommentReplyUpdateManyWithWhereWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_scalar_where_input_1.LogCommentReplyScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_scalar_where_input_1.LogCommentReplyScalarWhereInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
LogCommentReplyUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyUpdateManyWithoutUserNestedInput);
exports.LogCommentReplyUpdateManyWithoutUserNestedInput = LogCommentReplyUpdateManyWithoutUserNestedInput;
//# sourceMappingURL=log-comment-reply-update-many-without-user-nested.input.js.map