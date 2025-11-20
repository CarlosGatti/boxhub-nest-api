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
exports.MaterialEntry = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_type_json_1 = require("graphql-type-json");
const user_model_1 = require("../user/user.model");
const project_model_1 = require("../project/project.model");
let MaterialEntry = class MaterialEntry {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", Number)
], MaterialEntry.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false }),
    __metadata("design:type", Number)
], MaterialEntry.prototype, "projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], MaterialEntry.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], MaterialEntry.prototype, "supplier", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_5.Float, { nullable: false }),
    __metadata("design:type", Number)
], MaterialEntry.prototype, "quantity", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntry.prototype, "receivedById", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], MaterialEntry.prototype, "receivedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntry.prototype, "note", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.GraphQLJSON, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntry.prototype, "imageUrls", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], MaterialEntry.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: true }),
    __metadata("design:type", Object)
], MaterialEntry.prototype, "receivedBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_model_1.Project, { nullable: false }),
    __metadata("design:type", project_model_1.Project)
], MaterialEntry.prototype, "project", void 0);
MaterialEntry = __decorate([
    (0, graphql_2.ObjectType)()
], MaterialEntry);
exports.MaterialEntry = MaterialEntry;
//# sourceMappingURL=material-entry.model.js.map