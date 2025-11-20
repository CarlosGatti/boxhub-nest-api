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
exports.DiscartItemUpdateManyWithWhereWithoutCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const discart_item_scalar_where_input_1 = require("./discart-item-scalar-where.input");
const class_transformer_1 = require("class-transformer");
const discart_item_update_many_mutation_input_1 = require("./discart-item-update-many-mutation.input");
let DiscartItemUpdateManyWithWhereWithoutCreatedByInput = class DiscartItemUpdateManyWithWhereWithoutCreatedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => discart_item_scalar_where_input_1.DiscartItemScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => discart_item_scalar_where_input_1.DiscartItemScalarWhereInput),
    __metadata("design:type", discart_item_scalar_where_input_1.DiscartItemScalarWhereInput)
], DiscartItemUpdateManyWithWhereWithoutCreatedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_update_many_mutation_input_1.DiscartItemUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => discart_item_update_many_mutation_input_1.DiscartItemUpdateManyMutationInput),
    __metadata("design:type", discart_item_update_many_mutation_input_1.DiscartItemUpdateManyMutationInput)
], DiscartItemUpdateManyWithWhereWithoutCreatedByInput.prototype, "data", void 0);
DiscartItemUpdateManyWithWhereWithoutCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], DiscartItemUpdateManyWithWhereWithoutCreatedByInput);
exports.DiscartItemUpdateManyWithWhereWithoutCreatedByInput = DiscartItemUpdateManyWithWhereWithoutCreatedByInput;
//# sourceMappingURL=discart-item-update-many-with-where-without-created-by.input.js.map