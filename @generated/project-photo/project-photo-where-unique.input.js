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
exports.ProjectPhotoWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const project_photo_where_input_1 = require("./project-photo-where.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_photo_category_filter_input_1 = require("../prisma/enum-photo-category-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const project_relation_filter_input_1 = require("../project/project-relation-filter.input");
let ProjectPhotoWhereUniqueInput = class ProjectPhotoWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ProjectPhotoWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_input_1.ProjectPhotoWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProjectPhotoWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_input_1.ProjectPhotoWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProjectPhotoWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_photo_where_input_1.ProjectPhotoWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ProjectPhotoWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectPhotoWhereUniqueInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ProjectPhotoWhereUniqueInput.prototype, "caption", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_photo_category_filter_input_1.EnumPhotoCategoryFilter, { nullable: true }),
    __metadata("design:type", enum_photo_category_filter_input_1.EnumPhotoCategoryFilter)
], ProjectPhotoWhereUniqueInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ProjectPhotoWhereUniqueInput.prototype, "stage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectPhotoWhereUniqueInput.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectPhotoWhereUniqueInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_relation_filter_input_1.ProjectRelationFilter, { nullable: true }),
    __metadata("design:type", project_relation_filter_input_1.ProjectRelationFilter)
], ProjectPhotoWhereUniqueInput.prototype, "project", void 0);
ProjectPhotoWhereUniqueInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectPhotoWhereUniqueInput);
exports.ProjectPhotoWhereUniqueInput = ProjectPhotoWhereUniqueInput;
//# sourceMappingURL=project-photo-where-unique.input.js.map