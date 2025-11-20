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
exports.UserUpsertWithoutResponsibleInspectionsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_responsible_inspections_input_1 = require("./user-update-without-responsible-inspections.input");
const class_transformer_1 = require("class-transformer");
const user_create_without_responsible_inspections_input_1 = require("./user-create-without-responsible-inspections.input");
const user_where_input_1 = require("./user-where.input");
let UserUpsertWithoutResponsibleInspectionsInput = class UserUpsertWithoutResponsibleInspectionsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_update_without_responsible_inspections_input_1.UserUpdateWithoutResponsibleInspectionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_update_without_responsible_inspections_input_1.UserUpdateWithoutResponsibleInspectionsInput),
    __metadata("design:type", user_update_without_responsible_inspections_input_1.UserUpdateWithoutResponsibleInspectionsInput)
], UserUpsertWithoutResponsibleInspectionsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_without_responsible_inspections_input_1.UserCreateWithoutResponsibleInspectionsInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => user_create_without_responsible_inspections_input_1.UserCreateWithoutResponsibleInspectionsInput),
    __metadata("design:type", user_create_without_responsible_inspections_input_1.UserCreateWithoutResponsibleInspectionsInput)
], UserUpsertWithoutResponsibleInspectionsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_where_input_1.UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => user_where_input_1.UserWhereInput),
    __metadata("design:type", user_where_input_1.UserWhereInput)
], UserUpsertWithoutResponsibleInspectionsInput.prototype, "where", void 0);
UserUpsertWithoutResponsibleInspectionsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpsertWithoutResponsibleInspectionsInput);
exports.UserUpsertWithoutResponsibleInspectionsInput = UserUpsertWithoutResponsibleInspectionsInput;
//# sourceMappingURL=user-upsert-without-responsible-inspections.input.js.map