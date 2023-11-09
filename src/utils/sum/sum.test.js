"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = __importDefault(require("./sum"));
describe('sum', () => {
    it('should sum', () => {
        const result = (0, sum_1.default)(6, 8);
        expect(result).toEqual(14);
    });
});
