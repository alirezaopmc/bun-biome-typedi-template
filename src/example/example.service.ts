import { Service } from "typedi";

@Service()
export class ExampleService {
	info() {
		console.log("Bun Biome Typedi Template is here!");
	}
}
