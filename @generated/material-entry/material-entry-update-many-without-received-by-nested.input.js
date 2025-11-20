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
exports.MaterialEntryUpdateManyWithoutReceivedByNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const material_entry_create_without_received_by_input_1 = require("./material-entry-create-without-received-by.input");
const class_transformer_1 = require("class-transformer");
const material_entry_create_or_connect_without_received_by_input_1 = require("./material-entry-create-or-connect-without-received-by.input");
const material_entry_upsert_with_where_unique_without_received_by_input_1 = require("./material-entry-upsert-with-where-unique-without-received-by.input");
const material_entry_create_many_received_by_input_envelope_input_1 = require("./material-entry-create-many-received-by-input-envelope.input");
const material_entry_where_unique_input_1 = require("./material-entry-where-unique.input");
const material_entry_update_with_where_unique_without_received_by_input_1 = require("./material-entry-update-with-where-unique-without-received-by.input");
const material_entry_update_many_with_where_without_received_by_input_1 = require("./material-entry-update-many-with-where-without-received-by.input");
const material_entry_scalar_where_input_1 = require("./material-entry-scalar-where.input");
let MaterialEntryUpdateManyWithoutReceivedByNestedInput = class MaterialEntryUpdateManyWithoutReceivedByNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [material_entry_create_without_received_by_input_1.MaterialEntryCreateWithoutReceivedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_create_without_received_by_input_1.MaterialEntryCreateWithoutReceivedByInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_create_or_connect_without_received_by_input_1.MaterialEntryCreateOrConnectWithoutReceivedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_create_or_connect_without_received_by_input_1.MaterialEntryCreateOrConnectWithoutReceivedByInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_upsert_with_where_unique_without_received_by_input_1.MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_upsert_with_where_unique_without_received_by_input_1.MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => material_entry_create_many_received_by_input_envelope_input_1.MaterialEntryCreateManyReceivedByInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_create_many_received_by_input_envelope_input_1.MaterialEntryCreateManyReceivedByInputEnvelope),
    __metadata("design:type", material_entry_create_many_received_by_input_envelope_input_1.MaterialEntryCreateManyReceivedByInputEnvelope)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_where_unique_input_1.MaterialEntryWhereUniqueInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_update_with_where_unique_without_received_by_input_1.MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_update_with_where_unique_without_received_by_input_1.MaterialEntryUpdateWithWhereUniqueWithoutReceivedByInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_update_many_with_where_without_received_by_input_1.MaterialEntryUpdateManyWithWhereWithoutReceivedByInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_update_many_with_where_without_received_by_input_1.MaterialEntryUpdateManyWithWhereWithoutReceivedByInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [material_entry_scalar_where_input_1.MaterialEntryScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => material_entry_scalar_where_input_1.MaterialEntryScalarWhereInput),
    __metadata("design:type", Array)
], MaterialEntryUpdateManyWithoutReceivedByNestedInput.prototype, "deleteMany", void 0);
MaterialEntryUpdateManyWithoutReceivedByNestedInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialEntryUpdateManyWithoutReceivedByNestedInput);
exports.MaterialEntryUpdateManyWithoutReceivedByNestedInput = MaterialEntryUpdateManyWithoutReceivedByNestedInput;
//# sourceMappingURL=material-entry-update-many-without-received-by-nested.input.js.map