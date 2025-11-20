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
exports.ProjectDocumentUpdateManyWithWhereWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_document_scalar_where_input_1 = require("./project-document-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const project_document_update_many_mutation_input_1 = require("./project-document-update-many-mutation.input");
let ProjectDocumentUpdateManyWithWhereWithoutProjectInput = class ProjectDocumentUpdateManyWithWhereWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_document_scalar_where_input_1.ProjectDocumentScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_document_scalar_where_input_1.ProjectDocumentScalarWhereInput),
    __metadata("design:type", project_document_scalar_where_input_1.ProjectDocumentScalarWhereInput)
], ProjectDocumentUpdateManyWithWhereWithoutProjectInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_update_many_mutation_input_1.ProjectDocumentUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_document_update_many_mutation_input_1.ProjectDocumentUpdateManyMutationInput),
    __metadata("design:type", project_document_update_many_mutation_input_1.ProjectDocumentUpdateManyMutationInput)
], ProjectDocumentUpdateManyWithWhereWithoutProjectInput.prototype, "data", void 0);
ProjectDocumentUpdateManyWithWhereWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectDocumentUpdateManyWithWhereWithoutProjectInput);
exports.ProjectDocumentUpdateManyWithWhereWithoutProjectInput = ProjectDocumentUpdateManyWithWhereWithoutProjectInput;
//# sourceMappingURL=project-document-update-many-with-where-without-project.input.js.map