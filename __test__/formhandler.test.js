import { TestScheduler } from "@jest/core"
import {handleSubmit} from "../src/client/js/formHandler"
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
const html = fs.readFileSync('./src/client/views/index.html', 'utf8');

describe("Testing the submit funcionality", () => {

    test("Returns true", () => {
        expect(handleSubmit).toBeDefined();

    });

    test('It should be a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });

});