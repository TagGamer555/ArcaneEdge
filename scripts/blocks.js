{
	// EXAMPLE (replace <> with actual information)
	// const <exampleStructure> = extend(<TYPE>, "<example-structure>", {});
	
	////// ORIGINAL //////
	
	// REGION - TURRETS //
	const starStriker = extend(PowerTurret, "star-striker", {});
	
	////// CLASSIC PORT //////
	
	// REGION - DRILLS //
	const stoneDrill = extend(Drill, "stone-drill", {});
	const ironDrill = extend(Drill, "iron-drill", {});
	const steelDrill = extend(Drill, "steel-drill", {});
	const omnirill = extend(Drill, "omnidrill", {});
	
	// REGION - DISTRIBUTION //
	const stoneConveyor = extend(Conveyor, "stone-conveyor", {});
	const steelConveyor = extend(Conveyor, "steel-conveyor", {});
	const stoneRouter = extend(Router, "stone-router", {})
	const stoneJunction = extend(Junction, "stone-junction", {})
	const ironBridgeConveyor = extend(ItemBridge, "iron-bridge-conveyor", {})
	
	// REGION - CRAFTING //
	const steelSmelter = extend(GenericCrafter, "steel-smelter", {});
	const diriumCrucible = extend(GenericCrafter, "dirium-crucible", {});
	const solidifier = extend(GenericCrafter, "solidifier", {});
	const coalExtractor = extend(GenericCrafter, "coalExtractor", {});
	const oilSolidifier = extend(GenericCrafter, "oil-solidifier", {});
	const lavaSmelter = extend(GenericCrafter, "lava-smelter", {});
	const titaniumExtractor = extend(GenericCrafter, "titanium-extractor", {});
}