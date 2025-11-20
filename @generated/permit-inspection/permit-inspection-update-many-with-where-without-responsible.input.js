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
exports.PermitInspectionUpdateManyWithWhereWithoutResponsibleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const permit_inspection_scalar_where_input_1 = require("./permit-inspection-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const permit_inspection_update_many_mutation_input_1 = require("./permit-inspection-update-many-mutation.input");
let PermitInspectionUpdateManyWithWhereWithoutResponsibleInput = class PermitInspectionUpdateManyWithWhereWithoutResponsibleInput {
};
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_scalar_where_input_1.PermitInspectionScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => permit_inspection_scalar_where_input_1.PermitInspectionScalarWhereInput),
    __metadata("design:type", permit_inspection_scalar_where_input_1.PermitInspectionScalarWhereInput)
], PermitInspectionUpdateManyWithWhereWithoutResponsibleInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_inspection_update_many_mutation_input_1.PermitInspectionUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => permit_inspection_update_many_mutation_input_1.PermitInspectionUpdateManyMutationInput),
    __metadata("design:type", permit_inspection_update_many_mutation_input_1.PermitInspectionUpdateManyMutationInput)
], PermitInspectionUpdateManyWithWhereWithoutResponsibleInput.prototype, "data", void 0);
PermitInspectionUpdateManyWithWhereWithoutResponsibleInput = __decorate([
    (0, graphql_2.InputType)()
], PermitInspectionUpdateManyWithWhereWithoutResponsibleInput);
exports.PermitInspectionUpdateManyWithWhereWithoutResponsibleInput = PermitInspectionUpdateManyWithWhereWithoutResponsibleInput;
//# sourceMappingURL=permit-inspection-update-many-with-where-without-responsible.input.js.map