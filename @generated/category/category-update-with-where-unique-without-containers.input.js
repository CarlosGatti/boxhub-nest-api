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
exports.CategoryUpdateWithWhereUniqueWithoutContainersInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const category_where_unique_input_1 = require("./category-where-unique.input");
const class_transformer_1 = require("class-transformer");
const category_update_without_containers_input_1 = require("./category-update-without-containers.input");
let CategoryUpdateWithWhereUniqueWithoutContainersInput = class CategoryUpdateWithWhereUniqueWithoutContainersInput {
};
__decorate([
    (0, graphql_1.Field)(() => category_where_unique_input_1.CategoryWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_where_unique_input_1.CategoryWhereUniqueInput),
    __metadata("design:type", Object)
], CategoryUpdateWithWhereUniqueWithoutContainersInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => category_update_without_containers_input_1.CategoryUpdateWithoutContainersInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => category_update_without_containers_input_1.CategoryUpdateWithoutContainersInput),
    __metadata("design:type", category_update_without_containers_input_1.CategoryUpdateWithoutContainersInput)
], CategoryUpdateWithWhereUniqueWithoutContainersInput.prototype, "data", void 0);
CategoryUpdateWithWhereUniqueWithoutContainersInput = __decorate([
    (0, graphql_2.InputType)()
], CategoryUpdateWithWhereUniqueWithoutContainersInput);
exports.CategoryUpdateWithWhereUniqueWithoutContainersInput = CategoryUpdateWithWhereUniqueWithoutContainersInput;
//# sourceMappingURL=category-update-with-where-unique-without-containers.input.js.map