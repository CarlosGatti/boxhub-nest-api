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
exports.UpdateOneSubcontractorArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const subcontractor_update_input_1 = require("./subcontractor-update.input");
const class_transformer_1 = require("class-transformer");
const client_1 = require("@prisma/client");
const subcontractor_where_unique_input_1 = require("./subcontractor-where-unique.input");
let UpdateOneSubcontractorArgs = class UpdateOneSubcontractorArgs {
};
__decorate([
    (0, graphql_1.Field)(() => subcontractor_update_input_1.SubcontractorUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => subcontractor_update_input_1.SubcontractorUpdateInput),
    __metadata("design:type", subcontractor_update_input_1.SubcontractorUpdateInput)
], UpdateOneSubcontractorArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => subcontractor_where_unique_input_1.SubcontractorWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => subcontractor_where_unique_input_1.SubcontractorWhereUniqueInput),
    __metadata("design:type", Object)
], UpdateOneSubcontractorArgs.prototype, "where", void 0);
UpdateOneSubcontractorArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneSubcontractorArgs);
exports.UpdateOneSubcontractorArgs = UpdateOneSubcontractorArgs;
//# sourceMappingURL=update-one-subcontractor.args.js.map