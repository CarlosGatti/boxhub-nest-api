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
exports.ProjectCreateNestedManyWithoutResponsibleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_create_without_responsible_input_1 = require("./project-create-without-responsible.input");
const class_transformer_1 = require("class-transformer");
const project_create_or_connect_without_responsible_input_1 = require("./project-create-or-connect-without-responsible.input");
const project_create_many_responsible_input_envelope_input_1 = require("./project-create-many-responsible-input-envelope.input");
const project_where_unique_input_1 = require("./project-where-unique.input");
let ProjectCreateNestedManyWithoutResponsibleInput = class ProjectCreateNestedManyWithoutResponsibleInput {
};
__decorate([
    (0, graphql_1.Field)(() => [project_create_without_responsible_input_1.ProjectCreateWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_without_responsible_input_1.ProjectCreateWithoutResponsibleInput),
    __metadata("design:type", Array)
], ProjectCreateNestedManyWithoutResponsibleInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_create_or_connect_without_responsible_input_1.ProjectCreateOrConnectWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_or_connect_without_responsible_input_1.ProjectCreateOrConnectWithoutResponsibleInput),
    __metadata("design:type", Array)
], ProjectCreateNestedManyWithoutResponsibleInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_many_responsible_input_envelope_input_1.ProjectCreateManyResponsibleInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_many_responsible_input_envelope_input_1.ProjectCreateManyResponsibleInputEnvelope),
    __metadata("design:type", project_create_many_responsible_input_envelope_input_1.ProjectCreateManyResponsibleInputEnvelope)
], ProjectCreateNestedManyWithoutResponsibleInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_where_unique_input_1.ProjectWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Array)
], ProjectCreateNestedManyWithoutResponsibleInput.prototype, "connect", void 0);
ProjectCreateNestedManyWithoutResponsibleInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectCreateNestedManyWithoutResponsibleInput);
exports.ProjectCreateNestedManyWithoutResponsibleInput = ProjectCreateNestedManyWithoutResponsibleInput;
//# sourceMappingURL=project-create-nested-many-without-responsible.input.js.map