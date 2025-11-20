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
exports.MaterialEntryUpdateManyWithoutProjectNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_entry_create_without_project_input_1 = require("./material-entry-create-without-project.input");
const class_transformer_1 = require("class-transformer");
const material_entry_create_or_connect_without_project_input_1 = require("./material-entry-create-or-connect-without-project.input");
const material_entry_upsert_with_where_unique_without_project_input_1 = require("./material-entry-upsert-with-where-unique-without-project.input");
const material_entry_create_many_project_input_envelope_input_1 = require("./material-entry-create-many-project-input-envelope.input");
const material_entry_where_unique_input_1 = require("./material-entry-where-unique.input");
const material_entry_update_with_where_unique_without_project_input_1 = require("./material-entry-update-with-where-unique-without-project.input");
const material_entry_update_many_with_where_without_project_input_1 = require("./material-entry-update-many-with-where-without-project.input");
const material_entry_scalar_where_input_1 = require("./material-entry-scalar-where.input");
let MaterialEntryUpdateManyWithoutProjectNestedInput = class MaterialEntryUpdateManyWithoutProjectNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [material_entry_create_without_project_input_1.MaterialEntryCreateWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_create_without_project_input_1.MaterialEntryCreateWithoutProjectInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_create_or_connect_without_project_input_1.MaterialEntryCreateOrConnectWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_create_or_connect_without_project_input_1.MaterialEntryCreateOrConnectWithoutProjectInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_upsert_with_where_unique_without_project_input_1.MaterialEntryUpsertWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_upsert_with_where_unique_without_project_input_1.MaterialEntryUpsertWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_create_many_project_input_envelope_input_1.MaterialEntryCreateManyProjectInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_create_many_project_input_envelope_input_1.MaterialEntryCreateManyProjectInputEnvelope),
    __metadata("design:type", material_entry_create_many_project_input_envelope_input_1.MaterialEntryCreateManyProjectInputEnvelope)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_update_with_where_unique_without_project_input_1.MaterialEntryUpdateWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_update_with_where_unique_without_project_input_1.MaterialEntryUpdateWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_update_many_with_where_without_project_input_1.MaterialEntryUpdateManyWithWhereWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_update_many_with_where_without_project_input_1.MaterialEntryUpdateManyWithWhereWithoutProjectInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_scalar_where_input_1.MaterialEntryScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_scalar_where_input_1.MaterialEntryScalarWhereInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
MaterialEntryUpdateManyWithoutProjectNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialEntryUpdateManyWithoutProjectNestedInput);
exports.MaterialEntryUpdateManyWithoutProjectNestedInput = MaterialEntryUpdateManyWithoutProjectNestedInput;
//# sourceMappingURL=material-entry-update-many-without-project-nested.input.js.map