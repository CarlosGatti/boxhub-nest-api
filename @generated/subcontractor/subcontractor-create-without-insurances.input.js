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
exports.SubcontractorCreateWithoutInsurancesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
let SubcontractorCreateWithoutInsurancesInput = class SubcontractorCreateWithoutInsurancesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "companyName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "contactName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "trade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "bankAccount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "paymentPreference", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SubcontractorCreateWithoutInsurancesInput.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SubcontractorCreateWithoutInsurancesInput.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], SubcontractorCreateWithoutInsurancesInput.prototype, "createdViaPublicForm", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], SubcontractorCreateWithoutInsurancesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], SubcontractorCreateWithoutInsurancesInput.prototype, "updatedAt", void 0);
SubcontractorCreateWithoutInsurancesInput = __decorate([
    (0, graphql_2.InputType)()
], SubcontractorCreateWithoutInsurancesInput);
exports.SubcontractorCreateWithoutInsurancesInput = SubcontractorCreateWithoutInsurancesInput;
//# sourceMappingURL=subcontractor-create-without-insurances.input.js.map