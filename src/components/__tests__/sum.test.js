import { sum } from "../sum";


test("sum func", () => {

    const result = sum(3,4);

    expect(result).toBe(7)

});