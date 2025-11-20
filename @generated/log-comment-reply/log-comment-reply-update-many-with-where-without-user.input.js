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
exports.LogCommentReplyUpdateManyWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_reply_scalar_where_input_1 = require("./log-comment-reply-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const log_comment_reply_update_many_mutation_input_1 = require("./log-comment-reply-update-many-mutation.input");
let LogCommentReplyUpdateManyWithWhereWithoutUserInput = class LogCommentReplyUpdateManyWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_scalar_where_input_1.LogCommentReplyScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_reply_scalar_where_input_1.LogCommentReplyScalarWhereInput),
    __metadata("design:type", log_comment_reply_scalar_where_input_1.LogCommentReplyScalarWhereInput)
], LogCommentReplyUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_update_many_mutation_input_1.LogCommentReplyUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_reply_update_many_mutation_input_1.LogCommentReplyUpdateManyMutationInput),
    __metadata("design:type", log_comment_reply_update_many_mutation_input_1.LogCommentReplyUpdateManyMutationInput)
], LogCommentReplyUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
LogCommentReplyUpdateManyWithWhereWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentReplyUpdateManyWithWhereWithoutUserInput);
exports.LogCommentReplyUpdateManyWithWhereWithoutUserInput = LogCommentReplyUpdateManyWithWhereWithoutUserInput;
//# sourceMappingURL=log-comment-reply-update-many-with-where-without-user.input.js.map