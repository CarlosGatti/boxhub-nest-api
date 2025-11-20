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
exports.LogCreateNestedManyWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_create_without_user_input_1 = require("./log-create-without-user.input");
const class_transformer_1 = require("class-transformer");
const log_create_or_connect_without_user_input_1 = require("./log-create-or-connect-without-user.input");
const log_create_many_user_input_envelope_input_1 = require("./log-create-many-user-input-envelope.input");
const log_where_unique_input_1 = require("./log-where-unique.input");
let LogCreateNestedManyWithoutUserInput = class LogCreateNestedManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_create_without_user_input_1.LogCreateWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_create_without_user_input_1.LogCreateWithoutUserInput),
    __metadata("design:type", Array)
], LogCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_create_or_connect_without_user_input_1.LogCreateOrConnectWithoutUserInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_create_or_connect_without_user_input_1.LogCreateOrConnectWithoutUserInput),
    __metadata("design:type", Array)
], LogCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_many_user_input_envelope_input_1.LogCreateManyUserInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => log_create_many_user_input_envelope_input_1.LogCreateManyUserInputEnvelope),
    __metadata("design:type", log_create_many_user_input_envelope_input_1.LogCreateManyUserInputEnvelope)
], LogCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => log_where_unique_input_1.LogWhereUniqueInput),
    __metadata("design:type", Array)
], LogCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
LogCreateNestedManyWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogCreateNestedManyWithoutUserInput);
exports.LogCreateNestedManyWithoutUserInput = LogCreateNestedManyWithoutUserInput;
//# sourceMappingURL=log-create-nested-many-without-user.input.js.map