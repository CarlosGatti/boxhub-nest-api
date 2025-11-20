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
var ProjectPhotoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectPhotoWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_photo_category_filter_input_1 = require("../prisma/enum-photo-category-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const project_relation_filter_input_1 = require("../project/project-relation-filter.input");
let ProjectPhotoWhereInput = ProjectPhotoWhereInput_1 = class ProjectPhotoWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ProjectPhotoWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectPhotoWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProjectPhotoWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectPhotoWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ProjectPhotoWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ProjectPhotoWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectPhotoWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], ProjectPhotoWhereInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ProjectPhotoWhereInput.prototype, "caption", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_photo_category_filter_input_1.EnumPhotoCategoryFilter, { nullable: true }),
    __metadata("design:type", enum_photo_category_filter_input_1.EnumPhotoCategoryFilter)
], ProjectPhotoWhereInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], ProjectPhotoWhereInput.prototype, "stage", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], ProjectPhotoWhereInput.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], ProjectPhotoWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_relation_filter_input_1.ProjectRelationFilter, { nullable: true }),
    __metadata("design:type", project_relation_filter_input_1.ProjectRelationFilter)
], ProjectPhotoWhereInput.prototype, "project", void 0);
ProjectPhotoWhereInput = ProjectPhotoWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ProjectPhotoWhereInput);
exports.ProjectPhotoWhereInput = ProjectPhotoWhereInput;
//# sourceMappingURL=project-photo-where.input.js.map