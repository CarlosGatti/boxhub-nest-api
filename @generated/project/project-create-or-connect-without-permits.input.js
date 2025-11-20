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
exports.ProjectCreateOrConnectWithoutPermitsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const project_where_unique_input_1 = require("./project-where-unique.input");
const class_transformer_1 = require("class-transformer");
const project_create_without_permits_input_1 = require("./project-create-without-permits.input");
let ProjectCreateOrConnectWithoutPermitsInput = class ProjectCreateOrConnectWithoutPermitsInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_where_unique_input_1.ProjectWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Object)
], ProjectCreateOrConnectWithoutPermitsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_without_permits_input_1.ProjectCreateWithoutPermitsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => project_create_without_permits_input_1.ProjectCreateWithoutPermitsInput),
    __metadata("design:type", project_create_without_permits_input_1.ProjectCreateWithoutPermitsInput)
], ProjectCreateOrConnectWithoutPermitsInput.prototype, "create", void 0);
ProjectCreateOrConnectWithoutPermitsInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectCreateOrConnectWithoutPermitsInput);
exports.ProjectCreateOrConnectWithoutPermitsInput = ProjectCreateOrConnectWithoutPermitsInput;
//# sourceMappingURL=project-create-or-connect-without-permits.input.js.map