import { Service } from "typedi";

// Remember to not use `import type` here, as it will not work.
import { ExampleService } from "@/example/example.service";

@Service()
export class AppService {
	constructor(public exampleService: ExampleService) {}

	info() {
		this.exampleService.info();
	}
}
