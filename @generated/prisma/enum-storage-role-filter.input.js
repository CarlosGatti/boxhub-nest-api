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
exports.EnumStorageRoleFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const storage_role_enum_1 = require("./storage-role.enum");
const nested_enum_storage_role_filter_input_1 = require("./nested-enum-storage-role-filter.input");
let EnumStorageRoleFilter = class EnumStorageRoleFilter {
};
__decorate([
    (0, graphql_1.Field)(() => storage_role_enum_1.StorageRole, { nullable: true }),
    __metadata("design:type", Object)
], EnumStorageRoleFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_role_enum_1.StorageRole], { nullable: true }),
    __metadata("design:type", Array)
], EnumStorageRoleFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_role_enum_1.StorageRole], { nullable: true }),
    __metadata("design:type", Array)
], EnumStorageRoleFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_storage_role_filter_input_1.NestedEnumStorageRoleFilter, { nullable: true }),
    __metadata("design:type", nested_enum_storage_role_filter_input_1.NestedEnumStorageRoleFilter)
], EnumStorageRoleFilter.prototype, "not", void 0);
EnumStorageRoleFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumStorageRoleFilter);
exports.EnumStorageRoleFilter = EnumStorageRoleFilter;
//# sourceMappingURL=enum-storage-role-filter.input.js.map