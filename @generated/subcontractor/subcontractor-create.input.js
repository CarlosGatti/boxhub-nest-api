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
exports.SubcontractorCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const insurance_create_nested_many_without_subcontractor_input_1 = require("../insurance/insurance-create-nested-many-without-subcontractor.input");
let SubcontractorCreateInput = class SubcontractorCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "companyName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "contactName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "trade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "bankAccount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "paymentPreference", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SubcontractorCreateInput.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SubcontractorCreateInput.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SubcontractorCreateInput.prototype, "createdViaPublicForm", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], SubcontractorCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], SubcontractorCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => insurance_create_nested_many_without_subcontractor_input_1.InsuranceCreateNestedManyWithoutSubcontractorInput, { nullable: true }),
    __metadata("design:type", insurance_create_nested_many_without_subcontractor_input_1.InsuranceCreateNestedManyWithoutSubcontractorInput)
], SubcontractorCreateInput.prototype, "insurances", void 0);
SubcontractorCreateInput = __decorate([
    (0, graphql_2.InputType)()
], SubcontractorCreateInput);
exports.SubcontractorCreateInput = SubcontractorCreateInput;
//# sourceMappingURL=subcontractor-create.input.js.map