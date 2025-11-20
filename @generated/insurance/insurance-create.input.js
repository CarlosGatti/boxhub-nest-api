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
exports.InsuranceCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const subcontractor_create_nested_one_without_insurances_input_1 = require("../subcontractor/subcontractor-create-nested-one-without-insurances.input");
let InsuranceCreateInput = class InsuranceCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], InsuranceCreateInput.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], InsuranceCreateInput.prototype, "expiration", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], InsuranceCreateInput.prototype, "documentUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], InsuranceCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => subcontractor_create_nested_one_without_insurances_input_1.SubcontractorCreateNestedOneWithoutInsurancesInput, { nullable: false }),
    __metadata("design:type", subcontractor_create_nested_one_without_insurances_input_1.SubcontractorCreateNestedOneWithoutInsurancesInput)
], InsuranceCreateInput.prototype, "subcontractor", void 0);
InsuranceCreateInput = __decorate([
    (0, graphql_2.InputType)()
], InsuranceCreateInput);
exports.InsuranceCreateInput = InsuranceCreateInput;
//# sourceMappingURL=insurance-create.input.js.map