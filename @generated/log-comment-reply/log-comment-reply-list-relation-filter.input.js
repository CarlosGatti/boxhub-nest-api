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
exports.LogCommentReplyListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_reply_where_input_1 = require("./log-comment-reply-where.input");
let LogCommentReplyListRelationFilter = class LogCommentReplyListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_where_input_1.LogCommentReplyWhereInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_where_input_1.LogCommentReplyWhereInput)
], LogCommentReplyListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_where_input_1.LogCommentReplyWhereInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_where_input_1.LogCommentReplyWhereInput)
], LogCommentReplyListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_where_input_1.LogCommentReplyWhereInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_where_input_1.LogCommentReplyWhereInput)
], LogCommentReplyListRelationFilter.prototype, "none", void 0);
LogCommentReplyListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyListRelationFilter);
exports.LogCommentReplyListRelationFilter = LogCommentReplyListRelationFilter;
//# sourceMappingURL=log-comment-reply-list-relation-filter.input.js.map