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
exports.EnumDiscartItemTypeFieldUpdateOperationsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const discart_item_type_enum_1 = require("./discart-item-type.enum");
let EnumDiscartItemTypeFieldUpdateOperationsInput = class EnumDiscartItemTypeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => discart_item_type_enum_1.DiscartItemType, { nullable: true }),
    __metadata("design:type", Object)
], EnumDiscartItemTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumDiscartItemTypeFieldUpdateOperationsInput = __decorate([
    (0, graphql_2.InputType)()
], EnumDiscartItemTypeFieldUpdateOperationsInput);
exports.EnumDiscartItemTypeFieldUpdateOperationsInput = EnumDiscartItemTypeFieldUpdateOperationsInput;
//# sourceMappingURL=enum-discart-item-type-field-update-operations.input.js.map