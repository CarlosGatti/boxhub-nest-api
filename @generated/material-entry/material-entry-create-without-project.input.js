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
exports.MaterialEntryCreateWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_type_json_1 = require("graphql-type-json");
const user_create_nested_one_without_received_materials_input_1 = require("../user/user-create-nested-one-without-received-materials.input");
let MaterialEntryCreateWithoutProjectInput = class MaterialEntryCreateWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], MaterialEntryCreateWithoutProjectInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], MaterialEntryCreateWithoutProjectInput.prototype, "supplier", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: false }),
    __metadata("design:type", Number)
], MaterialEntryCreateWithoutProjectInput.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], MaterialEntryCreateWithoutProjectInput.prototype, "receivedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], MaterialEntryCreateWithoutProjectInput.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntryCreateWithoutProjectInput.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntryCreateWithoutProjectInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_received_materials_input_1.UserCreateNestedOneWithoutReceivedMaterialsInput, { nullable: true }),
    __metadata("design:type", user_create_nested_one_without_received_materials_input_1.UserCreateNestedOneWithoutReceivedMaterialsInput)
], MaterialEntryCreateWithoutProjectInput.prototype, "receivedBy", void 0);
MaterialEntryCreateWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], MaterialEntryCreateWithoutProjectInput);
exports.MaterialEntryCreateWithoutProjectInput = MaterialEntryCreateWithoutProjectInput;
//# sourceMappingURL=material-entry-create-without-project.input.js.map