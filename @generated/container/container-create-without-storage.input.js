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
exports.ContainerCreateWithoutStorageInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_create_nested_many_without_containers_input_1 = require("../category/category-create-nested-many-without-containers.input");
const item_create_nested_many_without_container_input_1 = require("../item/item-create-nested-many-without-container.input");
let ContainerCreateWithoutStorageInput = class ContainerCreateWithoutStorageInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContainerCreateWithoutStorageInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContainerCreateWithoutStorageInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContainerCreateWithoutStorageInput.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], ContainerCreateWithoutStorageInput.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ContainerCreateWithoutStorageInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], ContainerCreateWithoutStorageInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_create_nested_many_without_containers_input_1.CategoryCreateNestedManyWithoutContainersInput, { nullable: true }),
    __metadata("design:type", category_create_nested_many_without_containers_input_1.CategoryCreateNestedManyWithoutContainersInput)
], ContainerCreateWithoutStorageInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_create_nested_many_without_container_input_1.ItemCreateNestedManyWithoutContainerInput, { nullable: true }),
    __metadata("design:type", item_create_nested_many_without_container_input_1.ItemCreateNestedManyWithoutContainerInput)
], ContainerCreateWithoutStorageInput.prototype, "items", void 0);
ContainerCreateWithoutStorageInput = __decorate([
    (0, graphql_2.InputType)()
], ContainerCreateWithoutStorageInput);
exports.ContainerCreateWithoutStorageInput = ContainerCreateWithoutStorageInput;
//# sourceMappingURL=container-create-without-storage.input.js.map