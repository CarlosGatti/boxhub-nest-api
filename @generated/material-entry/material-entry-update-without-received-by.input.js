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
exports.MaterialEntryUpdateWithoutReceivedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const float_field_update_operations_input_1 = require("../prisma/float-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const graphql_type_json_1 = require("graphql-type-json");
const project_update_one_required_without_materials_nested_input_1 = require("../project/project-update-one-required-without-materials-nested.input");
let MaterialEntryUpdateWithoutReceivedByInput = class MaterialEntryUpdateWithoutReceivedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "supplier", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_field_update_operations_input_1.FloatFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", float_field_update_operations_input_1.FloatFieldUpdateOperationsInput)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "receivedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_update_one_required_without_materials_nested_input_1.ProjectUpdateOneRequiredWithoutMaterialsNestedInput, { nullable: true }),
    __metadata("design:type", project_update_one_required_without_materials_nested_input_1.ProjectUpdateOneRequiredWithoutMaterialsNestedInput)
], MaterialEntryUpdateWithoutReceivedByInput.prototype, "project", void 0);
MaterialEntryUpdateWithoutReceivedByInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialEntryUpdateWithoutReceivedByInput);
exports.MaterialEntryUpdateWithoutReceivedByInput = MaterialEntryUpdateWithoutReceivedByInput;
//# sourceMappingURL=material-entry-update-without-received-by.input.js.map