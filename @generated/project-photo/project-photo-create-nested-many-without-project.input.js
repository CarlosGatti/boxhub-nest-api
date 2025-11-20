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
exports.ProjectPhotoCreateNestedManyWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_photo_create_without_project_input_1 = require("./project-photo-create-without-project.input");
const class_transformer_1 = require("class-transformer");
const project_photo_create_or_connect_without_project_input_1 = require("./project-photo-create-or-connect-without-project.input");
const project_photo_create_many_project_input_envelope_input_1 = require("./project-photo-create-many-project-input-envelope.input");
const project_photo_where_unique_input_1 = require("./project-photo-where-unique.input");
let ProjectPhotoCreateNestedManyWithoutProjectInput = class ProjectPhotoCreateNestedManyWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => [project_photo_create_without_project_input_1.ProjectPhotoCreateWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_create_without_project_input_1.ProjectPhotoCreateWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectPhotoCreateNestedManyWithoutProjectInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_create_or_connect_without_project_input_1.ProjectPhotoCreateOrConnectWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_create_or_connect_without_project_input_1.ProjectPhotoCreateOrConnectWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectPhotoCreateNestedManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_create_many_project_input_envelope_input_1.ProjectPhotoCreateManyProjectInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_create_many_project_input_envelope_input_1.ProjectPhotoCreateManyProjectInputEnvelope),
    __metadata("design:type", project_photo_create_many_project_input_envelope_input_1.ProjectPhotoCreateManyProjectInputEnvelope)
], ProjectPhotoCreateNestedManyWithoutProjectInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectPhotoCreateNestedManyWithoutProjectInput.prototype, "connect", void 0);
ProjectPhotoCreateNestedManyWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectPhotoCreateNestedManyWithoutProjectInput);
exports.ProjectPhotoCreateNestedManyWithoutProjectInput = ProjectPhotoCreateNestedManyWithoutProjectInput;
//# sourceMappingURL=project-photo-create-nested-many-without-project.input.js.map