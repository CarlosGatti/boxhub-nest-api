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
exports.PermitInspectionUpdateManyWithoutProjectNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const permit_inspection_create_without_project_input_1 = require("./permit-inspection-create-without-project.input");
const class_transformer_1 = require("class-transformer");
const permit_inspection_create_or_connect_without_project_input_1 = require("./permit-inspection-create-or-connect-without-project.input");
const permit_inspection_upsert_with_where_unique_without_project_input_1 = require("./permit-inspection-upsert-with-where-unique-without-project.input");
const permit_inspection_create_many_project_input_envelope_input_1 = require("./permit-inspection-create-many-project-input-envelope.input");
const permit_inspection_where_unique_input_1 = require("./permit-inspection-where-unique.input");
const permit_inspection_update_with_where_unique_without_project_input_1 = require("./permit-inspection-update-with-where-unique-without-project.input");
const permit_inspection_update_many_with_where_without_project_input_1 = require("./permit-inspection-update-many-with-where-without-project.input");
const permit_inspection_scalar_where_input_1 = require("./permit-inspection-scalar-where.input");
let PermitInspectionUpdateManyWithoutProjectNestedInput = class PermitInspectionUpdateManyWithoutProjectNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_create_without_project_input_1.PermitInspectionCreateWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_create_without_project_input_1.PermitInspectionCreateWithoutProjectInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_create_or_connect_without_project_input_1.PermitInspectionCreateOrConnectWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_create_or_connect_without_project_input_1.PermitInspectionCreateOrConnectWithoutProjectInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_upsert_with_where_unique_without_project_input_1.PermitInspectionUpsertWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_upsert_with_where_unique_without_project_input_1.PermitInspectionUpsertWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_create_many_project_input_envelope_input_1.PermitInspectionCreateManyProjectInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_create_many_project_input_envelope_input_1.PermitInspectionCreateManyProjectInputEnvelope),
    __metadata("design:type", permit_inspection_create_many_project_input_envelope_input_1.PermitInspectionCreateManyProjectInputEnvelope)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_update_with_where_unique_without_project_input_1.PermitInspectionUpdateWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_update_with_where_unique_without_project_input_1.PermitInspectionUpdateWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_update_many_with_where_without_project_input_1.PermitInspectionUpdateManyWithWhereWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_update_many_with_where_without_project_input_1.PermitInspectionUpdateManyWithWhereWithoutProjectInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_scalar_where_input_1.PermitInspectionScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_scalar_where_input_1.PermitInspectionScalarWhereInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
PermitInspectionUpdateManyWithoutProjectNestedInput = __decorate([
    (0, graphql_2.InputType)()
], PermitInspectionUpdateManyWithoutProjectNestedInput);
exports.PermitInspectionUpdateManyWithoutProjectNestedInput = PermitInspectionUpdateManyWithoutProjectNestedInput;
//# sourceMappingURL=permit-inspection-update-many-without-project-nested.input.js.map