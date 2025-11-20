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
exports.InsuranceUpdateManyWithWhereWithoutSubcontractorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const insurance_scalar_where_input_1 = require("./insurance-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const insurance_update_many_mutation_input_1 = require("./insurance-update-many-mutation.input");
let InsuranceUpdateManyWithWhereWithoutSubcontractorInput = class InsuranceUpdateManyWithWhereWithoutSubcontractorInput {
};
__decorate([
    (0, graphql_1.Field)(() => insurance_scalar_where_input_1.InsuranceScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => insurance_scalar_where_input_1.InsuranceScalarWhereInput),
    __metadata("design:type", insurance_scalar_where_input_1.InsuranceScalarWhereInput)
], InsuranceUpdateManyWithWhereWithoutSubcontractorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => insurance_update_many_mutation_input_1.InsuranceUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => insurance_update_many_mutation_input_1.InsuranceUpdateManyMutationInput),
    __metadata("design:type", insurance_update_many_mutation_input_1.InsuranceUpdateManyMutationInput)
], InsuranceUpdateManyWithWhereWithoutSubcontractorInput.prototype, "data", void 0);
InsuranceUpdateManyWithWhereWithoutSubcontractorInput = __decorate([
    (0, graphql_2.InputType)()
], InsuranceUpdateManyWithWhereWithoutSubcontractorInput);
exports.InsuranceUpdateManyWithWhereWithoutSubcontractorInput = InsuranceUpdateManyWithWhereWithoutSubcontractorInput;
//# sourceMappingURL=insurance-update-many-with-where-without-subcontractor.input.js.map