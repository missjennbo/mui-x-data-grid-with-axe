import {act, render} from "@testing-library/react";
import {DataGridDemo} from "./DataGridDemo";
import { axe } from "jest-axe";

describe('DataGridDemo', () => {
    it("should not have accessibility errors", async () => {
        const dashboard = await render(<DataGridDemo/>);
        await act(async () => {
            const results = await axe(dashboard.container, {rules: {"aria-required-children": {enabled: false}}});
            expect(results).toHaveNoViolations();
        });
    }, 10000);
});