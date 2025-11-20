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
exports.LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const log_comment_reply_where_unique_input_1 = require("./log-comment-reply-where-unique.input");
const class_transformer_1 = require("class-transformer");
const log_comment_reply_update_without_comment_input_1 = require("./log-comment-reply-update-without-comment.input");
const log_comment_reply_create_without_comment_input_1 = require("./log-comment-reply-create-without-comment.input");
let LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput = class LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_reply_where_unique_input_1.LogCommentReplyWhereUniqueInput),
    __metadata("design:type", Object)
], LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_update_without_comment_input_1.LogCommentReplyUpdateWithoutCommentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_reply_update_without_comment_input_1.LogCommentReplyUpdateWithoutCommentInput),
    __metadata("design:type", log_comment_reply_update_without_comment_input_1.LogCommentReplyUpdateWithoutCommentInput)
], LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_without_comment_input_1.LogCommentReplyCreateWithoutCommentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_reply_create_without_comment_input_1.LogCommentReplyCreateWithoutCommentInput),
    __metadata("design:type", log_comment_reply_create_without_comment_input_1.LogCommentReplyCreateWithoutCommentInput)
], LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput.prototype, "create", void 0);
LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput);
exports.LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput = LogCommentReplyUpsertWithWhereUniqueWithoutCommentInput;
//# sourceMappingURL=log-comment-reply-upsert-with-where-unique-without-comment.input.js.map