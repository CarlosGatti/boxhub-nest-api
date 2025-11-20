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
exports.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const project_document_where_unique_input_1 = require("./project-document-where-unique.input");
const class_transformer_1 = require("class-transformer");
const project_document_update_without_project_input_1 = require("./project-document-update-without-project.input");
const project_document_create_without_project_input_1 = require("./project-document-create-without-project.input");
let ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput = class ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput),
    __metadata("design:type", Object)
], ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_update_without_project_input_1.ProjectDocumentUpdateWithoutProjectInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_document_update_without_project_input_1.ProjectDocumentUpdateWithoutProjectInput),
    __metadata("design:type", project_document_update_without_project_input_1.ProjectDocumentUpdateWithoutProjectInput)
], ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_create_without_project_input_1.ProjectDocumentCreateWithoutProjectInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_document_create_without_project_input_1.ProjectDocumentCreateWithoutProjectInput),
    __metadata("design:type", project_document_create_without_project_input_1.ProjectDocumentCreateWithoutProjectInput)
], ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput.prototype, "create", void 0);
ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput);
exports.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput = ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput;
//# sourceMappingURL=project-document-upsert-with-where-unique-without-project.input.js.map