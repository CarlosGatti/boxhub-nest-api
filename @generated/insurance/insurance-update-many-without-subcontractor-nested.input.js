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
exports.InsuranceUpdateManyWithoutSubcontractorNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const insurance_create_without_subcontractor_input_1 = require("./insurance-create-without-subcontractor.input");
const class_transformer_1 = require("class-transformer");
const insurance_create_or_connect_without_subcontractor_input_1 = require("./insurance-create-or-connect-without-subcontractor.input");
const insurance_upsert_with_where_unique_without_subcontractor_input_1 = require("./insurance-upsert-with-where-unique-without-subcontractor.input");
const insurance_create_many_subcontractor_input_envelope_input_1 = require("./insurance-create-many-subcontractor-input-envelope.input");
const insurance_where_unique_input_1 = require("./insurance-where-unique.input");
const insurance_update_with_where_unique_without_subcontractor_input_1 = require("./insurance-update-with-where-unique-without-subcontractor.input");
const insurance_update_many_with_where_without_subcontractor_input_1 = require("./insurance-update-many-with-where-without-subcontractor.input");
const insurance_scalar_where_input_1 = require("./insurance-scalar-where.input");
let InsuranceUpdateManyWithoutSubcontractorNestedInput = class InsuranceUpdateManyWithoutSubcontractorNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [insurance_create_without_subcontractor_input_1.InsuranceCreateWithoutSubcontractorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_create_without_subcontractor_input_1.InsuranceCreateWithoutSubcontractorInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_create_or_connect_without_subcontractor_input_1.InsuranceCreateOrConnectWithoutSubcontractorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_create_or_connect_without_subcontractor_input_1.InsuranceCreateOrConnectWithoutSubcontractorInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_upsert_with_where_unique_without_subcontractor_input_1.InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_upsert_with_where_unique_without_subcontractor_input_1.InsuranceUpsertWithWhereUniqueWithoutSubcontractorInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => insurance_create_many_subcontractor_input_envelope_input_1.InsuranceCreateManySubcontractorInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_create_many_subcontractor_input_envelope_input_1.InsuranceCreateManySubcontractorInputEnvelope),
    __metadata("design:type", insurance_create_many_subcontractor_input_envelope_input_1.InsuranceCreateManySubcontractorInputEnvelope)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_where_unique_input_1.InsuranceWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_where_unique_input_1.InsuranceWhereUniqueInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_where_unique_input_1.InsuranceWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_where_unique_input_1.InsuranceWhereUniqueInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_where_unique_input_1.InsuranceWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_where_unique_input_1.InsuranceWhereUniqueInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_where_unique_input_1.InsuranceWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_where_unique_input_1.InsuranceWhereUniqueInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_update_with_where_unique_without_subcontractor_input_1.InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_update_with_where_unique_without_subcontractor_input_1.InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_update_many_with_where_without_subcontractor_input_1.InsuranceUpdateManyWithWhereWithoutSubcontractorInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_update_many_with_where_without_subcontractor_input_1.InsuranceUpdateManyWithWhereWithoutSubcontractorInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_scalar_where_input_1.InsuranceScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => insurance_scalar_where_input_1.InsuranceScalarWhereInput),
    __metadata("design:type", Array)
], InsuranceUpdateManyWithoutSubcontractorNestedInput.prototype, "deleteMany", void 0);
InsuranceUpdateManyWithoutSubcontractorNestedInput = __decorate([
    (0, graphql_2.InputType)()
], InsuranceUpdateManyWithoutSubcontractorNestedInput);
exports.InsuranceUpdateManyWithoutSubcontractorNestedInput = InsuranceUpdateManyWithoutSubcontractorNestedInput;
//# sourceMappingURL=insurance-update-many-without-subcontractor-nested.input.js.map