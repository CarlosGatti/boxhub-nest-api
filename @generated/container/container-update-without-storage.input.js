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
exports.ContainerUpdateWithoutStorageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const category_update_many_without_containers_nested_input_1 = require("../category/category-update-many-without-containers-nested.input");
const item_update_many_without_container_nested_input_1 = require("../item/item-update-many-without-container-nested.input");
let ContainerUpdateWithoutStorageInput = class ContainerUpdateWithoutStorageInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContainerUpdateWithoutStorageInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContainerUpdateWithoutStorageInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContainerUpdateWithoutStorageInput.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ContainerUpdateWithoutStorageInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContainerUpdateWithoutStorageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ContainerUpdateWithoutStorageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_update_many_without_containers_nested_input_1.CategoryUpdateManyWithoutContainersNestedInput, { nullable: true }),
    __metadata("design:type", category_update_many_without_containers_nested_input_1.CategoryUpdateManyWithoutContainersNestedInput)
], ContainerUpdateWithoutStorageInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_update_many_without_container_nested_input_1.ItemUpdateManyWithoutContainerNestedInput, { nullable: true }),
    __metadata("design:type", item_update_many_without_container_nested_input_1.ItemUpdateManyWithoutContainerNestedInput)
], ContainerUpdateWithoutStorageInput.prototype, "items", void 0);
ContainerUpdateWithoutStorageInput = __decorate([
    (0, graphql_2.InputType)()
], ContainerUpdateWithoutStorageInput);
exports.ContainerUpdateWithoutStorageInput = ContainerUpdateWithoutStorageInput;
//# sourceMappingURL=container-update-without-storage.input.js.map