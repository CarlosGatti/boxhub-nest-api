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
exports.ProjectOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const sort_order_input_1 = require("../prisma/sort-order.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const construction_log_order_by_relation_aggregate_input_1 = require("../construction-log/construction-log-order-by-relation-aggregate.input");
const project_document_order_by_relation_aggregate_input_1 = require("../project-document/project-document-order-by-relation-aggregate.input");
const material_entry_order_by_relation_aggregate_input_1 = require("../material-entry/material-entry-order-by-relation-aggregate.input");
const permit_inspection_order_by_relation_aggregate_input_1 = require("../permit-inspection/permit-inspection-order-by-relation-aggregate.input");
const project_photo_order_by_relation_aggregate_input_1 = require("../project-photo/project-photo-order-by-relation-aggregate.input");
let ProjectOrderByWithRelationInput = class ProjectOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_input_1.SortOrderInput, { nullable: true }),
    __metadata("design:type", sort_order_input_1.SortOrderInput)
], ProjectOrderByWithRelationInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "responsibleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ProjectOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", user_order_by_with_relation_input_1.UserOrderByWithRelationInput)
], ProjectOrderByWithRelationInput.prototype, "responsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_order_by_relation_aggregate_input_1.ConstructionLogOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", construction_log_order_by_relation_aggregate_input_1.ConstructionLogOrderByRelationAggregateInput)
], ProjectOrderByWithRelationInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_order_by_relation_aggregate_input_1.ProjectDocumentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", project_document_order_by_relation_aggregate_input_1.ProjectDocumentOrderByRelationAggregateInput)
], ProjectOrderByWithRelationInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_order_by_relation_aggregate_input_1.MaterialEntryOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", material_entry_order_by_relation_aggregate_input_1.MaterialEntryOrderByRelationAggregateInput)
], ProjectOrderByWithRelationInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_order_by_relation_aggregate_input_1.PermitInspectionOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", permit_inspection_order_by_relation_aggregate_input_1.PermitInspectionOrderByRelationAggregateInput)
], ProjectOrderByWithRelationInput.prototype, "permits", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_order_by_relation_aggregate_input_1.ProjectPhotoOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", project_photo_order_by_relation_aggregate_input_1.ProjectPhotoOrderByRelationAggregateInput)
], ProjectOrderByWithRelationInput.prototype, "photos", void 0);
ProjectOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectOrderByWithRelationInput);
exports.ProjectOrderByWithRelationInput = ProjectOrderByWithRelationInput;
//# sourceMappingURL=project-order-by-with-relation.input.js.map