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
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const role_enum_1 = require("../prisma/role.enum");
const storage_member_model_1 = require("../storage-member/storage-member.model");
const log_model_1 = require("../log/log.model");
const project_model_1 = require("../project/project.model");
const construction_log_model_1 = require("../construction-log/construction-log.model");
const log_comment_model_1 = require("../log-comment/log-comment.model");
const log_comment_reply_model_1 = require("../log-comment-reply/log-comment-reply.model");
const permit_inspection_model_1 = require("../permit-inspection/permit-inspection.model");
const material_entry_model_1 = require("../material-entry/material-entry.model");
const discart_item_model_1 = require("../discart-item/discart-item.model");
const user_count_output_1 = require("./user-count.output");
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "nickname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "public", void 0);
__decorate([
    (0, graphql_1.Field)(() => role_enum_1.Role, { nullable: false, defaultValue: 'USER' }),
    __metadata("design:type", Object)
], User.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "emailVerified", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "about", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isPremium", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "subscriptionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "expiresAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "willExpireAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "apartment", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isApprovedResident", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isAdmin", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_model_1.StorageMember], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "storageMemberships", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_model_1.Log], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_model_1.Project], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "projectResponsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_model_1.ConstructionLog], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "constructionLogs", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_model_1.LogComment], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "logComments", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_comment_reply_model_1.LogCommentReply], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "logCommentReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_model_1.PermitInspection], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "responsibleInspections", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_model_1.MaterialEntry], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "receivedMaterials", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_model_1.DiscartItem], { nullable: true }),
    __metadata("design:type", Array)
], User.prototype, "discartItems", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_output_1.UserCount, { nullable: false }),
    __metadata("design:type", user_count_output_1.UserCount)
], User.prototype, "_count", void 0);
User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map