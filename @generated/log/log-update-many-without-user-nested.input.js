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
exports.LogUpdateManyWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_create_without_user_input_1 = require("./log-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const log_create_or_connect_without_user_input_1 = require("./log-create-or-connect-without-user.input");
const log_upsert_with_where_unique_without_user_input_1 = require("./log-upsert-with-where-unique-without-user.input");
const log_create_many_user_input_envelope_input_1 = require("./log-create-many-user-input-envelope.input");
const log_where_unique_input_1 = require("./log-where-unique.input");
const log_update_with_where_unique_without_user_input_1 = require("./log-update-with-where-unique-without-user.input");
const log_update_many_with_where_without_user_input_1 = require("./log-update-many-with-where-without-user.input");
const log_scalar_where_input_1 = require("./log-scalar-where.input");
let LogUpdateManyWithoutUserNestedInput = class LogUpdateManyWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_create_without_user_input_1.LogCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_create_without_user_input_1.LogCreateWithoutUserInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_create_or_connect_without_user_input_1.LogCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_create_or_connect_without_user_input_1.LogCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_upsert_with_where_unique_without_user_input_1.LogUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_upsert_with_where_unique_without_user_input_1.LogUpsertWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_many_user_input_envelope_input_1.LogCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_create_many_user_input_envelope_input_1.LogCreateManyUserInputEnvelope),
    __metadata("design:type", log_create_many_user_input_envelope_input_1.LogCreateManyUserInputEnvelope)
], LogUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_where_unique_input_1.LogWhereUniqueInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_where_unique_input_1.LogWhereUniqueInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_where_unique_input_1.LogWhereUniqueInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_where_unique_input_1.LogWhereUniqueInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_update_with_where_unique_without_user_input_1.LogUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_update_with_where_unique_without_user_input_1.LogUpdateWithWhereUniqueWithoutUserInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_update_many_with_where_without_user_input_1.LogUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_update_many_with_where_without_user_input_1.LogUpdateManyWithWhereWithoutUserInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_scalar_where_input_1.LogScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_scalar_where_input_1.LogScalarWhereInput),
    __metadata("design:type", Array)
], LogUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
LogUpdateManyWithoutUserNestedInput = __decorate([
    (0, graphql_2.InputType)()
], LogUpdateManyWithoutUserNestedInput);
exports.LogUpdateManyWithoutUserNestedInput = LogUpdateManyWithoutUserNestedInput;
//# sourceMappingURL=log-update-many-without-user-nested.input.js.map