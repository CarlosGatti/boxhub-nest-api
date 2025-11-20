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
var NestedEnumPermitKindFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPermitKindFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const permit_kind_enum_1 = require("./permit-kind.enum");
let NestedEnumPermitKindFilter = NestedEnumPermitKindFilter_1 = class NestedEnumPermitKindFilter {
};
__decorate([
    (0, graphql_1.Field)(() => permit_kind_enum_1.PermitKind, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumPermitKindFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_kind_enum_1.PermitKind], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumPermitKindFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [permit_kind_enum_1.PermitKind], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumPermitKindFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumPermitKindFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumPermitKindFilter)
], NestedEnumPermitKindFilter.prototype, "not", void 0);
NestedEnumPermitKindFilter = NestedEnumPermitKindFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumPermitKindFilter);
exports.NestedEnumPermitKindFilter = NestedEnumPermitKindFilter;
//# sourceMappingURL=nested-enum-permit-kind-filter.input.js.map