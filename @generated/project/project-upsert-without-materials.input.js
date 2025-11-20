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
exports.ProjectUpsertWithoutMaterialsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_update_without_materials_input_1 = require("./project-update-without-materials.input");
const class_transformer_1 = require("class-transformer");
const project_create_without_materials_input_1 = require("./project-create-without-materials.input");
const project_where_input_1 = require("./project-where.input");
let ProjectUpsertWithoutMaterialsInput = class ProjectUpsertWithoutMaterialsInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_update_without_materials_input_1.ProjectUpdateWithoutMaterialsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_update_without_materials_input_1.ProjectUpdateWithoutMaterialsInput),
    __metadata("design:type", project_update_without_materials_input_1.ProjectUpdateWithoutMaterialsInput)
], ProjectUpsertWithoutMaterialsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput),
    __metadata("design:type", project_create_without_materials_input_1.ProjectCreateWithoutMaterialsInput)
], ProjectUpsertWithoutMaterialsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_where_input_1.ProjectWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_input_1.ProjectWhereInput),
    __metadata("design:type", project_where_input_1.ProjectWhereInput)
], ProjectUpsertWithoutMaterialsInput.prototype, "where", void 0);
ProjectUpsertWithoutMaterialsInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectUpsertWithoutMaterialsInput);
exports.ProjectUpsertWithoutMaterialsInput = ProjectUpsertWithoutMaterialsInput;
//# sourceMappingURL=project-upsert-without-materials.input.js.map