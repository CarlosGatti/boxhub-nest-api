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
exports.ProjectDocumentUpdateManyWithoutProjectNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_document_create_without_project_input_1 = require("./project-document-create-without-project.input");
const class_transformer_1 = require("class-transformer");
const project_document_create_or_connect_without_project_input_1 = require("./project-document-create-or-connect-without-project.input");
const project_document_upsert_with_where_unique_without_project_input_1 = require("./project-document-upsert-with-where-unique-without-project.input");
const project_document_create_many_project_input_envelope_input_1 = require("./project-document-create-many-project-input-envelope.input");
const project_document_where_unique_input_1 = require("./project-document-where-unique.input");
const project_document_update_with_where_unique_without_project_input_1 = require("./project-document-update-with-where-unique-without-project.input");
const project_document_update_many_with_where_without_project_input_1 = require("./project-document-update-many-with-where-without-project.input");
const project_document_scalar_where_input_1 = require("./project-document-scalar-where.input");
let ProjectDocumentUpdateManyWithoutProjectNestedInput = class ProjectDocumentUpdateManyWithoutProjectNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [project_document_create_without_project_input_1.ProjectDocumentCreateWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_create_without_project_input_1.ProjectDocumentCreateWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_create_or_connect_without_project_input_1.ProjectDocumentCreateOrConnectWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_create_or_connect_without_project_input_1.ProjectDocumentCreateOrConnectWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_upsert_with_where_unique_without_project_input_1.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_upsert_with_where_unique_without_project_input_1.ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_create_many_project_input_envelope_input_1.ProjectDocumentCreateManyProjectInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_create_many_project_input_envelope_input_1.ProjectDocumentCreateManyProjectInputEnvelope),
    __metadata("design:type", project_document_create_many_project_input_envelope_input_1.ProjectDocumentCreateManyProjectInputEnvelope)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_where_unique_input_1.ProjectDocumentWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_update_with_where_unique_without_project_input_1.ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_update_with_where_unique_without_project_input_1.ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_update_many_with_where_without_project_input_1.ProjectDocumentUpdateManyWithWhereWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_update_many_with_where_without_project_input_1.ProjectDocumentUpdateManyWithWhereWithoutProjectInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_document_scalar_where_input_1.ProjectDocumentScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_document_scalar_where_input_1.ProjectDocumentScalarWhereInput),
    __metadata("design:type", Array)
], ProjectDocumentUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
ProjectDocumentUpdateManyWithoutProjectNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectDocumentUpdateManyWithoutProjectNestedInput);
exports.ProjectDocumentUpdateManyWithoutProjectNestedInput = ProjectDocumentUpdateManyWithoutProjectNestedInput;
//# sourceMappingURL=project-document-update-many-without-project-nested.input.js.map