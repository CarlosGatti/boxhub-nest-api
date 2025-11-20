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
exports.LogCommentCreateWithoutRepliesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const construction_log_create_nested_one_without_comments_input_1 = require("../construction-log/construction-log-create-nested-one-without-comments.input");
const user_create_nested_one_without_log_comments_input_1 = require("../user/user-create-nested-one-without-log-comments.input");
let LogCommentCreateWithoutRepliesInput = class LogCommentCreateWithoutRepliesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogCommentCreateWithoutRepliesInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LogCommentCreateWithoutRepliesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LogCommentCreateWithoutRepliesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_nested_one_without_comments_input_1.ConstructionLogCreateNestedOneWithoutCommentsInput, { nullable: false }),
    __metadata("design:type", construction_log_create_nested_one_without_comments_input_1.ConstructionLogCreateNestedOneWithoutCommentsInput)
], LogCommentCreateWithoutRepliesInput.prototype, "log", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_log_comments_input_1.UserCreateNestedOneWithoutLogCommentsInput, { nullable: false }),
    __metadata("design:type", user_create_nested_one_without_log_comments_input_1.UserCreateNestedOneWithoutLogCommentsInput)
], LogCommentCreateWithoutRepliesInput.prototype, "user", void 0);
LogCommentCreateWithoutRepliesInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentCreateWithoutRepliesInput);
exports.LogCommentCreateWithoutRepliesInput = LogCommentCreateWithoutRepliesInput;
//# sourceMappingURL=log-comment-create-without-replies.input.js.map