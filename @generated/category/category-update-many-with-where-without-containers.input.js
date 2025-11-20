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
exports.CategoryUpdateManyWithWhereWithoutContainersInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const category_scalar_where_input_1 = require("./category-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const category_update_many_mutation_input_1 = require("./category-update-many-mutation.input");
let CategoryUpdateManyWithWhereWithoutContainersInput = class CategoryUpdateManyWithWhereWithoutContainersInput {
};
__decorate([
    (0, graphql_1.Field)(() => category_scalar_where_input_1.CategoryScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_scalar_where_input_1.CategoryScalarWhereInput),
    __metadata("design:type", category_scalar_where_input_1.CategoryScalarWhereInput)
], CategoryUpdateManyWithWhereWithoutContainersInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_update_many_mutation_input_1.CategoryUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_update_many_mutation_input_1.CategoryUpdateManyMutationInput),
    __metadata("design:type", category_update_many_mutation_input_1.CategoryUpdateManyMutationInput)
], CategoryUpdateManyWithWhereWithoutContainersInput.prototype, "data", void 0);
CategoryUpdateManyWithWhereWithoutContainersInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryUpdateManyWithWhereWithoutContainersInput);
exports.CategoryUpdateManyWithWhereWithoutContainersInput = CategoryUpdateManyWithWhereWithoutContainersInput;
//# sourceMappingURL=category-update-many-with-where-without-containers.input.js.map