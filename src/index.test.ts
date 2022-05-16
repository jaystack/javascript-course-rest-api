import { Greeter } from "./index";

describe('first test', ()=>{
    it("should mock class B", () => {
        const g = new Greeter('Test');
        const result = g.greet();
        expect(result).toEqual('Hello, Test');
      });
})
