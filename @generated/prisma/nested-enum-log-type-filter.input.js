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
var NestedEnumLogTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLogTypeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_type_enum_1 = require("./log-type.enum");
let NestedEnumLogTypeFilter = NestedEnumLogTypeFilter_1 = class NestedEnumLogTypeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => log_type_enum_1.LogType, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumLogTypeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_type_enum_1.LogType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumLogTypeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_type_enum_1.LogType], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumLogTypeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumLogTypeFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumLogTypeFilter)
], NestedEnumLogTypeFilter.prototype, "not", void 0);
NestedEnumLogTypeFilter = NestedEnumLogTypeFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumLogTypeFilter);
exports.NestedEnumLogTypeFilter = NestedEnumLogTypeFilter;
//# sourceMappingURL=nested-enum-log-type-filter.input.js.map