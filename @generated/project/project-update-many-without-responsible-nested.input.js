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
exports.ProjectUpdateManyWithoutResponsibleNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_create_without_responsible_input_1 = require("./project-create-without-responsible.input");
const class_transformer_1 = require("class-transformer");
const project_create_or_connect_without_responsible_input_1 = require("./project-create-or-connect-without-responsible.input");
const project_upsert_with_where_unique_without_responsible_input_1 = require("./project-upsert-with-where-unique-without-responsible.input");
const project_create_many_responsible_input_envelope_input_1 = require("./project-create-many-responsible-input-envelope.input");
const project_where_unique_input_1 = require("./project-where-unique.input");
const project_update_with_where_unique_without_responsible_input_1 = require("./project-update-with-where-unique-without-responsible.input");
const project_update_many_with_where_without_responsible_input_1 = require("./project-update-many-with-where-without-responsible.input");
const project_scalar_where_input_1 = require("./project-scalar-where.input");
let ProjectUpdateManyWithoutResponsibleNestedInput = class ProjectUpdateManyWithoutResponsibleNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [project_create_without_responsible_input_1.ProjectCreateWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_without_responsible_input_1.ProjectCreateWithoutResponsibleInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_create_or_connect_without_responsible_input_1.ProjectCreateOrConnectWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_or_connect_without_responsible_input_1.ProjectCreateOrConnectWithoutResponsibleInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_upsert_with_where_unique_without_responsible_input_1.ProjectUpsertWithWhereUniqueWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_upsert_with_where_unique_without_responsible_input_1.ProjectUpsertWithWhereUniqueWithoutResponsibleInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_many_responsible_input_envelope_input_1.ProjectCreateManyResponsibleInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_many_responsible_input_envelope_input_1.ProjectCreateManyResponsibleInputEnvelope),
    __metadata("design:type", project_create_many_responsible_input_envelope_input_1.ProjectCreateManyResponsibleInputEnvelope)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_unique_input_1.ProjectWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_unique_input_1.ProjectWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_unique_input_1.ProjectWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_unique_input_1.ProjectWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_update_with_where_unique_without_responsible_input_1.ProjectUpdateWithWhereUniqueWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_update_with_where_unique_without_responsible_input_1.ProjectUpdateWithWhereUniqueWithoutResponsibleInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_update_many_with_where_without_responsible_input_1.ProjectUpdateManyWithWhereWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_update_many_with_where_without_responsible_input_1.ProjectUpdateManyWithWhereWithoutResponsibleInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_scalar_where_input_1.ProjectScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_scalar_where_input_1.ProjectScalarWhereInput),
    __metadata("design:type", Array)
], ProjectUpdateManyWithoutResponsibleNestedInput.prototype, "deleteMany", void 0);
ProjectUpdateManyWithoutResponsibleNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectUpdateManyWithoutResponsibleNestedInput);
exports.ProjectUpdateManyWithoutResponsibleNestedInput = ProjectUpdateManyWithoutResponsibleNestedInput;
//# sourceMappingURL=project-update-many-without-responsible-nested.input.js.map