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
exports.ConstructionLogUpsertWithWhereUniqueWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const construction_log_where_unique_input_1 = require("./construction-log-where-unique.input");
const class_transformer_1 = require("class-transformer");
const construction_log_update_without_user_input_1 = require("./construction-log-update-without-user.input");
const construction_log_create_without_user_input_1 = require("./construction-log-create-without-user.input");
let ConstructionLogUpsertWithWhereUniqueWithoutUserInput = class ConstructionLogUpsertWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput),
    __metadata("design:type", Object)
], ConstructionLogUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_update_without_user_input_1.ConstructionLogUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => construction_log_update_without_user_input_1.ConstructionLogUpdateWithoutUserInput),
    __metadata("design:type", construction_log_update_without_user_input_1.ConstructionLogUpdateWithoutUserInput)
], ConstructionLogUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_without_user_input_1.ConstructionLogCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => construction_log_create_without_user_input_1.ConstructionLogCreateWithoutUserInput),
    __metadata("design:type", construction_log_create_without_user_input_1.ConstructionLogCreateWithoutUserInput)
], ConstructionLogUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ConstructionLogUpsertWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogUpsertWithWhereUniqueWithoutUserInput);
exports.ConstructionLogUpsertWithWhereUniqueWithoutUserInput = ConstructionLogUpsertWithWhereUniqueWithoutUserInput;
//# sourceMappingURL=construction-log-upsert-with-where-unique-without-user.input.js.map