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
exports.EnumPermitKindFieldUpdateOperationsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const permit_kind_enum_1 = require("./permit-kind.enum");
let EnumPermitKindFieldUpdateOperationsInput = class EnumPermitKindFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => permit_kind_enum_1.PermitKind, { nullable: true }),
    __metadata("design:type", Object)
], EnumPermitKindFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPermitKindFieldUpdateOperationsInput = __decorate([
    (0, graphql_2.InputType)()
], EnumPermitKindFieldUpdateOperationsInput);
exports.EnumPermitKindFieldUpdateOperationsInput = EnumPermitKindFieldUpdateOperationsInput;
//# sourceMappingURL=enum-permit-kind-field-update-operations.input.js.map