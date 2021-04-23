import { TestScheduler } from "@jest/core"
import {URLChecker} from "../src/client/js/URLChecker"
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
const html = fs.readFileSync('./src/client/views/index.html', 'utf8');

describe("Testing the submit funcionality", () => {

    test("Returns true", () => {
        expect(URLChecker).toBeDefined();

    });

    test('It should be a function', () => {
        expect(typeof URLChecker).toBe('function');
    });

});