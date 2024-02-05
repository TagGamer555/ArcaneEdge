{
	// EXAMPLE (replace <> with actual information)
	// const <exampleStructure> = extend(<TYPE>, "<example-structure>", {});
	
	////// ORIGINAL //////
	
	// REGION - TURRETS //
	const starStriker = extend(PowerTurret, "star-striker", {});
	
	
	
	////// CLASSIC PORT //////
	
	// REGION - TURRETS //
	const single = extend(ItemTurret, "single", {});
	const doubleTurret = extend(ItemTurret, "double", {}); //DO NOT USE "double" BECAUSE THIS IS JS!!
	const repeater = extend(ItemTurret, "repeater", {});
	const broadshot = extend(ItemTurret, "broadshot", {});
	const railgun = extend(ItemTurret, "railgun", {});
	const flamer = extend(ItemTurret, "flamer", {});
	const laser = extend(TractorBeamTurret, "laser", {});
	const flakCannon = extend(ItemTurret, "flak-cannon", {});
	
	// REGION - DRILLS //
	const stoneDrill = extend(Drill, "stone-drill", {});
	const ironDrill = extend(Drill, "iron-drill", {});
	const steelDrill = extend(Drill, "steel-drill", {});
	const omnirill = extend(Drill, "omnidrill", {});
	
	// REGION - DISTRIBUTION //
	const stoneConveyor = extend(Conveyor, "stone-conveyor", {});
	const steelConveyor = extend(Conveyor, "steel-conveyor", {});
	const diriumConveyor = extend(Conveyor, "dirium-conveyor", {});
	const stoneRouter = extend(Router, "stone-router", {})
	const stoneJunction = extend(Junction, "stone-junction", {})
	const ironBridgeConveyor = extend(BufferedItemBridge, "iron-bridge-conveyor", {})
	
	// REGION - LIQUIDS //
	const pneumaticPump = extend(Pump, "pneumatic-pump", {});
	const fluxpump = extend(Pump, "fluxpump", {});
	const steelConduit = extend(Conduit, "steel-conduit", {});
	const impulseConduit = extend(Conduit, "impulse-conduit", {});
	const steelRouter = extend(LiquidRouter, "steel-router", {});
	const steelJunction = extend(LiquidJunction, "steel-junction", {});
	
	// REGION - CRAFTING //
	const steelSmelter = extend(GenericCrafter, "steel-smelter", {});
	const diriumCrucible = extend(GenericCrafter, "dirium-crucible", {});
	const solidifier = extend(GenericCrafter, "solidifier", {});
	const coalExtractor = extend(GenericCrafter, "coal-extractor", {});
	const oilSolidifier = extend(GenericCrafter, "oil-solidifier", {});
	const slagSmelter = extend(GenericCrafter, "slag-smelter", {});
	const titaniumExtractor = extend(GenericCrafter, "titanium-extractor", {});
	
	// REGION - POWER //
	const steelNode = extend(BeamNode, "steel-node", {});
	const accumulator = extend(Battery, "accumulator", {});
	const coalGenerator = extend(ConsumeGenerator, "coal-generator", {});
	const oilGenerator = extend(ConsumeGenerator, "oil-generator", {});
	const slagGenerator = extend(ConsumeGenerator, "slag-generator", {});
	const uraniumRtgGenerator = extend(ConsumeGenerator, "uranium-rtg-generator", {});
	const uraniumReactor = extend(NuclearReactor, "uranium-reactor", {});
	
	// REGION - DEFENSE //
	const stoneWallClassic = extend(Wall, "stone-wall-classic", {});
	const ironWall = extend(Wall, "iron-wall", {});
	const steelWall = extend(Wall, "steel-wall", {});
	const steelWallLarge = extend(Wall, "steel-wall-large", {});
	const diriumWall = extend(Wall, "dirium-wall", {});
	const diriumWallLarge = extend(Wall, "dirium-wall-large", {});
}