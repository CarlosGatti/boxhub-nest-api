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
exports.LogUpdateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const enum_log_action_field_update_operations_input_1 = require("../prisma/enum-log-action-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const graphql_type_json_1 = require("graphql-type-json");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let LogUpdateWithoutUserInput = class LogUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => enum_log_action_field_update_operations_input_1.EnumLogActionFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_log_action_field_update_operations_input_1.EnumLogActionFieldUpdateOperationsInput)
], LogUpdateWithoutUserInput.prototype, "action", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], LogUpdateWithoutUserInput.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], LogUpdateWithoutUserInput.prototype, "route", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], LogUpdateWithoutUserInput.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], LogUpdateWithoutUserInput.prototype, "ipAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], LogUpdateWithoutUserInput.prototype, "createdAt", void 0);
LogUpdateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogUpdateWithoutUserInput);
exports.LogUpdateWithoutUserInput = LogUpdateWithoutUserInput;
//# sourceMappingURL=log-update-without-user.input.js.map