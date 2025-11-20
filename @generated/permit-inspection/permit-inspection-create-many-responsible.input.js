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
exports.PermitInspectionCreateManyResponsibleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const permit_kind_enum_1 = require("../prisma/permit-kind.enum");
const permit_status_enum_1 = require("../prisma/permit-status.enum");
let PermitInspectionCreateManyResponsibleInput = class PermitInspectionCreateManyResponsibleInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PermitInspectionCreateManyResponsibleInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PermitInspectionCreateManyResponsibleInput.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PermitInspectionCreateManyResponsibleInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_kind_enum_1.PermitKind, { nullable: false }),
    __metadata("design:type", Object)
], PermitInspectionCreateManyResponsibleInput.prototype, "kind", void 0);
__decorate([
    (0, graphql_1.Field)(() => permit_status_enum_1.PermitStatus, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateManyResponsibleInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateManyResponsibleInput.prototype, "requestedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateManyResponsibleInput.prototype, "approvedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], PermitInspectionCreateManyResponsibleInput.prototype, "fileUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateManyResponsibleInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PermitInspectionCreateManyResponsibleInput.prototype, "updatedAt", void 0);
PermitInspectionCreateManyResponsibleInput = __decorate([
    (0, graphql_2.InputType)()
], PermitInspectionCreateManyResponsibleInput);
exports.PermitInspectionCreateManyResponsibleInput = PermitInspectionCreateManyResponsibleInput;
//# sourceMappingURL=permit-inspection-create-many-responsible.input.js.map