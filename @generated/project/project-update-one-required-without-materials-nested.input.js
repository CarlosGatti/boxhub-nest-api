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
exports.ProjectUpdateOneRequiredWithoutMaterialsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_create_without_materials_input_1 = require("./project-create-without-materials.input");
const class_transformer_1 = require("class-transformer");
const project_create_or_connect_without_materials_input_1 = require("./project-create-or-connect-without-materials.input");
const project_upsert_without_materials_input_1 = require("./project-upsert-without-materials.input");
const client_1 = require("@prisma/client");
const project_where_unique_input_1 = require("./project-where-unique.input");
const project_update_to_one_with_where_without_materials_input_1 = require("./project-update-to-one-with-where-without-materials.input");
let ProjectUpdateOneRequiredWithoutMaterialsNestedInput = class ProjectUpdateOneRequiredWithoutMaterialsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput),
    __metadata("design:type", project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput)
], ProjectUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_or_connect_without_materials_input_1.ProjectCreateOrConnectWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_or_connect_without_materials_input_1.ProjectCreateOrConnectWithoutMaterialsInput),
    __metadata("design:type", project_create_or_connect_without_materials_input_1.ProjectCreateOrConnectWithoutMaterialsInput)
], ProjectUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_upsert_without_materials_input_1.ProjectUpsertWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_upsert_without_materials_input_1.ProjectUpsertWithoutMaterialsInput),
    __metadata("design:type", project_upsert_without_materials_input_1.ProjectUpsertWithoutMaterialsInput)
], ProjectUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_where_unique_input_1.ProjectWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Object)
], ProjectUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_update_to_one_with_where_without_materials_input_1.ProjectUpdateToOneWithWhereWithoutMaterialsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_update_to_one_with_where_without_materials_input_1.ProjectUpdateToOneWithWhereWithoutMaterialsInput),
    __metadata("design:type", project_update_to_one_with_where_without_materials_input_1.ProjectUpdateToOneWithWhereWithoutMaterialsInput)
], ProjectUpdateOneRequiredWithoutMaterialsNestedInput.prototype, "update", void 0);
ProjectUpdateOneRequiredWithoutMaterialsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectUpdateOneRequiredWithoutMaterialsNestedInput);
exports.ProjectUpdateOneRequiredWithoutMaterialsNestedInput = ProjectUpdateOneRequiredWithoutMaterialsNestedInput;
//# sourceMappingURL=project-update-one-required-without-materials-nested.input.js.map