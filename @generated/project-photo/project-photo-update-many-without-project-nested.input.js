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
exports.ProjectPhotoUpdateManyWithoutProjectNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_photo_create_without_project_input_1 = require("./project-photo-create-without-project.input");
const class_transformer_1 = require("class-transformer");
const project_photo_create_or_connect_without_project_input_1 = require("./project-photo-create-or-connect-without-project.input");
const project_photo_upsert_with_where_unique_without_project_input_1 = require("./project-photo-upsert-with-where-unique-without-project.input");
const project_photo_create_many_project_input_envelope_input_1 = require("./project-photo-create-many-project-input-envelope.input");
const project_photo_where_unique_input_1 = require("./project-photo-where-unique.input");
const project_photo_update_with_where_unique_without_project_input_1 = require("./project-photo-update-with-where-unique-without-project.input");
const project_photo_update_many_with_where_without_project_input_1 = require("./project-photo-update-many-with-where-without-project.input");
const project_photo_scalar_where_input_1 = require("./project-photo-scalar-where.input");
let ProjectPhotoUpdateManyWithoutProjectNestedInput = class ProjectPhotoUpdateManyWithoutProjectNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [project_photo_create_without_project_input_1.ProjectPhotoCreateWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_create_without_project_input_1.ProjectPhotoCreateWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_create_or_connect_without_project_input_1.ProjectPhotoCreateOrConnectWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_create_or_connect_without_project_input_1.ProjectPhotoCreateOrConnectWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_upsert_with_where_unique_without_project_input_1.ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_upsert_with_where_unique_without_project_input_1.ProjectPhotoUpsertWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_create_many_project_input_envelope_input_1.ProjectPhotoCreateManyProjectInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_create_many_project_input_envelope_input_1.ProjectPhotoCreateManyProjectInputEnvelope),
    __metadata("design:type", project_photo_create_many_project_input_envelope_input_1.ProjectPhotoCreateManyProjectInputEnvelope)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_update_with_where_unique_without_project_input_1.ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_update_with_where_unique_without_project_input_1.ProjectPhotoUpdateWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_update_many_with_where_without_project_input_1.ProjectPhotoUpdateManyWithWhereWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_update_many_with_where_without_project_input_1.ProjectPhotoUpdateManyWithWhereWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_scalar_where_input_1.ProjectPhotoScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_photo_scalar_where_input_1.ProjectPhotoScalarWhereInput),
    __metadata("design:type", Array)
], ProjectPhotoUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
ProjectPhotoUpdateManyWithoutProjectNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectPhotoUpdateManyWithoutProjectNestedInput);
exports.ProjectPhotoUpdateManyWithoutProjectNestedInput = ProjectPhotoUpdateManyWithoutProjectNestedInput;
//# sourceMappingURL=project-photo-update-many-without-project-nested.input.js.map