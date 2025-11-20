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
exports.DiscartItemUpdateManyMutationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const enum_discart_item_type_field_update_operations_input_1 = require("../prisma/enum-discart-item-type-field-update-operations.input");
const nullable_float_field_update_operations_input_1 = require("../prisma/nullable-float-field-update-operations.input");
const enum_discart_item_condition_field_update_operations_input_1 = require("../prisma/enum-discart-item-condition-field-update-operations.input");
const enum_discart_item_status_field_update_operations_input_1 = require("../prisma/enum-discart-item-status-field-update-operations.input");
const discart_item_updateimage_urls_input_1 = require("./discart-item-updateimage-urls.input");
const graphql_type_json_1 = require("graphql-type-json");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let DiscartItemUpdateManyMutationInput = class DiscartItemUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_discart_item_type_field_update_operations_input_1.EnumDiscartItemTypeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_discart_item_type_field_update_operations_input_1.EnumDiscartItemTypeFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_float_field_update_operations_input_1.NullableFloatFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_discart_item_condition_field_update_operations_input_1.EnumDiscartItemConditionFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_discart_item_condition_field_update_operations_input_1.EnumDiscartItemConditionFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "condition", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_discart_item_status_field_update_operations_input_1.EnumDiscartItemStatusFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_discart_item_status_field_update_operations_input_1.EnumDiscartItemStatusFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_updateimage_urls_input_1.DiscartItemUpdateimageUrlsInput, { nullable: true }),
    __metadata("design:type", discart_item_updateimage_urls_input_1.DiscartItemUpdateimageUrlsInput)
], DiscartItemUpdateManyMutationInput.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], DiscartItemUpdateManyMutationInput.prototype, "pickupAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "contactPhone", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], DiscartItemUpdateManyMutationInput.prototype, "updatedAt", void 0);
DiscartItemUpdateManyMutationInput = __decorate([
    (0, graphql_2.InputType)()
], DiscartItemUpdateManyMutationInput);
exports.DiscartItemUpdateManyMutationInput = DiscartItemUpdateManyMutationInput;
//# sourceMappingURL=discart-item-update-many-mutation.input.js.map