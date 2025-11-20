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
exports.UserCreateWithoutReceivedMaterialsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const storage_member_create_nested_many_without_user_input_1 = require("../storage-member/storage-member-create-nested-many-without-user.input");
const log_create_nested_many_without_user_input_1 = require("../log/log-create-nested-many-without-user.input");
const project_create_nested_many_without_responsible_input_1 = require("../project/project-create-nested-many-without-responsible.input");
const construction_log_create_nested_many_without_user_input_1 = require("../construction-log/construction-log-create-nested-many-without-user.input");
const log_comment_create_nested_many_without_user_input_1 = require("../log-comment/log-comment-create-nested-many-without-user.input");
const log_comment_reply_create_nested_many_without_user_input_1 = require("../log-comment-reply/log-comment-reply-create-nested-many-without-user.input");
const permit_inspection_create_nested_many_without_responsible_input_1 = require("../permit-inspection/permit-inspection-create-nested-many-without-responsible.input");
const discart_item_create_nested_many_without_created_by_input_1 = require("../discart-item/discart-item-create-nested-many-without-created-by.input");
let UserCreateWithoutReceivedMaterialsInput = class UserCreateWithoutReceivedMaterialsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "nickname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutReceivedMaterialsInput.prototype, "public", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutReceivedMaterialsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutReceivedMaterialsInput.prototype, "emailVerified", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "about", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutReceivedMaterialsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutReceivedMaterialsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutReceivedMaterialsInput.prototype, "isPremium", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "subscriptionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutReceivedMaterialsInput.prototype, "expiresAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserCreateWithoutReceivedMaterialsInput.prototype, "willExpireAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserCreateWithoutReceivedMaterialsInput.prototype, "apartment", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutReceivedMaterialsInput.prototype, "isApprovedResident", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], UserCreateWithoutReceivedMaterialsInput.prototype, "isAdmin", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_create_nested_many_without_user_input_1.StorageMemberCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", storage_member_create_nested_many_without_user_input_1.StorageMemberCreateNestedManyWithoutUserInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "storageMemberships", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_nested_many_without_user_input_1.LogCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", log_create_nested_many_without_user_input_1.LogCreateNestedManyWithoutUserInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_nested_many_without_responsible_input_1.ProjectCreateNestedManyWithoutResponsibleInput, { nullable: true }),
    __metadata("design:type", project_create_nested_many_without_responsible_input_1.ProjectCreateNestedManyWithoutResponsibleInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "projectResponsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_nested_many_without_user_input_1.ConstructionLogCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", construction_log_create_nested_many_without_user_input_1.ConstructionLogCreateNestedManyWithoutUserInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "constructionLogs", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_create_nested_many_without_user_input_1.LogCommentCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", log_comment_create_nested_many_without_user_input_1.LogCommentCreateNestedManyWithoutUserInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "logComments", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_create_nested_many_without_user_input_1.LogCommentReplyCreateNestedManyWithoutUserInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_create_nested_many_without_user_input_1.LogCommentReplyCreateNestedManyWithoutUserInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "logCommentReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_create_nested_many_without_responsible_input_1.PermitInspectionCreateNestedManyWithoutResponsibleInput, { nullable: true }),
    __metadata("design:type", permit_inspection_create_nested_many_without_responsible_input_1.PermitInspectionCreateNestedManyWithoutResponsibleInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "responsibleInspections", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_create_nested_many_without_created_by_input_1.DiscartItemCreateNestedManyWithoutCreatedByInput, { nullable: true }),
    __metadata("design:type", discart_item_create_nested_many_without_created_by_input_1.DiscartItemCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutReceivedMaterialsInput.prototype, "discartItems", void 0);
UserCreateWithoutReceivedMaterialsInput = __decorate([
    (0, graphql_2.InputType)()
], UserCreateWithoutReceivedMaterialsInput);
exports.UserCreateWithoutReceivedMaterialsInput = UserCreateWithoutReceivedMaterialsInput;
//# sourceMappingURL=user-create-without-received-materials.input.js.map