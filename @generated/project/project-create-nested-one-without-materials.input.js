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
exports.ProjectCreateNestedOneWithoutMaterialsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_create_without_materials_input_1 = require("./project-create-without-materials.input");
const class_transformer_1 = require("class-transformer");
const project_create_or_connect_without_materials_input_1 = require("./project-create-or-connect-without-materials.input");
const client_1 = require("@prisma/client");
const project_where_unique_input_1 = require("./project-where-unique.input");
let ProjectCreateNestedOneWithoutMaterialsInput = class ProjectCreateNestedOneWithoutMaterialsInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput),
    __metadata("design:type", project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput)
], ProjectCreateNestedOneWithoutMaterialsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_or_connect_without_materials_input_1.ProjectCreateOrConnectWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_or_connect_without_materials_input_1.ProjectCreateOrConnectWithoutMaterialsInput),
    __metadata("design:type", project_create_or_connect_without_materials_input_1.ProjectCreateOrConnectWithoutMaterialsInput)
], ProjectCreateNestedOneWithoutMaterialsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_where_unique_input_1.ProjectWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Object)
], ProjectCreateNestedOneWithoutMaterialsInput.prototype, "connect", void 0);
ProjectCreateNestedOneWithoutMaterialsInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectCreateNestedOneWithoutMaterialsInput);
exports.ProjectCreateNestedOneWithoutMaterialsInput = ProjectCreateNestedOneWithoutMaterialsInput;
//# sourceMappingURL=project-create-nested-one-without-materials.input.js.map