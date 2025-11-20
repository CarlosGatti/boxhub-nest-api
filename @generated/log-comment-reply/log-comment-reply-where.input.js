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
var LogCommentReplyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogCommentReplyWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const log_comment_relation_filter_input_1 = require("../log-comment/log-comment-relation-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let LogCommentReplyWhereInput = LogCommentReplyWhereInput_1 = class LogCommentReplyWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LogCommentReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentReplyWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogCommentReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentReplyWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogCommentReplyWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogCommentReplyWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogCommentReplyWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogCommentReplyWhereInput.prototype, "commentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], LogCommentReplyWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogCommentReplyWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogCommentReplyWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogCommentReplyWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_relation_filter_input_1.LogCommentRelationFilter, { nullable: true }),
    __metadata("design:type", log_comment_relation_filter_input_1.LogCommentRelationFilter)
], LogCommentReplyWhereInput.prototype, "comment", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], LogCommentReplyWhereInput.prototype, "user", void 0);
LogCommentReplyWhereInput = LogCommentReplyWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyWhereInput);
exports.LogCommentReplyWhereInput = LogCommentReplyWhereInput;
//# sourceMappingURL=log-comment-reply-where.input.js.map