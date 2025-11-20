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
exports.ProjectPhotoCreateOrConnectWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const project_photo_where_unique_input_1 = require("./project-photo-where-unique.input");
const class_transformer_1 = require("class-transformer");
const project_photo_create_without_project_input_1 = require("./project-photo-create-without-project.input");
let ProjectPhotoCreateOrConnectWithoutProjectInput = class ProjectPhotoCreateOrConnectWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_photo_where_unique_input_1.ProjectPhotoWhereUniqueInput),
    __metadata("design:type", Object)
], ProjectPhotoCreateOrConnectWithoutProjectInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_photo_create_without_project_input_1.ProjectPhotoCreateWithoutProjectInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_photo_create_without_project_input_1.ProjectPhotoCreateWithoutProjectInput),
    __metadata("design:type", project_photo_create_without_project_input_1.ProjectPhotoCreateWithoutProjectInput)
], ProjectPhotoCreateOrConnectWithoutProjectInput.prototype, "create", void 0);
ProjectPhotoCreateOrConnectWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectPhotoCreateOrConnectWithoutProjectInput);
exports.ProjectPhotoCreateOrConnectWithoutProjectInput = ProjectPhotoCreateOrConnectWithoutProjectInput;
//# sourceMappingURL=project-photo-create-or-connect-without-project.input.js.map