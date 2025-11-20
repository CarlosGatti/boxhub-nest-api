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
exports.DiscartItemCreateManyCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const discart_item_type_enum_1 = require("../prisma/discart-item-type.enum");
const graphql_4 = require("@nestjs/graphql");
const discart_item_condition_enum_1 = require("../prisma/discart-item-condition.enum");
const discart_item_status_enum_1 = require("../prisma/discart-item-status.enum");
const discart_item_createimage_urls_input_1 = require("./discart-item-createimage-urls.input");
const graphql_type_json_1 = require("graphql-type-json");
let DiscartItemCreateManyCreatedByInput = class DiscartItemCreateManyCreatedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], DiscartItemCreateManyCreatedByInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItemCreateManyCreatedByInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItemCreateManyCreatedByInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_type_enum_1.DiscartItemType, { nullable: false }),
    __metadata("design:type", Object)
], DiscartItemCreateManyCreatedByInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    __metadata("design:type", Number)
], DiscartItemCreateManyCreatedByInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItemCreateManyCreatedByInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_condition_enum_1.DiscartItemCondition, { nullable: false }),
    __metadata("design:type", Object)
], DiscartItemCreateManyCreatedByInput.prototype, "condition", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_status_enum_1.DiscartItemStatus, { nullable: true }),
    __metadata("design:type", Object)
], DiscartItemCreateManyCreatedByInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_createimage_urls_input_1.DiscartItemCreateimageUrlsInput, { nullable: true }),
    __metadata("design:type", discart_item_createimage_urls_input_1.DiscartItemCreateimageUrlsInput)
], DiscartItemCreateManyCreatedByInput.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], DiscartItemCreateManyCreatedByInput.prototype, "pickupAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItemCreateManyCreatedByInput.prototype, "contactPhone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DiscartItemCreateManyCreatedByInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DiscartItemCreateManyCreatedByInput.prototype, "updatedAt", void 0);
DiscartItemCreateManyCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], DiscartItemCreateManyCreatedByInput);
exports.DiscartItemCreateManyCreatedByInput = DiscartItemCreateManyCreatedByInput;
//# sourceMappingURL=discart-item-create-many-created-by.input.js.map