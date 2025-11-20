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
exports.ConstructionLogUpdateWithoutCommentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_log_type_field_update_operations_input_1 = require("../prisma/enum-log-type-field-update-operations.input");
const graphql_type_json_1 = require("graphql-type-json");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const project_update_one_required_without_logs_nested_input_1 = require("../project/project-update-one-required-without-logs-nested.input");
const user_update_one_required_without_construction_logs_nested_input_1 = require("../user/user-update-one-required-without-construction-logs-nested.input");
let ConstructionLogUpdateWithoutCommentsInput = class ConstructionLogUpdateWithoutCommentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ConstructionLogUpdateWithoutCommentsInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ConstructionLogUpdateWithoutCommentsInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_log_type_field_update_operations_input_1.EnumLogTypeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_log_type_field_update_operations_input_1.EnumLogTypeFieldUpdateOperationsInput)
], ConstructionLogUpdateWithoutCommentsInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], ConstructionLogUpdateWithoutCommentsInput.prototype, "images", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ConstructionLogUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_update_one_required_without_logs_nested_input_1.ProjectUpdateOneRequiredWithoutLogsNestedInput, { nullable: true }),
    __metadata("design:type", project_update_one_required_without_logs_nested_input_1.ProjectUpdateOneRequiredWithoutLogsNestedInput)
], ConstructionLogUpdateWithoutCommentsInput.prototype, "project", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_one_required_without_construction_logs_nested_input_1.UserUpdateOneRequiredWithoutConstructionLogsNestedInput, { nullable: true }),
    __metadata("design:type", user_update_one_required_without_construction_logs_nested_input_1.UserUpdateOneRequiredWithoutConstructionLogsNestedInput)
], ConstructionLogUpdateWithoutCommentsInput.prototype, "user", void 0);
ConstructionLogUpdateWithoutCommentsInput = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogUpdateWithoutCommentsInput);
exports.ConstructionLogUpdateWithoutCommentsInput = ConstructionLogUpdateWithoutCommentsInput;
//# sourceMappingURL=construction-log-update-without-comments.input.js.map