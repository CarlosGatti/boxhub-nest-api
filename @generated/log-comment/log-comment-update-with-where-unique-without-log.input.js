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
exports.LogCommentUpdateWithWhereUniqueWithoutLogInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const log_comment_where_unique_input_1 = require("./log-comment-where-unique.input");
const class_transformer_1 = require("class-transformer");
const log_comment_update_without_log_input_1 = require("./log-comment-update-without-log.input");
let LogCommentUpdateWithWhereUniqueWithoutLogInput = class LogCommentUpdateWithWhereUniqueWithoutLogInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Object)
], LogCommentUpdateWithWhereUniqueWithoutLogInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_update_without_log_input_1.LogCommentUpdateWithoutLogInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_comment_update_without_log_input_1.LogCommentUpdateWithoutLogInput),
    __metadata("design:type", log_comment_update_without_log_input_1.LogCommentUpdateWithoutLogInput)
], LogCommentUpdateWithWhereUniqueWithoutLogInput.prototype, "data", void 0);
LogCommentUpdateWithWhereUniqueWithoutLogInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentUpdateWithWhereUniqueWithoutLogInput);
exports.LogCommentUpdateWithWhereUniqueWithoutLogInput = LogCommentUpdateWithWhereUniqueWithoutLogInput;
//# sourceMappingURL=log-comment-update-with-where-unique-without-log.input.js.map