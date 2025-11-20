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
exports.ConstructionLogListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const construction_log_where_input_1 = require("./construction-log-where.input");
let ConstructionLogListRelationFilter = class ConstructionLogListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => construction_log_where_input_1.ConstructionLogWhereInput, { nullable: true }),
    __metadata("design:type", construction_log_where_input_1.ConstructionLogWhereInput)
], ConstructionLogListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_where_input_1.ConstructionLogWhereInput, { nullable: true }),
    __metadata("design:type", construction_log_where_input_1.ConstructionLogWhereInput)
], ConstructionLogListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_where_input_1.ConstructionLogWhereInput, { nullable: true }),
    __metadata("design:type", construction_log_where_input_1.ConstructionLogWhereInput)
], ConstructionLogListRelationFilter.prototype, "none", void 0);
ConstructionLogListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogListRelationFilter);
exports.ConstructionLogListRelationFilter = ConstructionLogListRelationFilter;
//# sourceMappingURL=construction-log-list-relation-filter.input.js.map