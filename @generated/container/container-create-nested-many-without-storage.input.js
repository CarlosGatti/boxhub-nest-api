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
exports.ContainerCreateNestedManyWithoutStorageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const container_create_without_storage_input_1 = require("./container-create-without-storage.input");
const class_transformer_1 = require("class-transformer");
const container_create_or_connect_without_storage_input_1 = require("./container-create-or-connect-without-storage.input");
const container_create_many_storage_input_envelope_input_1 = require("./container-create-many-storage-input-envelope.input");
const container_where_unique_input_1 = require("./container-where-unique.input");
let ContainerCreateNestedManyWithoutStorageInput = class ContainerCreateNestedManyWithoutStorageInput {
};
__decorate([
    (0, graphql_1.Field)(() => [container_create_without_storage_input_1.ContainerCreateWithoutStorageInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => container_create_without_storage_input_1.ContainerCreateWithoutStorageInput),
    __metadata("design:type", Array)
], ContainerCreateNestedManyWithoutStorageInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [container_create_or_connect_without_storage_input_1.ContainerCreateOrConnectWithoutStorageInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => container_create_or_connect_without_storage_input_1.ContainerCreateOrConnectWithoutStorageInput),
    __metadata("design:type", Array)
], ContainerCreateNestedManyWithoutStorageInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => container_create_many_storage_input_envelope_input_1.ContainerCreateManyStorageInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => container_create_many_storage_input_envelope_input_1.ContainerCreateManyStorageInputEnvelope),
    __metadata("design:type", container_create_many_storage_input_envelope_input_1.ContainerCreateManyStorageInputEnvelope)
], ContainerCreateNestedManyWithoutStorageInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [container_where_unique_input_1.ContainerWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => container_where_unique_input_1.ContainerWhereUniqueInput),
    __metadata("design:type", Array)
], ContainerCreateNestedManyWithoutStorageInput.prototype, "connect", void 0);
ContainerCreateNestedManyWithoutStorageInput = __decorate([
    (0, graphql_2.InputType)()
], ContainerCreateNestedManyWithoutStorageInput);
exports.ContainerCreateNestedManyWithoutStorageInput = ContainerCreateNestedManyWithoutStorageInput;
//# sourceMappingURL=container-create-nested-many-without-storage.input.js.map