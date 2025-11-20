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
exports.ProjectPhotoUpdateManyWithWhereWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_photo_scalar_where_input_1 = require("./project-photo-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const project_photo_update_many_mutation_input_1 = require("./project-photo-update-many-mutation.input");
let ProjectPhotoUpdateManyWithWhereWithoutProjectInput = class ProjectPhotoUpdateManyWithWhereWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_photo_scalar_where_input_1.ProjectPhotoScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_photo_scalar_where_input_1.ProjectPhotoScalarWhereInput),
    __metadata("design:type", project_photo_scalar_where_input_1.ProjectPhotoScalarWhereInput)
], ProjectPhotoUpdateManyWithWhereWithoutProjectInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_update_many_mutation_input_1.ProjectPhotoUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_photo_update_many_mutation_input_1.ProjectPhotoUpdateManyMutationInput),
    __metadata("design:type", project_photo_update_many_mutation_input_1.ProjectPhotoUpdateManyMutationInput)
], ProjectPhotoUpdateManyWithWhereWithoutProjectInput.prototype, "data", void 0);
ProjectPhotoUpdateManyWithWhereWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectPhotoUpdateManyWithWhereWithoutProjectInput);
exports.ProjectPhotoUpdateManyWithWhereWithoutProjectInput = ProjectPhotoUpdateManyWithWhereWithoutProjectInput;
//# sourceMappingURL=project-photo-update-many-with-where-without-project.input.js.map