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
exports.LogCommentReplyUpdateManyWithoutCommentNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_reply_create_without_comment_input_1 = require("./log-comment-reply-create-without-comment.input");
const class_transformer_1 = require("class-transformer");
const log_comment_reply_create_or_connect_without_comment_input_1 = require("./log-comment-reply-create-or-connect-without-comment.input");
const log_comment_reply_upsert_with_where_unique_without_comment_input_1 = require("./log-comment-reply-upsert-with-where-unique-without-comment.input");
const log_comment_reply_create_many_comment_input_envelope_input_1 = require("./log-comment-reply-create-many-comment-input-envelope.input");
const log_comment_reply_where_unique_input_1 = require("./log-comment-reply-where-unique.input");
const log_comment_reply_update_with_where_unique_without_comment_input_1 = require("./log-comment-reply-update-with-where-unique-without-comment.input");
const log_comment_reply_update_many_with_where_without_comment_input_1 = require("./log-comment-reply-update-many-with-where-without-comment.input");
const log_comment_reply_scalar_where_input_1 = require("./log-comment-reply-scalar-where.input");
let LogCommentReplyUpdateManyWithoutCommentNestedInput = class LogCommentReplyUpdateManyWithoutCommentNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_create_without_comment_input_1.LogCommentReplyCreateWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_without_comment_input_1.LogCommentReplyCreateWithoutCommentInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_create_or_connect_without_comment_input_1.LogCommentReplyCreateOrConnectWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_or_connect_without_comment_input_1.LogCommentReplyCreateOrConnectWithoutCommentInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_upsert_with_where_unique_without_comment_input_1.LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_upsert_with_where_unique_without_comment_input_1.LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_many_comment_input_envelope_input_1.LogCommentReplyCreateManyCommentInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_many_comment_input_envelope_input_1.LogCommentReplyCreateManyCommentInputEnvelope),
    __metadata("design:type", log_comment_reply_create_many_comment_input_envelope_input_1.LogCommentReplyCreateManyCommentInputEnvelope)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_update_with_where_unique_without_comment_input_1.LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_update_with_where_unique_without_comment_input_1.LogCommentReplyUpdateWithWhereUniqueWithoutCommentInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_update_many_with_where_without_comment_input_1.LogCommentReplyUpdateManyWithWhereWithoutCommentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_update_many_with_where_without_comment_input_1.LogCommentReplyUpdateManyWithWhereWithoutCommentInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_scalar_where_input_1.LogCommentReplyScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_scalar_where_input_1.LogCommentReplyScalarWhereInput),
    __metadata("design:type", Array)
], LogCommentReplyUpdateManyWithoutCommentNestedInput.prototype, "deleteMany", void 0);
LogCommentReplyUpdateManyWithoutCommentNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyUpdateManyWithoutCommentNestedInput);
exports.LogCommentReplyUpdateManyWithoutCommentNestedInput = LogCommentReplyUpdateManyWithoutCommentNestedInput;
//# sourceMappingURL=log-comment-reply-update-many-without-comment-nested.input.js.map