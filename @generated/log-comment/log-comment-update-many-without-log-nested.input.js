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
exports.LogCommentUpdateManyWithoutLogNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_comment_create_without_log_input_1 = require("./log-comment-create-without-log.input");
const class_transformer_1 = require("class-transformer");
const log_comment_create_or_connect_without_log_input_1 = require("./log-comment-create-or-connect-without-log.input");
const log_comment_upsert_with_where_unique_without_log_input_1 = require("./log-comment-upsert-with-where-unique-without-log.input");
const log_comment_create_many_log_input_envelope_input_1 = require("./log-comment-create-many-log-input-envelope.input");
const log_comment_where_unique_input_1 = require("./log-comment-where-unique.input");
const log_comment_update_with_where_unique_without_log_input_1 = require("./log-comment-update-with-where-unique-without-log.input");
const log_comment_update_many_with_where_without_log_input_1 = require("./log-comment-update-many-with-where-without-log.input");
const log_comment_scalar_where_input_1 = require("./log-comment-scalar-where.input");
let LogCommentUpdateManyWithoutLogNestedInput = class LogCommentUpdateManyWithoutLogNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_comment_create_without_log_input_1.LogCommentCreateWithoutLogInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_create_without_log_input_1.LogCommentCreateWithoutLogInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_create_or_connect_without_log_input_1.LogCommentCreateOrConnectWithoutLogInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_create_or_connect_without_log_input_1.LogCommentCreateOrConnectWithoutLogInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_upsert_with_where_unique_without_log_input_1.LogCommentUpsertWithWhereUniqueWithoutLogInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_upsert_with_where_unique_without_log_input_1.LogCommentUpsertWithWhereUniqueWithoutLogInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_create_many_log_input_envelope_input_1.LogCommentCreateManyLogInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_create_many_log_input_envelope_input_1.LogCommentCreateManyLogInputEnvelope),
    __metadata("design:type", log_comment_create_many_log_input_envelope_input_1.LogCommentCreateManyLogInputEnvelope)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_where_unique_input_1.LogCommentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_where_unique_input_1.LogCommentWhereUniqueInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_update_with_where_unique_without_log_input_1.LogCommentUpdateWithWhereUniqueWithoutLogInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_update_with_where_unique_without_log_input_1.LogCommentUpdateWithWhereUniqueWithoutLogInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_update_many_with_where_without_log_input_1.LogCommentUpdateManyWithWhereWithoutLogInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_update_many_with_where_without_log_input_1.LogCommentUpdateManyWithWhereWithoutLogInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_scalar_where_input_1.LogCommentScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_comment_scalar_where_input_1.LogCommentScalarWhereInput),
    __metadata("design:type", Array)
], LogCommentUpdateManyWithoutLogNestedInput.prototype, "deleteMany", void 0);
LogCommentUpdateManyWithoutLogNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LogCommentUpdateManyWithoutLogNestedInput);
exports.LogCommentUpdateManyWithoutLogNestedInput = LogCommentUpdateManyWithoutLogNestedInput;
//# sourceMappingURL=log-comment-update-many-without-log-nested.input.js.map