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
exports.DiscartItem = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const discart_item_type_enum_1 = require("../prisma/discart-item-type.enum");
const graphql_4 = require("@nestjs/graphql");
const discart_item_condition_enum_1 = require("../prisma/discart-item-condition.enum");
const discart_item_status_enum_1 = require("../prisma/discart-item-status.enum");
const graphql_type_json_1 = require("graphql-type-json");
const graphql_5 = require("@nestjs/graphql");
const user_model_1 = require("../user/user.model");
let DiscartItem = class DiscartItem {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], DiscartItem.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItem.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItem.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_type_enum_1.DiscartItemType, { nullable: false }),
    __metadata("design:type", Object)
], DiscartItem.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: true }),
    __metadata("design:type", Object)
], DiscartItem.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItem.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_condition_enum_1.DiscartItemCondition, { nullable: false }),
    __metadata("design:type", Object)
], DiscartItem.prototype, "condition", void 0);
__decorate([
    (0, graphql_1.Field)(() => discart_item_status_enum_1.DiscartItemStatus, { nullable: false, defaultValue: 'ACTIVE' }),
    __metadata("design:type", Object)
], DiscartItem.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], DiscartItem.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], DiscartItem.prototype, "pickupAddress", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], DiscartItem.prototype, "contactPhone", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Int, { nullable: false }),
    __metadata("design:type", Number)
], DiscartItem.prototype, "createdById", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], DiscartItem.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], DiscartItem.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false }),
    __metadata("design:type", user_model_1.User)
], DiscartItem.prototype, "createdBy", void 0);
DiscartItem = __decorate([
    (0, graphql_2.ObjectType)()
], DiscartItem);
exports.DiscartItem = DiscartItem;
//# sourceMappingURL=discart-item.model.js.map