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
exports.UserUpdateWithoutLogCommentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const bool_field_update_operations_input_1 = require("../prisma/bool-field-update-operations.input");
const enum_role_field_update_operations_input_1 = require("../prisma/enum-role-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const storage_member_update_many_without_user_nested_input_1 = require("../storage-member/storage-member-update-many-without-user-nested.input");
const log_update_many_without_user_nested_input_1 = require("../log/log-update-many-without-user-nested.input");
const project_update_many_without_responsible_nested_input_1 = require("../project/project-update-many-without-responsible-nested.input");
const construction_log_update_many_without_user_nested_input_1 = require("../construction-log/construction-log-update-many-without-user-nested.input");
const log_comment_reply_update_many_without_user_nested_input_1 = require("../log-comment-reply/log-comment-reply-update-many-without-user-nested.input");
const permit_inspection_update_many_without_responsible_nested_input_1 = require("../permit-inspection/permit-inspection-update-many-without-responsible-nested.input");
const material_entry_update_many_without_received_by_nested_input_1 = require("../material-entry/material-entry-update-many-without-received-by-nested.input");
const discart_item_update_many_without_created_by_nested_input_1 = require("../discart-item/discart-item-update-many-without-created-by-nested.input");
let UserUpdateWithoutLogCommentsInput = class UserUpdateWithoutLogCommentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "nickname", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "public", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_role_field_update_operations_input_1.EnumRoleFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "emailVerified", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "about", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "isPremium", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "subscriptionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "expiresAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "willExpireAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "apartment", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "isApprovedResident", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", bool_field_update_operations_input_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutLogCommentsInput.prototype, "isAdmin", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_update_many_without_user_nested_input_1.StorageMemberUpdateManyWithoutUserNestedInput, { nullable: true }),
    __metadata("design:type", storage_member_update_many_without_user_nested_input_1.StorageMemberUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "storageMemberships", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_update_many_without_user_nested_input_1.LogUpdateManyWithoutUserNestedInput, { nullable: true }),
    __metadata("design:type", log_update_many_without_user_nested_input_1.LogUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_update_many_without_responsible_nested_input_1.ProjectUpdateManyWithoutResponsibleNestedInput, { nullable: true }),
    __metadata("design:type", project_update_many_without_responsible_nested_input_1.ProjectUpdateManyWithoutResponsibleNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "projectResponsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_update_many_without_user_nested_input_1.ConstructionLogUpdateManyWithoutUserNestedInput, { nullable: true }),
    __metadata("design:type", construction_log_update_many_without_user_nested_input_1.ConstructionLogUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "constructionLogs", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_update_many_without_user_nested_input_1.LogCommentReplyUpdateManyWithoutUserNestedInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_update_many_without_user_nested_input_1.LogCommentReplyUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "logCommentReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_update_many_without_responsible_nested_input_1.PermitInspectionUpdateManyWithoutResponsibleNestedInput, { nullable: true }),
    __metadata("design:type", permit_inspection_update_many_without_responsible_nested_input_1.PermitInspectionUpdateManyWithoutResponsibleNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "responsibleInspections", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_update_many_without_received_by_nested_input_1.MaterialEntryUpdateManyWithoutReceivedByNestedInput, { nullable: true }),
    __metadata("design:type", material_entry_update_many_without_received_by_nested_input_1.MaterialEntryUpdateManyWithoutReceivedByNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "receivedMaterials", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_update_many_without_created_by_nested_input_1.DiscartItemUpdateManyWithoutCreatedByNestedInput, { nullable: true }),
    __metadata("design:type", discart_item_update_many_without_created_by_nested_input_1.DiscartItemUpdateManyWithoutCreatedByNestedInput)
], UserUpdateWithoutLogCommentsInput.prototype, "discartItems", void 0);
UserUpdateWithoutLogCommentsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateWithoutLogCommentsInput);
exports.UserUpdateWithoutLogCommentsInput = UserUpdateWithoutLogCommentsInput;
//# sourceMappingURL=user-update-without-log-comments.input.js.map