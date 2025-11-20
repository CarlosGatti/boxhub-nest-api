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
exports.LogCommentUpdateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const construction_log_update_one_required_without_comments_nested_input_1 = require("../construction-log/construction-log-update-one-required-without-comments-nested.input");
const log_comment_reply_update_many_without_comment_nested_input_1 = require("../log-comment-reply/log-comment-reply-update-many-without-comment-nested.input");
let LogCommentUpdateWithoutUserInput = class LogCommentUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], LogCommentUpdateWithoutUserInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LogCommentUpdateWithoutUserInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LogCommentUpdateWithoutUserInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_update_one_required_without_comments_nested_input_1.ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput, { nullable: true }),
    __metadata("design:type", construction_log_update_one_required_without_comments_nested_input_1.ConstructionLogUpdateOneRequiredWithoutCommentsNestedInput)
], LogCommentUpdateWithoutUserInput.prototype, "log", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_update_many_without_comment_nested_input_1.LogCommentReplyUpdateManyWithoutCommentNestedInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_update_many_without_comment_nested_input_1.LogCommentReplyUpdateManyWithoutCommentNestedInput)
], LogCommentUpdateWithoutUserInput.prototype, "replies", void 0);
LogCommentUpdateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentUpdateWithoutUserInput);
exports.LogCommentUpdateWithoutUserInput = LogCommentUpdateWithoutUserInput;
//# sourceMappingURL=log-comment-update-without-user.input.js.map