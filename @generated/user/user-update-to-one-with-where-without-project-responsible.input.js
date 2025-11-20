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
exports.UserUpdateToOneWithWhereWithoutProjectResponsibleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_where_input_1 = require("./user-where.input");
const class_transformer_1 = require("class-transformer");
const user_update_without_project_responsible_input_1 = require("./user-update-without-project-responsible.input");
let UserUpdateToOneWithWhereWithoutProjectResponsibleInput = class UserUpdateToOneWithWhereWithoutProjectResponsibleInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutProjectResponsibleInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_update_without_project_responsible_input_1.UserUpdateWithoutProjectResponsibleInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_without_project_responsible_input_1.UserUpdateWithoutProjectResponsibleInput),
    __metadata("design:type", user_update_without_project_responsible_input_1.UserUpdateWithoutProjectResponsibleInput)
], UserUpdateToOneWithWhereWithoutProjectResponsibleInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutProjectResponsibleInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpdateToOneWithWhereWithoutProjectResponsibleInput);
exports.UserUpdateToOneWithWhereWithoutProjectResponsibleInput = UserUpdateToOneWithWhereWithoutProjectResponsibleInput;
//# sourceMappingURL=user-update-to-one-with-where-without-project-responsible.input.js.map