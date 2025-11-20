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
exports.LogCommentCreateWithoutLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_nested_one_without_log_comments_input_1 = require("../user/user-create-nested-one-without-log-comments.input");
const log_comment_reply_create_nested_many_without_comment_input_1 = require("../log-comment-reply/log-comment-reply-create-nested-many-without-comment.input");
let LogCommentCreateWithoutLogInput = class LogCommentCreateWithoutLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogCommentCreateWithoutLogInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LogCommentCreateWithoutLogInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LogCommentCreateWithoutLogInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_log_comments_input_1.UserCreateNestedOneWithoutLogCommentsInput, { nullable: false }),
    __metadata("design:type", user_create_nested_one_without_log_comments_input_1.UserCreateNestedOneWithoutLogCommentsInput)
], LogCommentCreateWithoutLogInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_nested_many_without_comment_input_1.LogCommentReplyCreateNestedManyWithoutCommentInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_create_nested_many_without_comment_input_1.LogCommentReplyCreateNestedManyWithoutCommentInput)
], LogCommentCreateWithoutLogInput.prototype, "replies", void 0);
LogCommentCreateWithoutLogInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentCreateWithoutLogInput);
exports.LogCommentCreateWithoutLogInput = LogCommentCreateWithoutLogInput;
//# sourceMappingURL=log-comment-create-without-log.input.js.map