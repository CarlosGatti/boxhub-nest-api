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
exports.ProjectUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_project_status_field_update_operations_input_1 = require("../prisma/enum-project-status-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const user_update_one_required_without_project_responsible_nested_input_1 = require("../user/user-update-one-required-without-project-responsible-nested.input");
const construction_log_update_many_without_project_nested_input_1 = require("../construction-log/construction-log-update-many-without-project-nested.input");
const project_document_update_many_without_project_nested_input_1 = require("../project-document/project-document-update-many-without-project-nested.input");
const material_entry_update_many_without_project_nested_input_1 = require("../material-entry/material-entry-update-many-without-project-nested.input");
const permit_inspection_update_many_without_project_nested_input_1 = require("../permit-inspection/permit-inspection-update-many-without-project-nested.input");
const project_photo_update_many_without_project_nested_input_1 = require("../project-photo/project-photo-update-many-without-project-nested.input");
let ProjectUpdateInput = class ProjectUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_project_status_field_update_operations_input_1.EnumProjectStatusFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_project_status_field_update_operations_input_1.EnumProjectStatusFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_project_responsible_nested_input_1.UserUpdateOneRequiredWithoutProjectResponsibleNestedInput, { nullable: true }),
    __metadata("design:type", user_update_one_required_without_project_responsible_nested_input_1.UserUpdateOneRequiredWithoutProjectResponsibleNestedInput)
], ProjectUpdateInput.prototype, "responsible", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_update_many_without_project_nested_input_1.ConstructionLogUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", construction_log_update_many_without_project_nested_input_1.ConstructionLogUpdateManyWithoutProjectNestedInput)
], ProjectUpdateInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_update_many_without_project_nested_input_1.ProjectDocumentUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", project_document_update_many_without_project_nested_input_1.ProjectDocumentUpdateManyWithoutProjectNestedInput)
], ProjectUpdateInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_update_many_without_project_nested_input_1.MaterialEntryUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", material_entry_update_many_without_project_nested_input_1.MaterialEntryUpdateManyWithoutProjectNestedInput)
], ProjectUpdateInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_update_many_without_project_nested_input_1.PermitInspectionUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", permit_inspection_update_many_without_project_nested_input_1.PermitInspectionUpdateManyWithoutProjectNestedInput)
], ProjectUpdateInput.prototype, "permits", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_update_many_without_project_nested_input_1.ProjectPhotoUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", project_photo_update_many_without_project_nested_input_1.ProjectPhotoUpdateManyWithoutProjectNestedInput)
], ProjectUpdateInput.prototype, "photos", void 0);
ProjectUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectUpdateInput);
exports.ProjectUpdateInput = ProjectUpdateInput;
//# sourceMappingURL=project-update.input.js.map