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
exports.LogCommentReplyCreateNestedManyWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_reply_create_without_user_input_1 = require("./log-comment-reply-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const log_comment_reply_create_or_connect_without_user_input_1 = require("./log-comment-reply-create-or-connect-without-user.input");
const log_comment_reply_create_many_user_input_envelope_input_1 = require("./log-comment-reply-create-many-user-input-envelope.input");
const log_comment_reply_where_unique_input_1 = require("./log-comment-reply-where-unique.input");
let LogCommentReplyCreateNestedManyWithoutUserInput = class LogCommentReplyCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_create_without_user_input_1.LogCommentReplyCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_without_user_input_1.LogCommentReplyCreateWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentReplyCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_create_or_connect_without_user_input_1.LogCommentReplyCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_or_connect_without_user_input_1.LogCommentReplyCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], LogCommentReplyCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_many_user_input_envelope_input_1.LogCommentReplyCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_many_user_input_envelope_input_1.LogCommentReplyCreateManyUserInputEnvelope),
    __metadata("design:type", log_comment_reply_create_many_user_input_envelope_input_1.LogCommentReplyCreateManyUserInputEnvelope)
], LogCommentReplyCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentReplyCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
LogCommentReplyCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyCreateNestedManyWithoutUserInput);
exports.LogCommentReplyCreateNestedManyWithoutUserInput = LogCommentReplyCreateNestedManyWithoutUserInput;
//# sourceMappingURL=log-comment-reply-create-nested-many-without-user.input.js.map