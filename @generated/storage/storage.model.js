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
exports.Storage = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const storage_member_model_1 = require("../storage-member/storage-member.model");
const container_model_1 = require("../container/container.model");
const storage_count_output_1 = require("./storage-count.output");
let Storage = class Storage {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], Storage.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Storage.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Storage.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Storage.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [storage_member_model_1.StorageMember], { nullable: true }),
    __metadata("design:type", Array)
], Storage.prototype, "members", void 0);
__decorate([
    (0, graphql_1.Field)(() => [container_model_1.Container], { nullable: true }),
    __metadata("design:type", Array)
], Storage.prototype, "containers", void 0);
__decorate([
    (0, graphql_1.Field)(() => storage_count_output_1.StorageCount, { nullable: false }),
    __metadata("design:type", storage_count_output_1.StorageCount)
], Storage.prototype, "_count", void 0);
Storage = __decorate([
    (0, graphql_2.ObjectType)()
], Storage);
exports.Storage = Storage;
//# sourceMappingURL=storage.model.js.map