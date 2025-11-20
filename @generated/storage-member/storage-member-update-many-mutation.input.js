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
exports.StorageMemberUpdateManyMutationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const enum_storage_role_field_update_operations_input_1 = require("../prisma/enum-storage-role-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let StorageMemberUpdateManyMutationInput = class StorageMemberUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => enum_storage_role_field_update_operations_input_1.EnumStorageRoleFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_storage_role_field_update_operations_input_1.EnumStorageRoleFieldUpdateOperationsInput)
], StorageMemberUpdateManyMutationInput.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], StorageMemberUpdateManyMutationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], StorageMemberUpdateManyMutationInput.prototype, "updatedAt", void 0);
StorageMemberUpdateManyMutationInput = __decorate([
    (0, graphql_2.InputType)()
], StorageMemberUpdateManyMutationInput);
exports.StorageMemberUpdateManyMutationInput = StorageMemberUpdateManyMutationInput;
//# sourceMappingURL=storage-member-update-many-mutation.input.js.map