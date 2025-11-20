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
exports.LogComment = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const construction_log_model_1 = require("../construction-log/construction-log.model");
const user_model_1 = require("../user/user.model");
const log_comment_reply_model_1 = require("../log-comment-reply/log-comment-reply.model");
const log_comment_count_output_1 = require("./log-comment-count.output");
let LogComment = class LogComment {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], LogComment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], LogComment.prototype, "logId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], LogComment.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogComment.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], LogComment.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], LogComment.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_model_1.ConstructionLog, { nullable: false }),
    __metadata("design:type", construction_log_model_1.ConstructionLog)
], LogComment.prototype, "log", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false }),
    __metadata("design:type", user_model_1.User)
], LogComment.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_model_1.LogCommentReply], { nullable: true }),
    __metadata("design:type", Array)
], LogComment.prototype, "replies", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_count_output_1.LogCommentCount, { nullable: false }),
    __metadata("design:type", log_comment_count_output_1.LogCommentCount)
], LogComment.prototype, "_count", void 0);
LogComment = __decorate([
    (0, graphql_2.ObjectType)()
], LogComment);
exports.LogComment = LogComment;
//# sourceMappingURL=log-comment.model.js.map