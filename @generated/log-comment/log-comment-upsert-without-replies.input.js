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
exports.LogCommentUpsertWithoutRepliesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_update_without_replies_input_1 = require("./log-comment-update-without-replies.input");
const class_transformer_1 = require("class-transformer");
const log_comment_create_without_replies_input_1 = require("./log-comment-create-without-replies.input");
const log_comment_where_input_1 = require("./log-comment-where.input");
let LogCommentUpsertWithoutRepliesInput = class LogCommentUpsertWithoutRepliesInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_comment_update_without_replies_input_1.LogCommentUpdateWithoutRepliesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_update_without_replies_input_1.LogCommentUpdateWithoutRepliesInput),
    __metadata("design:type", log_comment_update_without_replies_input_1.LogCommentUpdateWithoutRepliesInput)
], LogCommentUpsertWithoutRepliesInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_create_without_replies_input_1.LogCommentCreateWithoutRepliesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_create_without_replies_input_1.LogCommentCreateWithoutRepliesInput),
    __metadata("design:type", log_comment_create_without_replies_input_1.LogCommentCreateWithoutRepliesInput)
], LogCommentUpsertWithoutRepliesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_where_input_1.LogCommentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_input_1.LogCommentWhereInput),
    __metadata("design:type", log_comment_where_input_1.LogCommentWhereInput)
], LogCommentUpsertWithoutRepliesInput.prototype, "where", void 0);
LogCommentUpsertWithoutRepliesInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentUpsertWithoutRepliesInput);
exports.LogCommentUpsertWithoutRepliesInput = LogCommentUpsertWithoutRepliesInput;
//# sourceMappingURL=log-comment-upsert-without-replies.input.js.map