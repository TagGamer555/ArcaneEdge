{
	//EXAMPLE (replace <> with actual information)
	// const <exampleStructure> = extend(<TYPE>, "<example-structure>", {});
	
	//  REGION - TURRETS  //
	const starStriker = extend(PowerTurret, "star-striker", {});
	
	// REGION - DRILLS //
	const stoneDrill = extend(Drill, "stone-drill", {});
	const ironDrill = extend(Drill, "iron-drill", {});
	
	// REGION - DISTRIBUTION //
	const stoneConveyor = extend(Conveyor, "stone-conveyor", {});
	const steelConveyor = extend(Conveyor, "steel-conveyor", {});
	
	// REGION - CRAFTING //
	const steelSmelter = extend(GenericCrafter, "steel-smelter", {});
	const diriumCrucible = extend(GenericCrafter, "dirium-crucible", {});
	const solidifier = extend(GenericCrafter, "solidifier", {});
	const oilSolidifier = extend(GenericCrafter, "oil-solidifier", {});
	const lavaSmelter = extend(GenericCrafter, "lava-smelter", {});
	const titaniumExtractor = extend(GenericCrafter, "titanium-extractor", {});
}