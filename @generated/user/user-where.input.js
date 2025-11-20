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
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const bool_filter_input_1 = require("../prisma/bool-filter.input");
const enum_role_filter_input_1 = require("../prisma/enum-role-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const date_time_nullable_filter_input_1 = require("../prisma/date-time-nullable-filter.input");
const storage_member_list_relation_filter_input_1 = require("../storage-member/storage-member-list-relation-filter.input");
const log_list_relation_filter_input_1 = require("../log/log-list-relation-filter.input");
const project_list_relation_filter_input_1 = require("../project/project-list-relation-filter.input");
const construction_log_list_relation_filter_input_1 = require("../construction-log/construction-log-list-relation-filter.input");
const log_comment_list_relation_filter_input_1 = require("../log-comment/log-comment-list-relation-filter.input");
const log_comment_reply_list_relation_filter_input_1 = require("../log-comment-reply/log-comment-reply-list-relation-filter.input");
const permit_inspection_list_relation_filter_input_1 = require("../permit-inspection/permit-inspection-list-relation-filter.input");
const material_entry_list_relation_filter_input_1 = require("../material-entry/material-entry-list-relation-filter.input");
const discart_item_list_relation_filter_input_1 = require("../discart-item/discart-item-list-relation-filter.input");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], UserWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "nickname", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], UserWhereInput.prototype, "public", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_filter_input_1.EnumRoleFilter, { nullable: true }),
    __metadata("design:type", enum_role_filter_input_1.EnumRoleFilter)
], UserWhereInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], UserWhereInput.prototype, "emailVerified", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "about", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], UserWhereInput.prototype, "isPremium", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "subscriptionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "expiresAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_nullable_filter_input_1.DateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", date_time_nullable_filter_input_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "willExpireAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], UserWhereInput.prototype, "apartment", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], UserWhereInput.prototype, "isApprovedResident", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], UserWhereInput.prototype, "isAdmin", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_list_relation_filter_input_1.StorageMemberListRelationFilter, { nullable: true }),
    __metadata("design:type", storage_member_list_relation_filter_input_1.StorageMemberListRelationFilter)
], UserWhereInput.prototype, "storageMemberships", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_list_relation_filter_input_1.LogListRelationFilter, { nullable: true }),
    __metadata("design:type", log_list_relation_filter_input_1.LogListRelationFilter)
], UserWhereInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_list_relation_filter_input_1.ProjectListRelationFilter, { nullable: true }),
    __metadata("design:type", project_list_relation_filter_input_1.ProjectListRelationFilter)
], UserWhereInput.prototype, "projectResponsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_list_relation_filter_input_1.ConstructionLogListRelationFilter, { nullable: true }),
    __metadata("design:type", construction_log_list_relation_filter_input_1.ConstructionLogListRelationFilter)
], UserWhereInput.prototype, "constructionLogs", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_list_relation_filter_input_1.LogCommentListRelationFilter, { nullable: true }),
    __metadata("design:type", log_comment_list_relation_filter_input_1.LogCommentListRelationFilter)
], UserWhereInput.prototype, "logComments", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_list_relation_filter_input_1.LogCommentReplyListRelationFilter, { nullable: true }),
    __metadata("design:type", log_comment_reply_list_relation_filter_input_1.LogCommentReplyListRelationFilter)
], UserWhereInput.prototype, "logCommentReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_list_relation_filter_input_1.PermitInspectionListRelationFilter, { nullable: true }),
    __metadata("design:type", permit_inspection_list_relation_filter_input_1.PermitInspectionListRelationFilter)
], UserWhereInput.prototype, "responsibleInspections", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_list_relation_filter_input_1.MaterialEntryListRelationFilter, { nullable: true }),
    __metadata("design:type", material_entry_list_relation_filter_input_1.MaterialEntryListRelationFilter)
], UserWhereInput.prototype, "receivedMaterials", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_list_relation_filter_input_1.DiscartItemListRelationFilter, { nullable: true }),
    __metadata("design:type", discart_item_list_relation_filter_input_1.DiscartItemListRelationFilter)
], UserWhereInput.prototype, "discartItems", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
//# sourceMappingURL=user-where.input.js.map