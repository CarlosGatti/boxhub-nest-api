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
exports.PermitInspectionUpdateManyWithoutResponsibleNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const permit_inspection_create_without_responsible_input_1 = require("./permit-inspection-create-without-responsible.input");
const class_transformer_1 = require("class-transformer");
const permit_inspection_create_or_connect_without_responsible_input_1 = require("./permit-inspection-create-or-connect-without-responsible.input");
const permit_inspection_upsert_with_where_unique_without_responsible_input_1 = require("./permit-inspection-upsert-with-where-unique-without-responsible.input");
const permit_inspection_create_many_responsible_input_envelope_input_1 = require("./permit-inspection-create-many-responsible-input-envelope.input");
const permit_inspection_where_unique_input_1 = require("./permit-inspection-where-unique.input");
const permit_inspection_update_with_where_unique_without_responsible_input_1 = require("./permit-inspection-update-with-where-unique-without-responsible.input");
const permit_inspection_update_many_with_where_without_responsible_input_1 = require("./permit-inspection-update-many-with-where-without-responsible.input");
const permit_inspection_scalar_where_input_1 = require("./permit-inspection-scalar-where.input");
let PermitInspectionUpdateManyWithoutResponsibleNestedInput = class PermitInspectionUpdateManyWithoutResponsibleNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_create_without_responsible_input_1.PermitInspectionCreateWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_create_without_responsible_input_1.PermitInspectionCreateWithoutResponsibleInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_create_or_connect_without_responsible_input_1.PermitInspectionCreateOrConnectWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_create_or_connect_without_responsible_input_1.PermitInspectionCreateOrConnectWithoutResponsibleInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_upsert_with_where_unique_without_responsible_input_1.PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_upsert_with_where_unique_without_responsible_input_1.PermitInspectionUpsertWithWhereUniqueWithoutResponsibleInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_create_many_responsible_input_envelope_input_1.PermitInspectionCreateManyResponsibleInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_create_many_responsible_input_envelope_input_1.PermitInspectionCreateManyResponsibleInputEnvelope),
    __metadata("design:type", permit_inspection_create_many_responsible_input_envelope_input_1.PermitInspectionCreateManyResponsibleInputEnvelope)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_where_unique_input_1.PermitInspectionWhereUniqueInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_update_with_where_unique_without_responsible_input_1.PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_update_with_where_unique_without_responsible_input_1.PermitInspectionUpdateWithWhereUniqueWithoutResponsibleInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_update_many_with_where_without_responsible_input_1.PermitInspectionUpdateManyWithWhereWithoutResponsibleInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_update_many_with_where_without_responsible_input_1.PermitInspectionUpdateManyWithWhereWithoutResponsibleInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_inspection_scalar_where_input_1.PermitInspectionScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => permit_inspection_scalar_where_input_1.PermitInspectionScalarWhereInput),
    __metadata("design:type", Array)
], PermitInspectionUpdateManyWithoutResponsibleNestedInput.prototype, "deleteMany", void 0);
PermitInspectionUpdateManyWithoutResponsibleNestedInput = __decorate([
    (0, graphql_2.InputType)()
], PermitInspectionUpdateManyWithoutResponsibleNestedInput);
exports.PermitInspectionUpdateManyWithoutResponsibleNestedInput = PermitInspectionUpdateManyWithoutResponsibleNestedInput;
//# sourceMappingURL=permit-inspection-update-many-without-responsible-nested.input.js.map