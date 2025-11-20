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
exports.SubcontractorCreateOrConnectWithoutInsurancesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const subcontractor_where_unique_input_1 = require("./subcontractor-where-unique.input");
const class_transformer_1 = require("class-transformer");
const subcontractor_create_without_insurances_input_1 = require("./subcontractor-create-without-insurances.input");
let SubcontractorCreateOrConnectWithoutInsurancesInput = class SubcontractorCreateOrConnectWithoutInsurancesInput {
};
__decorate([
    (0, graphql_1.Field)(() => subcontractor_where_unique_input_1.SubcontractorWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => subcontractor_where_unique_input_1.SubcontractorWhereUniqueInput),
    __metadata("design:type", Object)
], SubcontractorCreateOrConnectWithoutInsurancesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => subcontractor_create_without_insurances_input_1.SubcontractorCreateWithoutInsurancesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => subcontractor_create_without_insurances_input_1.SubcontractorCreateWithoutInsurancesInput),
    __metadata("design:type", subcontractor_create_without_insurances_input_1.SubcontractorCreateWithoutInsurancesInput)
], SubcontractorCreateOrConnectWithoutInsurancesInput.prototype, "create", void 0);
SubcontractorCreateOrConnectWithoutInsurancesInput = __decorate([
    (0, graphql_2.InputType)()
], SubcontractorCreateOrConnectWithoutInsurancesInput);
exports.SubcontractorCreateOrConnectWithoutInsurancesInput = SubcontractorCreateOrConnectWithoutInsurancesInput;
//# sourceMappingURL=subcontractor-create-or-connect-without-insurances.input.js.map