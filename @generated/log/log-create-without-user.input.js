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
exports.LogCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_action_enum_1 = require("../prisma/log-action.enum");
const graphql_type_json_1 = require("graphql-type-json");
let LogCreateWithoutUserInput = class LogCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_action_enum_1.LogAction, { nullable: false }),
    __metadata("design:type", Object)
], LogCreateWithoutUserInput.prototype, "action", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LogCreateWithoutUserInput.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LogCreateWithoutUserInput.prototype, "route", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], LogCreateWithoutUserInput.prototype, "metadata", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LogCreateWithoutUserInput.prototype, "ipAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LogCreateWithoutUserInput.prototype, "createdAt", void 0);
LogCreateWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogCreateWithoutUserInput);
exports.LogCreateWithoutUserInput = LogCreateWithoutUserInput;
//# sourceMappingURL=log-create-without-user.input.js.map