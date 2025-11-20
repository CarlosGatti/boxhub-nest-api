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
exports.InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const insurance_where_unique_input_1 = require("./insurance-where-unique.input");
const class_transformer_1 = require("class-transformer");
const insurance_update_without_subcontractor_input_1 = require("./insurance-update-without-subcontractor.input");
let InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput = class InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput {
};
__decorate([
    (0, graphql_1.Field)(() => insurance_where_unique_input_1.InsuranceWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => insurance_where_unique_input_1.InsuranceWhereUniqueInput),
    __metadata("design:type", Object)
], InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => insurance_update_without_subcontractor_input_1.InsuranceUpdateWithoutSubcontractorInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => insurance_update_without_subcontractor_input_1.InsuranceUpdateWithoutSubcontractorInput),
    __metadata("design:type", insurance_update_without_subcontractor_input_1.InsuranceUpdateWithoutSubcontractorInput)
], InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput.prototype, "data", void 0);
InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput = __decorate([
    (0, graphql_2.InputType)()
], InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput);
exports.InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput = InsuranceUpdateWithWhereUniqueWithoutSubcontractorInput;
//# sourceMappingURL=insurance-update-with-where-unique-without-subcontractor.input.js.map