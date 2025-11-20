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
exports.ProjectListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_where_input_1 = require("./project-where.input");
let ProjectListRelationFilter = class ProjectListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => project_where_input_1.ProjectWhereInput, { nullable: true }),
    __metadata("design:type", project_where_input_1.ProjectWhereInput)
], ProjectListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_where_input_1.ProjectWhereInput, { nullable: true }),
    __metadata("design:type", project_where_input_1.ProjectWhereInput)
], ProjectListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_where_input_1.ProjectWhereInput, { nullable: true }),
    __metadata("design:type", project_where_input_1.ProjectWhereInput)
], ProjectListRelationFilter.prototype, "none", void 0);
ProjectListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], ProjectListRelationFilter);
exports.ProjectListRelationFilter = ProjectListRelationFilter;
//# sourceMappingURL=project-list-relation-filter.input.js.map