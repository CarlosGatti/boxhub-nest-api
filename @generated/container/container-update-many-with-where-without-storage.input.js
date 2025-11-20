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
exports.ContainerUpdateManyWithWhereWithoutStorageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const container_scalar_where_input_1 = require("./container-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const container_update_many_mutation_input_1 = require("./container-update-many-mutation.input");
let ContainerUpdateManyWithWhereWithoutStorageInput = class ContainerUpdateManyWithWhereWithoutStorageInput {
};
__decorate([
    (0, graphql_1.Field)(() => container_scalar_where_input_1.ContainerScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => container_scalar_where_input_1.ContainerScalarWhereInput),
    __metadata("design:type", container_scalar_where_input_1.ContainerScalarWhereInput)
], ContainerUpdateManyWithWhereWithoutStorageInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => container_update_many_mutation_input_1.ContainerUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => container_update_many_mutation_input_1.ContainerUpdateManyMutationInput),
    __metadata("design:type", container_update_many_mutation_input_1.ContainerUpdateManyMutationInput)
], ContainerUpdateManyWithWhereWithoutStorageInput.prototype, "data", void 0);
ContainerUpdateManyWithWhereWithoutStorageInput = __decorate([
    (0, graphql_2.InputType)()
], ContainerUpdateManyWithWhereWithoutStorageInput);
exports.ContainerUpdateManyWithWhereWithoutStorageInput = ContainerUpdateManyWithWhereWithoutStorageInput;
//# sourceMappingURL=container-update-many-with-where-without-storage.input.js.map