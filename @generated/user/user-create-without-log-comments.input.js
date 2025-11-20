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
exports.UserCreateWithoutLogCommentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const storage_member_create_nested_many_without_user_input_1 = require("../storage-member/storage-member-create-nested-many-without-user.input");
const log_create_nested_many_without_user_input_1 = require("../log/log-create-nested-many-without-user.input");
const project_create_nested_many_without_responsible_input_1 = require("../project/project-create-nested-many-without-responsible.input");
const construction_log_create_nested_many_without_user_input_1 = require("../construction-log/construction-log-create-nested-many-without-user.input");
const log_comment_reply_create_nested_many_without_user_input_1 = require("../log-comment-reply/log-comment-reply-create-nested-many-without-user.input");
const permit_inspection_create_nested_many_without_responsible_input_1 = require("../permit-inspection/permit-inspection-create-nested-many-without-responsible.input");
const material_entry_create_nested_many_without_received_by_input_1 = require("../material-entry/material-entry-create-nested-many-without-received-by.input");
const discart_item_create_nested_many_without_created_by_input_1 = require("../discart-item/discart-item-create-nested-many-without-created-by.input");
let UserCreateWithoutLogCommentsInput = class UserCreateWithoutLogCommentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "nickname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutLogCommentsInput.prototype, "public", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutLogCommentsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutLogCommentsInput.prototype, "emailVerified", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "about", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutLogCommentsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutLogCommentsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutLogCommentsInput.prototype, "isPremium", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "subscriptionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutLogCommentsInput.prototype, "expiresAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutLogCommentsInput.prototype, "willExpireAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutLogCommentsInput.prototype, "apartment", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutLogCommentsInput.prototype, "isApprovedResident", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutLogCommentsInput.prototype, "isAdmin", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_create_nested_many_without_user_input_1.StorageMemberCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", storage_member_create_nested_many_without_user_input_1.StorageMemberCreateNestedManyWithoutUserInput)
], UserCreateWithoutLogCommentsInput.prototype, "storageMemberships", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_nested_many_without_user_input_1.LogCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", log_create_nested_many_without_user_input_1.LogCreateNestedManyWithoutUserInput)
], UserCreateWithoutLogCommentsInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_nested_many_without_responsible_input_1.ProjectCreateNestedManyWithoutResponsibleInput, { nullable: true }),
    __metadata("design:type", project_create_nested_many_without_responsible_input_1.ProjectCreateNestedManyWithoutResponsibleInput)
], UserCreateWithoutLogCommentsInput.prototype, "projectResponsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_nested_many_without_user_input_1.ConstructionLogCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", construction_log_create_nested_many_without_user_input_1.ConstructionLogCreateNestedManyWithoutUserInput)
], UserCreateWithoutLogCommentsInput.prototype, "constructionLogs", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_nested_many_without_user_input_1.LogCommentReplyCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_create_nested_many_without_user_input_1.LogCommentReplyCreateNestedManyWithoutUserInput)
], UserCreateWithoutLogCommentsInput.prototype, "logCommentReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_create_nested_many_without_responsible_input_1.PermitInspectionCreateNestedManyWithoutResponsibleInput, { nullable: true }),
    __metadata("design:type", permit_inspection_create_nested_many_without_responsible_input_1.PermitInspectionCreateNestedManyWithoutResponsibleInput)
], UserCreateWithoutLogCommentsInput.prototype, "responsibleInspections", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_create_nested_many_without_received_by_input_1.MaterialEntryCreateNestedManyWithoutReceivedByInput, { nullable: true }),
    __metadata("design:type", material_entry_create_nested_many_without_received_by_input_1.MaterialEntryCreateNestedManyWithoutReceivedByInput)
], UserCreateWithoutLogCommentsInput.prototype, "receivedMaterials", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_create_nested_many_without_created_by_input_1.DiscartItemCreateNestedManyWithoutCreatedByInput, { nullable: true }),
    __metadata("design:type", discart_item_create_nested_many_without_created_by_input_1.DiscartItemCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutLogCommentsInput.prototype, "discartItems", void 0);
UserCreateWithoutLogCommentsInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutLogCommentsInput);
exports.UserCreateWithoutLogCommentsInput = UserCreateWithoutLogCommentsInput;
//# sourceMappingURL=user-create-without-log-comments.input.js.map