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
exports.FindManyProjectArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_where_input_1 = require("./project-where.input");
const class_transformer_1 = require("class-transformer");
const project_order_by_with_relation_input_1 = require("./project-order-by-with-relation.input");
const client_1 = require("@prisma/client");
const project_where_unique_input_1 = require("./project-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const project_scalar_field_enum_1 = require("./project-scalar-field.enum");
let FindManyProjectArgs = class FindManyProjectArgs {
};
__decorate([
    (0, graphql_1.Field)(() => project_where_input_1.ProjectWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_input_1.ProjectWhereInput),
    __metadata("design:type", project_where_input_1.ProjectWhereInput)
], FindManyProjectArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_order_by_with_relation_input_1.ProjectOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyProjectArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_where_unique_input_1.ProjectWhereUniqueInput, { nullable: true }),
    __metadata("design:type", Object)
], FindManyProjectArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyProjectArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyProjectArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_scalar_field_enum_1.ProjectScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyProjectArgs.prototype, "distinct", void 0);
FindManyProjectArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyProjectArgs);
exports.FindManyProjectArgs = FindManyProjectArgs;
//# sourceMappingURL=find-many-project.args.js.map