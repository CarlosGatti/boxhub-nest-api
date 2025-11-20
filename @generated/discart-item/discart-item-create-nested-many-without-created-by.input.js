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
exports.DiscartItemCreateNestedManyWithoutCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const discart_item_create_without_created_by_input_1 = require("./discart-item-create-without-created-by.input");
const class_transformer_1 = require("class-transformer");
const discart_item_create_or_connect_without_created_by_input_1 = require("./discart-item-create-or-connect-without-created-by.input");
const discart_item_create_many_created_by_input_envelope_input_1 = require("./discart-item-create-many-created-by-input-envelope.input");
const discart_item_where_unique_input_1 = require("./discart-item-where-unique.input");
let DiscartItemCreateNestedManyWithoutCreatedByInput = class DiscartItemCreateNestedManyWithoutCreatedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => [discart_item_create_without_created_by_input_1.DiscartItemCreateWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_create_without_created_by_input_1.DiscartItemCreateWithoutCreatedByInput),
    __metadata("design:type", Array)
], DiscartItemCreateNestedManyWithoutCreatedByInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_create_or_connect_without_created_by_input_1.DiscartItemCreateOrConnectWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_create_or_connect_without_created_by_input_1.DiscartItemCreateOrConnectWithoutCreatedByInput),
    __metadata("design:type", Array)
], DiscartItemCreateNestedManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_create_many_created_by_input_envelope_input_1.DiscartItemCreateManyCreatedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_create_many_created_by_input_envelope_input_1.DiscartItemCreateManyCreatedByInputEnvelope),
    __metadata("design:type", discart_item_create_many_created_by_input_envelope_input_1.DiscartItemCreateManyCreatedByInputEnvelope)
], DiscartItemCreateNestedManyWithoutCreatedByInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_where_unique_input_1.DiscartItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_where_unique_input_1.DiscartItemWhereUniqueInput),
    __metadata("design:type", Array)
], DiscartItemCreateNestedManyWithoutCreatedByInput.prototype, "connect", void 0);
DiscartItemCreateNestedManyWithoutCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], DiscartItemCreateNestedManyWithoutCreatedByInput);
exports.DiscartItemCreateNestedManyWithoutCreatedByInput = DiscartItemCreateNestedManyWithoutCreatedByInput;
//# sourceMappingURL=discart-item-create-nested-many-without-created-by.input.js.map