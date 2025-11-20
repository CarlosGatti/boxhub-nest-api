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
var NestedEnumProjectStatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumProjectStatusFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const project_status_enum_1 = require("./project-status.enum");
let NestedEnumProjectStatusFilter = NestedEnumProjectStatusFilter_1 = class NestedEnumProjectStatusFilter {
};
__decorate([
    (0, graphql_1.Field)(() => project_status_enum_1.ProjectStatus, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumProjectStatusFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_status_enum_1.ProjectStatus], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumProjectStatusFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [project_status_enum_1.ProjectStatus], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumProjectStatusFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumProjectStatusFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumProjectStatusFilter)
], NestedEnumProjectStatusFilter.prototype, "not", void 0);
NestedEnumProjectStatusFilter = NestedEnumProjectStatusFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumProjectStatusFilter);
exports.NestedEnumProjectStatusFilter = NestedEnumProjectStatusFilter;
//# sourceMappingURL=nested-enum-project-status-filter.input.js.map