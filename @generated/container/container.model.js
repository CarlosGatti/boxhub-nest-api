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
exports.Container = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const storage_model_1 = require("../storage/storage.model");
const category_model_1 = require("../category/category.model");
const item_model_1 = require("../item/item.model");
const container_count_output_1 = require("./container-count.output");
let Container = class Container {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Container.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Container.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Container.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Container.prototype, "qrCode", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Container.prototype, "code", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], Container.prototype, "storageId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Container.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Container.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_model_1.Storage, { nullable: false }),
    __metadata("design:type", storage_model_1.Storage)
], Container.prototype, "storage", void 0);
__decorate([
    (0, graphql_1.Field)(() => [category_model_1.Category], { nullable: true }),
    __metadata("design:type", Array)
], Container.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => [item_model_1.Item], { nullable: true }),
    __metadata("design:type", Array)
], Container.prototype, "items", void 0);
__decorate([
    (0, graphql_1.Field)(() => container_count_output_1.ContainerCount, { nullable: false }),
    __metadata("design:type", container_count_output_1.ContainerCount)
], Container.prototype, "_count", void 0);
Container = __decorate([
    (0, graphql_2.ObjectType)()
], Container);
exports.Container = Container;
//# sourceMappingURL=container.model.js.map