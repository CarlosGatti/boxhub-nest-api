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
exports.LogCommentReplyCreateOrConnectWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const log_comment_reply_where_unique_input_1 = require("./log-comment-reply-where-unique.input");
const class_transformer_1 = require("class-transformer");
const log_comment_reply_create_without_user_input_1 = require("./log-comment-reply-create-without-user.input");
let LogCommentReplyCreateOrConnectWithoutUserInput = class LogCommentReplyCreateOrConnectWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Object)
], LogCommentReplyCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_without_user_input_1.LogCommentReplyCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_without_user_input_1.LogCommentReplyCreateWithoutUserInput),
    __metadata("design:type", log_comment_reply_create_without_user_input_1.LogCommentReplyCreateWithoutUserInput)
], LogCommentReplyCreateOrConnectWithoutUserInput.prototype, "create", void 0);
LogCommentReplyCreateOrConnectWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyCreateOrConnectWithoutUserInput);
exports.LogCommentReplyCreateOrConnectWithoutUserInput = LogCommentReplyCreateOrConnectWithoutUserInput;
//# sourceMappingURL=log-comment-reply-create-or-connect-without-user.input.js.map