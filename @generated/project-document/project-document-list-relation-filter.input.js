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
exports.ProjectDocumentListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_document_where_input_1 = require("./project-document-where.input");
let ProjectDocumentListRelationFilter = class ProjectDocumentListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => project_document_where_input_1.ProjectDocumentWhereInput, { nullable: true }),
    __metadata("design:type", project_document_where_input_1.ProjectDocumentWhereInput)
], ProjectDocumentListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_where_input_1.ProjectDocumentWhereInput, { nullable: true }),
    __metadata("design:type", project_document_where_input_1.ProjectDocumentWhereInput)
], ProjectDocumentListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_document_where_input_1.ProjectDocumentWhereInput, { nullable: true }),
    __metadata("design:type", project_document_where_input_1.ProjectDocumentWhereInput)
], ProjectDocumentListRelationFilter.prototype, "none", void 0);
ProjectDocumentListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], ProjectDocumentListRelationFilter);
exports.ProjectDocumentListRelationFilter = ProjectDocumentListRelationFilter;
//# sourceMappingURL=project-document-list-relation-filter.input.js.map