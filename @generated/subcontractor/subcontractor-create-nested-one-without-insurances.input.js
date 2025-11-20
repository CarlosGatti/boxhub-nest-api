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
exports.SubcontractorCreateNestedOneWithoutInsurancesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const subcontractor_create_without_insurances_input_1 = require("./subcontractor-create-without-insurances.input");
const class_transformer_1 = require("class-transformer");
const subcontractor_create_or_connect_without_insurances_input_1 = require("./subcontractor-create-or-connect-without-insurances.input");
const client_1 = require("@prisma/client");
const subcontractor_where_unique_input_1 = require("./subcontractor-where-unique.input");
let SubcontractorCreateNestedOneWithoutInsurancesInput = class SubcontractorCreateNestedOneWithoutInsurancesInput {
};
__decorate([
    (0, graphql_1.Field)(() => subcontractor_create_without_insurances_input_1.SubcontractorCreateWithoutInsurancesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => subcontractor_create_without_insurances_input_1.SubcontractorCreateWithoutInsurancesInput),
    __metadata("design:type", subcontractor_create_without_insurances_input_1.SubcontractorCreateWithoutInsurancesInput)
], SubcontractorCreateNestedOneWithoutInsurancesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => subcontractor_create_or_connect_without_insurances_input_1.SubcontractorCreateOrConnectWithoutInsurancesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => subcontractor_create_or_connect_without_insurances_input_1.SubcontractorCreateOrConnectWithoutInsurancesInput),
    __metadata("design:type", subcontractor_create_or_connect_without_insurances_input_1.SubcontractorCreateOrConnectWithoutInsurancesInput)
], SubcontractorCreateNestedOneWithoutInsurancesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => subcontractor_where_unique_input_1.SubcontractorWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => subcontractor_where_unique_input_1.SubcontractorWhereUniqueInput),
    __metadata("design:type", Object)
], SubcontractorCreateNestedOneWithoutInsurancesInput.prototype, "connect", void 0);
SubcontractorCreateNestedOneWithoutInsurancesInput = __decorate([
    (0, graphql_2.InputType)()
], SubcontractorCreateNestedOneWithoutInsurancesInput);
exports.SubcontractorCreateNestedOneWithoutInsurancesInput = SubcontractorCreateNestedOneWithoutInsurancesInput;
//# sourceMappingURL=subcontractor-create-nested-one-without-insurances.input.js.map