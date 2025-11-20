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
exports.ContainerCreateManyStorageInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const container_create_many_storage_input_1 = require("./container-create-many-storage.input");
const class_transformer_1 = require("class-transformer");
let ContainerCreateManyStorageInputEnvelope = class ContainerCreateManyStorageInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [container_create_many_storage_input_1.ContainerCreateManyStorageInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => container_create_many_storage_input_1.ContainerCreateManyStorageInput),
    __metadata("design:type", Array)
], ContainerCreateManyStorageInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ContainerCreateManyStorageInputEnvelope.prototype, "skipDuplicates", void 0);
ContainerCreateManyStorageInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], ContainerCreateManyStorageInputEnvelope);
exports.ContainerCreateManyStorageInputEnvelope = ContainerCreateManyStorageInputEnvelope;
//# sourceMappingURL=container-create-many-storage-input-envelope.input.js.map