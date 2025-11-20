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
exports.LogCommentWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const log_comment_where_input_1 = require("./log-comment-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const construction_log_relation_filter_input_1 = require("../construction-log/construction-log-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
const log_comment_reply_list_relation_filter_input_1 = require("../log-comment-reply/log-comment-reply-list-relation-filter.input");
let LogCommentWhereUniqueInput = class LogCommentWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], LogCommentWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_input_1.LogCommentWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_input_1.LogCommentWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_input_1.LogCommentWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogCommentWhereUniqueInput.prototype, "logId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogCommentWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogCommentWhereUniqueInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogCommentWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogCommentWhereUniqueInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_relation_filter_input_1.ConstructionLogRelationFilter, { nullable: true }),
    __metadata("design:type", construction_log_relation_filter_input_1.ConstructionLogRelationFilter)
], LogCommentWhereUniqueInput.prototype, "log", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], LogCommentWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_list_relation_filter_input_1.LogCommentReplyListRelationFilter, { nullable: true }),
    __metadata("design:type", log_comment_reply_list_relation_filter_input_1.LogCommentReplyListRelationFilter)
], LogCommentWhereUniqueInput.prototype, "replies", void 0);
LogCommentWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentWhereUniqueInput);
exports.LogCommentWhereUniqueInput = LogCommentWhereUniqueInput;
//# sourceMappingURL=log-comment-where-unique.input.js.map