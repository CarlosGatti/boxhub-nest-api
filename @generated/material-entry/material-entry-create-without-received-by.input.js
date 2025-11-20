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
exports.MaterialEntryCreateWithoutReceivedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_type_json_1 = require("graphql-type-json");
const project_create_nested_one_without_materials_input_1 = require("../project/project-create-nested-one-without-materials.input");
let MaterialEntryCreateWithoutReceivedByInput = class MaterialEntryCreateWithoutReceivedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "supplier", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: false }),
    __metadata("design:type", Number)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "receivedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_nested_one_without_materials_input_1.ProjectCreateNestedOneWithoutMaterialsInput, { nullable: false }),
    __metadata("design:type", project_create_nested_one_without_materials_input_1.ProjectCreateNestedOneWithoutMaterialsInput)
], MaterialEntryCreateWithoutReceivedByInput.prototype, "project", void 0);
MaterialEntryCreateWithoutReceivedByInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialEntryCreateWithoutReceivedByInput);
exports.MaterialEntryCreateWithoutReceivedByInput = MaterialEntryCreateWithoutReceivedByInput;
//# sourceMappingURL=material-entry-create-without-received-by.input.js.map