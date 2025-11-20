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
exports.ProjectUpdateOneRequiredWithoutPermitsNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_create_without_permits_input_1 = require("./project-create-without-permits.input");
const class_transformer_1 = require("class-transformer");
const project_create_or_connect_without_permits_input_1 = require("./project-create-or-connect-without-permits.input");
const project_upsert_without_permits_input_1 = require("./project-upsert-without-permits.input");
const client_1 = require("@prisma/client");
const project_where_unique_input_1 = require("./project-where-unique.input");
const project_update_to_one_with_where_without_permits_input_1 = require("./project-update-to-one-with-where-without-permits.input");
let ProjectUpdateOneRequiredWithoutPermitsNestedInput = class ProjectUpdateOneRequiredWithoutPermitsNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => project_create_without_permits_input_1.ProjectCreateWithoutPermitsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_without_permits_input_1.ProjectCreateWithoutPermitsInput),
    __metadata("design:type", project_create_without_permits_input_1.ProjectCreateWithoutPermitsInput)
], ProjectUpdateOneRequiredWithoutPermitsNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_or_connect_without_permits_input_1.ProjectCreateOrConnectWithoutPermitsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_create_or_connect_without_permits_input_1.ProjectCreateOrConnectWithoutPermitsInput),
    __metadata("design:type", project_create_or_connect_without_permits_input_1.ProjectCreateOrConnectWithoutPermitsInput)
], ProjectUpdateOneRequiredWithoutPermitsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_upsert_without_permits_input_1.ProjectUpsertWithoutPermitsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_upsert_without_permits_input_1.ProjectUpsertWithoutPermitsInput),
    __metadata("design:type", project_upsert_without_permits_input_1.ProjectUpsertWithoutPermitsInput)
], ProjectUpdateOneRequiredWithoutPermitsNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_where_unique_input_1.ProjectWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_where_unique_input_1.ProjectWhereUniqueInput),
    __metadata("design:type", Object)
], ProjectUpdateOneRequiredWithoutPermitsNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_update_to_one_with_where_without_permits_input_1.ProjectUpdateToOneWithWhereWithoutPermitsInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => project_update_to_one_with_where_without_permits_input_1.ProjectUpdateToOneWithWhereWithoutPermitsInput),
    __metadata("design:type", project_update_to_one_with_where_without_permits_input_1.ProjectUpdateToOneWithWhereWithoutPermitsInput)
], ProjectUpdateOneRequiredWithoutPermitsNestedInput.prototype, "update", void 0);
ProjectUpdateOneRequiredWithoutPermitsNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ProjectUpdateOneRequiredWithoutPermitsNestedInput);
exports.ProjectUpdateOneRequiredWithoutPermitsNestedInput = ProjectUpdateOneRequiredWithoutPermitsNestedInput;
//# sourceMappingURL=project-update-one-required-without-permits-nested.input.js.map