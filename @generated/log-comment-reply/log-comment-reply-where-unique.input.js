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
exports.LogCommentReplyWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const log_comment_reply_where_input_1 = require("./log-comment-reply-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const log_comment_relation_filter_input_1 = require("../log-comment/log-comment-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let LogCommentReplyWhereUniqueInput = class LogCommentReplyWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LogCommentReplyWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_input_1.LogCommentReplyWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentReplyWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_input_1.LogCommentReplyWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentReplyWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_where_input_1.LogCommentReplyWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentReplyWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogCommentReplyWhereUniqueInput.prototype, "commentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogCommentReplyWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogCommentReplyWhereUniqueInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogCommentReplyWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogCommentReplyWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_relation_filter_input_1.LogCommentRelationFilter, { nullable: true }),
    __metadata("design:type", log_comment_relation_filter_input_1.LogCommentRelationFilter)
], LogCommentReplyWhereUniqueInput.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], LogCommentReplyWhereUniqueInput.prototype, "user", void 0);
LogCommentReplyWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyWhereUniqueInput);
exports.LogCommentReplyWhereUniqueInput = LogCommentReplyWhereUniqueInput;
//# sourceMappingURL=log-comment-reply-where-unique.input.js.map