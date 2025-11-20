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
exports.ItemUpdateWithWhereUniqueWithoutContainerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const item_where_unique_input_1 = require("./item-where-unique.input");
const class_transformer_1 = require("class-transformer");
const item_update_without_container_input_1 = require("./item-update-without-container.input");
let ItemUpdateWithWhereUniqueWithoutContainerInput = class ItemUpdateWithWhereUniqueWithoutContainerInput {
};
__decorate([
    (0, graphql_1.Field)(() => item_where_unique_input_1.ItemWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => item_where_unique_input_1.ItemWhereUniqueInput),
    __metadata("design:type", Object)
], ItemUpdateWithWhereUniqueWithoutContainerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => item_update_without_container_input_1.ItemUpdateWithoutContainerInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => item_update_without_container_input_1.ItemUpdateWithoutContainerInput),
    __metadata("design:type", item_update_without_container_input_1.ItemUpdateWithoutContainerInput)
], ItemUpdateWithWhereUniqueWithoutContainerInput.prototype, "data", void 0);
ItemUpdateWithWhereUniqueWithoutContainerInput = __decorate([
    (0, graphql_2.InputType)()
], ItemUpdateWithWhereUniqueWithoutContainerInput);
exports.ItemUpdateWithWhereUniqueWithoutContainerInput = ItemUpdateWithWhereUniqueWithoutContainerInput;
//# sourceMappingURL=item-update-with-where-unique-without-container.input.js.map