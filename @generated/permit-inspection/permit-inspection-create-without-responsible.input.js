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
exports.PermitInspectionCreateWithoutResponsibleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const permit_kind_enum_1 = require("../prisma/permit-kind.enum");
const permit_status_enum_1 = require("../prisma/permit-status.enum");
const project_create_nested_one_without_permits_input_1 = require("../project/project-create-nested-one-without-permits.input");
let PermitInspectionCreateWithoutResponsibleInput = class PermitInspectionCreateWithoutResponsibleInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_kind_enum_1.PermitKind, { nullable: false }),
    __metadata("design:type", Object)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "kind", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_status_enum_1.PermitStatus, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "requestedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "approvedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "fileUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_create_nested_one_without_permits_input_1.ProjectCreateNestedOneWithoutPermitsInput, { nullable: false }),
    __metadata("design:type", project_create_nested_one_without_permits_input_1.ProjectCreateNestedOneWithoutPermitsInput)
], PermitInspectionCreateWithoutResponsibleInput.prototype, "project", void 0);
PermitInspectionCreateWithoutResponsibleInput = __decorate([
    (0, graphql_2.InputType)()
], PermitInspectionCreateWithoutResponsibleInput);
exports.PermitInspectionCreateWithoutResponsibleInput = PermitInspectionCreateWithoutResponsibleInput;
//# sourceMappingURL=permit-inspection-create-without-responsible.input.js.map