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
exports.DiscartItemUpdateManyWithoutCreatedByNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const discart_item_create_without_created_by_input_1 = require("./discart-item-create-without-created-by.input");
const class_transformer_1 = require("class-transformer");
const discart_item_create_or_connect_without_created_by_input_1 = require("./discart-item-create-or-connect-without-created-by.input");
const discart_item_upsert_with_where_unique_without_created_by_input_1 = require("./discart-item-upsert-with-where-unique-without-created-by.input");
const discart_item_create_many_created_by_input_envelope_input_1 = require("./discart-item-create-many-created-by-input-envelope.input");
const discart_item_where_unique_input_1 = require("./discart-item-where-unique.input");
const discart_item_update_with_where_unique_without_created_by_input_1 = require("./discart-item-update-with-where-unique-without-created-by.input");
const discart_item_update_many_with_where_without_created_by_input_1 = require("./discart-item-update-many-with-where-without-created-by.input");
const discart_item_scalar_where_input_1 = require("./discart-item-scalar-where.input");
let DiscartItemUpdateManyWithoutCreatedByNestedInput = class DiscartItemUpdateManyWithoutCreatedByNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [discart_item_create_without_created_by_input_1.DiscartItemCreateWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_create_without_created_by_input_1.DiscartItemCreateWithoutCreatedByInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_create_or_connect_without_created_by_input_1.DiscartItemCreateOrConnectWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_create_or_connect_without_created_by_input_1.DiscartItemCreateOrConnectWithoutCreatedByInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_upsert_with_where_unique_without_created_by_input_1.DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_upsert_with_where_unique_without_created_by_input_1.DiscartItemUpsertWithWhereUniqueWithoutCreatedByInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_create_many_created_by_input_envelope_input_1.DiscartItemCreateManyCreatedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_create_many_created_by_input_envelope_input_1.DiscartItemCreateManyCreatedByInputEnvelope),
    __metadata("design:type", discart_item_create_many_created_by_input_envelope_input_1.DiscartItemCreateManyCreatedByInputEnvelope)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_where_unique_input_1.DiscartItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_where_unique_input_1.DiscartItemWhereUniqueInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_where_unique_input_1.DiscartItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_where_unique_input_1.DiscartItemWhereUniqueInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_where_unique_input_1.DiscartItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_where_unique_input_1.DiscartItemWhereUniqueInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_where_unique_input_1.DiscartItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_where_unique_input_1.DiscartItemWhereUniqueInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_update_with_where_unique_without_created_by_input_1.DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_update_with_where_unique_without_created_by_input_1.DiscartItemUpdateWithWhereUniqueWithoutCreatedByInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_update_many_with_where_without_created_by_input_1.DiscartItemUpdateManyWithWhereWithoutCreatedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_update_many_with_where_without_created_by_input_1.DiscartItemUpdateManyWithWhereWithoutCreatedByInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [discart_item_scalar_where_input_1.DiscartItemScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => discart_item_scalar_where_input_1.DiscartItemScalarWhereInput),
    __metadata("design:type", Array)
], DiscartItemUpdateManyWithoutCreatedByNestedInput.prototype, "deleteMany", void 0);
DiscartItemUpdateManyWithoutCreatedByNestedInput = __decorate([
    (0, graphql_2.InputType)()
], DiscartItemUpdateManyWithoutCreatedByNestedInput);
exports.DiscartItemUpdateManyWithoutCreatedByNestedInput = DiscartItemUpdateManyWithoutCreatedByNestedInput;
//# sourceMappingURL=discart-item-update-many-without-created-by-nested.input.js.map