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
var NestedEnumPhotoCategoryFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPhotoCategoryFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const photo_category_enum_1 = require("./photo-category.enum");
let NestedEnumPhotoCategoryFilter = NestedEnumPhotoCategoryFilter_1 = class NestedEnumPhotoCategoryFilter {
};
__decorate([
    (0, graphql_1.Field)(() => photo_category_enum_1.PhotoCategory, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumPhotoCategoryFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [photo_category_enum_1.PhotoCategory], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumPhotoCategoryFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [photo_category_enum_1.PhotoCategory], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumPhotoCategoryFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumPhotoCategoryFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumPhotoCategoryFilter)
], NestedEnumPhotoCategoryFilter.prototype, "not", void 0);
NestedEnumPhotoCategoryFilter = NestedEnumPhotoCategoryFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumPhotoCategoryFilter);
exports.NestedEnumPhotoCategoryFilter = NestedEnumPhotoCategoryFilter;
//# sourceMappingURL=nested-enum-photo-category-filter.input.js.map