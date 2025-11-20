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
exports.ItemUpdateManyWithoutContainerNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const item_create_without_container_input_1 = require("./item-create-without-container.input");
const class_transformer_1 = require("class-transformer");
const item_create_or_connect_without_container_input_1 = require("./item-create-or-connect-without-container.input");
const item_upsert_with_where_unique_without_container_input_1 = require("./item-upsert-with-where-unique-without-container.input");
const item_create_many_container_input_envelope_input_1 = require("./item-create-many-container-input-envelope.input");
const item_where_unique_input_1 = require("./item-where-unique.input");
const item_update_with_where_unique_without_container_input_1 = require("./item-update-with-where-unique-without-container.input");
const item_update_many_with_where_without_container_input_1 = require("./item-update-many-with-where-without-container.input");
const item_scalar_where_input_1 = require("./item-scalar-where.input");
let ItemUpdateManyWithoutContainerNestedInput = class ItemUpdateManyWithoutContainerNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [item_create_without_container_input_1.ItemCreateWithoutContainerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_create_without_container_input_1.ItemCreateWithoutContainerInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_create_or_connect_without_container_input_1.ItemCreateOrConnectWithoutContainerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_create_or_connect_without_container_input_1.ItemCreateOrConnectWithoutContainerInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_upsert_with_where_unique_without_container_input_1.ItemUpsertWithWhereUniqueWithoutContainerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_upsert_with_where_unique_without_container_input_1.ItemUpsertWithWhereUniqueWithoutContainerInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_create_many_container_input_envelope_input_1.ItemCreateManyContainerInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => item_create_many_container_input_envelope_input_1.ItemCreateManyContainerInputEnvelope),
    __metadata("design:type", item_create_many_container_input_envelope_input_1.ItemCreateManyContainerInputEnvelope)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_where_unique_input_1.ItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_where_unique_input_1.ItemWhereUniqueInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_where_unique_input_1.ItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_where_unique_input_1.ItemWhereUniqueInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_where_unique_input_1.ItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_where_unique_input_1.ItemWhereUniqueInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_where_unique_input_1.ItemWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_where_unique_input_1.ItemWhereUniqueInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_update_with_where_unique_without_container_input_1.ItemUpdateWithWhereUniqueWithoutContainerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_update_with_where_unique_without_container_input_1.ItemUpdateWithWhereUniqueWithoutContainerInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_update_many_with_where_without_container_input_1.ItemUpdateManyWithWhereWithoutContainerInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_update_many_with_where_without_container_input_1.ItemUpdateManyWithWhereWithoutContainerInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_scalar_where_input_1.ItemScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => item_scalar_where_input_1.ItemScalarWhereInput),
    __metadata("design:type", Array)
], ItemUpdateManyWithoutContainerNestedInput.prototype, "deleteMany", void 0);
ItemUpdateManyWithoutContainerNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ItemUpdateManyWithoutContainerNestedInput);
exports.ItemUpdateManyWithoutContainerNestedInput = ItemUpdateManyWithoutContainerNestedInput;
//# sourceMappingURL=item-update-many-without-container-nested.input.js.map