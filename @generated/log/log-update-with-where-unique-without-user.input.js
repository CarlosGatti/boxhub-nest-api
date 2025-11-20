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
exports.LogUpdateWithWhereUniqueWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const log_where_unique_input_1 = require("./log-where-unique.input");
const class_transformer_1 = require("class-transformer");
const log_update_without_user_input_1 = require("./log-update-without-user.input");
let LogUpdateWithWhereUniqueWithoutUserInput = class LogUpdateWithWhereUniqueWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_where_unique_input_1.LogWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_where_unique_input_1.LogWhereUniqueInput),
    __metadata("design:type", Object)
], LogUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_update_without_user_input_1.LogUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => log_update_without_user_input_1.LogUpdateWithoutUserInput),
    __metadata("design:type", log_update_without_user_input_1.LogUpdateWithoutUserInput)
], LogUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
LogUpdateWithWhereUniqueWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], LogUpdateWithWhereUniqueWithoutUserInput);
exports.LogUpdateWithWhereUniqueWithoutUserInput = LogUpdateWithWhereUniqueWithoutUserInput;
//# sourceMappingURL=log-update-with-where-unique-without-user.input.js.map