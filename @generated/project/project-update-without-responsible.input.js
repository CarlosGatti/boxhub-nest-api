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
exports.ProjectUpdateWithoutResponsibleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_project_status_field_update_operations_input_1 = require("../prisma/enum-project-status-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const construction_log_update_many_without_project_nested_input_1 = require("../construction-log/construction-log-update-many-without-project-nested.input");
const project_document_update_many_without_project_nested_input_1 = require("../project-document/project-document-update-many-without-project-nested.input");
const material_entry_update_many_without_project_nested_input_1 = require("../material-entry/material-entry-update-many-without-project-nested.input");
const permit_inspection_update_many_without_project_nested_input_1 = require("../permit-inspection/permit-inspection-update-many-without-project-nested.input");
const project_photo_update_many_without_project_nested_input_1 = require("../project-photo/project-photo-update-many-without-project-nested.input");
let ProjectUpdateWithoutResponsibleInput = class ProjectUpdateWithoutResponsibleInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_project_status_field_update_operations_input_1.EnumProjectStatusFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_project_status_field_update_operations_input_1.EnumProjectStatusFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_update_many_without_project_nested_input_1.ConstructionLogUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", construction_log_update_many_without_project_nested_input_1.ConstructionLogUpdateManyWithoutProjectNestedInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_update_many_without_project_nested_input_1.ProjectDocumentUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", project_document_update_many_without_project_nested_input_1.ProjectDocumentUpdateManyWithoutProjectNestedInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_update_many_without_project_nested_input_1.MaterialEntryUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", material_entry_update_many_without_project_nested_input_1.MaterialEntryUpdateManyWithoutProjectNestedInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "materials", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_update_many_without_project_nested_input_1.PermitInspectionUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", permit_inspection_update_many_without_project_nested_input_1.PermitInspectionUpdateManyWithoutProjectNestedInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "permits", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_update_many_without_project_nested_input_1.ProjectPhotoUpdateManyWithoutProjectNestedInput, { nullable: true }),
    __metadata("design:type", project_photo_update_many_without_project_nested_input_1.ProjectPhotoUpdateManyWithoutProjectNestedInput)
], ProjectUpdateWithoutResponsibleInput.prototype, "photos", void 0);
ProjectUpdateWithoutResponsibleInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectUpdateWithoutResponsibleInput);
exports.ProjectUpdateWithoutResponsibleInput = ProjectUpdateWithoutResponsibleInput;
//# sourceMappingURL=project-update-without-responsible.input.js.map