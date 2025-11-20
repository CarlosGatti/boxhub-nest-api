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
exports.CategoryUpdateManyWithoutContainersNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_create_without_containers_input_1 = require("./category-create-without-containers.input");
const class_transformer_1 = require("class-transformer");
const category_create_or_connect_without_containers_input_1 = require("./category-create-or-connect-without-containers.input");
const category_upsert_with_where_unique_without_containers_input_1 = require("./category-upsert-with-where-unique-without-containers.input");
const category_where_unique_input_1 = require("./category-where-unique.input");
const category_update_with_where_unique_without_containers_input_1 = require("./category-update-with-where-unique-without-containers.input");
const category_update_many_with_where_without_containers_input_1 = require("./category-update-many-with-where-without-containers.input");
const category_scalar_where_input_1 = require("./category-scalar-where.input");
let CategoryUpdateManyWithoutContainersNestedInput = class CategoryUpdateManyWithoutContainersNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [category_create_without_containers_input_1.CategoryCreateWithoutContainersInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_create_without_containers_input_1.CategoryCreateWithoutContainersInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_create_or_connect_without_containers_input_1.CategoryCreateOrConnectWithoutContainersInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_create_or_connect_without_containers_input_1.CategoryCreateOrConnectWithoutContainersInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_upsert_with_where_unique_without_containers_input_1.CategoryUpsertWithWhereUniqueWithoutContainersInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_upsert_with_where_unique_without_containers_input_1.CategoryUpsertWithWhereUniqueWithoutContainersInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_where_unique_input_1.CategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_unique_input_1.CategoryWhereUniqueInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_where_unique_input_1.CategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_unique_input_1.CategoryWhereUniqueInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_where_unique_input_1.CategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_unique_input_1.CategoryWhereUniqueInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_where_unique_input_1.CategoryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_where_unique_input_1.CategoryWhereUniqueInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_update_with_where_unique_without_containers_input_1.CategoryUpdateWithWhereUniqueWithoutContainersInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_update_with_where_unique_without_containers_input_1.CategoryUpdateWithWhereUniqueWithoutContainersInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_update_many_with_where_without_containers_input_1.CategoryUpdateManyWithWhereWithoutContainersInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_update_many_with_where_without_containers_input_1.CategoryUpdateManyWithWhereWithoutContainersInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_scalar_where_input_1.CategoryScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => category_scalar_where_input_1.CategoryScalarWhereInput),
    __metadata("design:type", Array)
], CategoryUpdateManyWithoutContainersNestedInput.prototype, "deleteMany", void 0);
CategoryUpdateManyWithoutContainersNestedInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryUpdateManyWithoutContainersNestedInput);
exports.CategoryUpdateManyWithoutContainersNestedInput = CategoryUpdateManyWithoutContainersNestedInput;
//# sourceMappingURL=category-update-many-without-containers-nested.input.js.map