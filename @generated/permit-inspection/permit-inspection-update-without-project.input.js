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
exports.PermitInspectionUpdateWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_permit_kind_field_update_operations_input_1 = require("../prisma/enum-permit-kind-field-update-operations.input");
const enum_permit_status_field_update_operations_input_1 = require("../prisma/enum-permit-status-field-update-operations.input");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const user_update_one_without_responsible_inspections_nested_input_1 = require("../user/user-update-one-without-responsible-inspections-nested.input");
let PermitInspectionUpdateWithoutProjectInput = class PermitInspectionUpdateWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_permit_kind_field_update_operations_input_1.EnumPermitKindFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_permit_kind_field_update_operations_input_1.EnumPermitKindFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "kind", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_permit_status_field_update_operations_input_1.EnumPermitStatusFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_permit_status_field_update_operations_input_1.EnumPermitStatusFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "requestedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "approvedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "fileUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_without_responsible_inspections_nested_input_1.UserUpdateOneWithoutResponsibleInspectionsNestedInput, { nullable: true }),
    __metadata("design:type", user_update_one_without_responsible_inspections_nested_input_1.UserUpdateOneWithoutResponsibleInspectionsNestedInput)
], PermitInspectionUpdateWithoutProjectInput.prototype, "responsible", void 0);
PermitInspectionUpdateWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], PermitInspectionUpdateWithoutProjectInput);
exports.PermitInspectionUpdateWithoutProjectInput = PermitInspectionUpdateWithoutProjectInput;
//# sourceMappingURL=permit-inspection-update-without-project.input.js.map