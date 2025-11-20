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
exports.Subcontractor = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const insurance_model_1 = require("../insurance/insurance.model");
const subcontractor_count_output_1 = require("./subcontractor-count.output");
let Subcontractor = class Subcontractor {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Subcontractor.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Subcontractor.prototype, "companyName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Subcontractor.prototype, "contactName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Subcontractor.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Subcontractor.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Subcontractor.prototype, "trade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Subcontractor.prototype, "bankAccount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Subcontractor.prototype, "paymentPreference", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], Subcontractor.prototype, "notes", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], Subcontractor.prototype, "priority", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], Subcontractor.prototype, "createdViaPublicForm", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Subcontractor.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Subcontractor.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [insurance_model_1.Insurance], { nullable: true }),
    __metadata("design:type", Array)
], Subcontractor.prototype, "insurances", void 0);
__decorate([
    (0, graphql_1.Field)(() => subcontractor_count_output_1.SubcontractorCount, { nullable: false }),
    __metadata("design:type", subcontractor_count_output_1.SubcontractorCount)
], Subcontractor.prototype, "_count", void 0);
Subcontractor = __decorate([
    (0, graphql_2.ObjectType)()
], Subcontractor);
exports.Subcontractor = Subcontractor;
//# sourceMappingURL=subcontractor.model.js.map