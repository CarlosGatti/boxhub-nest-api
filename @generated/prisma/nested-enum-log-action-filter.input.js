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
var NestedEnumLogActionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLogActionFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_action_enum_1 = require("./log-action.enum");
let NestedEnumLogActionFilter = NestedEnumLogActionFilter_1 = class NestedEnumLogActionFilter {
};
__decorate([
    (0, graphql_1.Field)(() => log_action_enum_1.LogAction, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumLogActionFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_action_enum_1.LogAction], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumLogActionFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_action_enum_1.LogAction], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumLogActionFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumLogActionFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumLogActionFilter)
], NestedEnumLogActionFilter.prototype, "not", void 0);
NestedEnumLogActionFilter = NestedEnumLogActionFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumLogActionFilter);
exports.NestedEnumLogActionFilter = NestedEnumLogActionFilter;
//# sourceMappingURL=nested-enum-log-action-filter.input.js.map