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
exports.UserOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const storage_member_order_by_relation_aggregate_input_1 = require("../storage-member/storage-member-order-by-relation-aggregate.input");
const log_order_by_relation_aggregate_input_1 = require("../log/log-order-by-relation-aggregate.input");
const project_order_by_relation_aggregate_input_1 = require("../project/project-order-by-relation-aggregate.input");
const construction_log_order_by_relation_aggregate_input_1 = require("../construction-log/construction-log-order-by-relation-aggregate.input");
const log_comment_order_by_relation_aggregate_input_1 = require("../log-comment/log-comment-order-by-relation-aggregate.input");
const log_comment_reply_order_by_relation_aggregate_input_1 = require("../log-comment-reply/log-comment-reply-order-by-relation-aggregate.input");
const permit_inspection_order_by_relation_aggregate_input_1 = require("../permit-inspection/permit-inspection-order-by-relation-aggregate.input");
const material_entry_order_by_relation_aggregate_input_1 = require("../material-entry/material-entry-order-by-relation-aggregate.input");
const discart_item_order_by_relation_aggregate_input_1 = require("../discart-item/discart-item-order-by-relation-aggregate.input");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "nickname", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "public", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "emailVerified", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "about", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "isPremium", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "subscriptionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "expiresAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "willExpireAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "apartment", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "isApprovedResident", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], UserOrderByWithRelationInput.prototype, "isAdmin", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_member_order_by_relation_aggregate_input_1.StorageMemberOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", storage_member_order_by_relation_aggregate_input_1.StorageMemberOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "storageMemberships", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_order_by_relation_aggregate_input_1.LogOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", log_order_by_relation_aggregate_input_1.LogOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_order_by_relation_aggregate_input_1.ProjectOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", project_order_by_relation_aggregate_input_1.ProjectOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "projectResponsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_order_by_relation_aggregate_input_1.ConstructionLogOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", construction_log_order_by_relation_aggregate_input_1.ConstructionLogOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "constructionLogs", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_order_by_relation_aggregate_input_1.LogCommentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", log_comment_order_by_relation_aggregate_input_1.LogCommentOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "logComments", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_comment_reply_order_by_relation_aggregate_input_1.LogCommentReplyOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", log_comment_reply_order_by_relation_aggregate_input_1.LogCommentReplyOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "logCommentReplies", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_order_by_relation_aggregate_input_1.PermitInspectionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", permit_inspection_order_by_relation_aggregate_input_1.PermitInspectionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "responsibleInspections", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_order_by_relation_aggregate_input_1.MaterialEntryOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", material_entry_order_by_relation_aggregate_input_1.MaterialEntryOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "receivedMaterials", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_order_by_relation_aggregate_input_1.DiscartItemOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", discart_item_order_by_relation_aggregate_input_1.DiscartItemOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "discartItems", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
//# sourceMappingURL=user-order-by-with-relation.input.js.map