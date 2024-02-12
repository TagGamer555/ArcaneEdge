{
	// EXAMPLE (replace <> with actual information)
	// const <exampleStructure> = extend(<TYPE>, "<example-structure>", {});
	
	////// ORIGINAL //////
	
	// REGION - TURRETS //
	const starStriker = extend(PowerTurret, "star-striker", {});
	
	
	
	////// CLASSIC + //////
	
	// REGION - TURRETS //
	const single = extend(ItemTurret, "single", {});
	const doubleTurret = extend(ItemTurret, "double", {}); //DO NOT USE "double" BECAUSE THIS IS JS!!
	const repeater = extend(ItemTurret, "repeater", {});
	const broadshot = extend(ItemTurret, "broadshot", {});
	const railgun = extend(ItemTurret, "railgun", {});
	const flamer = extend(ItemTurret, "flamer", {});
	const laser = extend(TractorBeamTurret, "laser", {});
	const flakCannon = extend(ItemTurret, "flak-cannon", {});
	const radiator = extend(ItemTurret, "radiator", {});
	const tesla = extend(PowerTurret, "tesla", {});
	
	// REGION - PRODUCTION //
	const stoneDrill = extend(Drill, "stone-drill", {});
	const ironDrill = extend(Drill, "iron-drill", {});
	const steelDrill = extend(Drill, "steel-drill", {});
	const omnirill = extend(Drill, "omnidrill", {});
	const waterPump = extend(SolidPump, "water-pump", {});
	
	// REGION - DISTRIBUTION //
	const stoneConveyor = extend(Conveyor, "stone-conveyor", {});
	const steelConveyor = extend(Conveyor, "steel-conveyor", {});
	const diriumConveyor = extend(Conveyor, "dirium-conveyor", {});
	const stoneRouter = extend(Router, "stone-router", {});
	const stoneJunction = extend(Junction, "stone-junction", {});
	const ironBridgeConveyor = extend(BufferedItemBridge, "iron-bridge-conveyor", {});
	const teleporter = extend(MassDriver, "teleporter", {});
	
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
	const steelFurnace = extend(GenericCrafter, "steel-furnace", {});
	const graphiteCompressor = extend(GenericCrafter, "graphite-compressor", {});
	const silicon-infuser = extend(GenericCrafter, "silicon-infuser", {});
	const sandMelter = extend(GenericCrafter, "sand-melter", {});
	const sandSifter = extend(GenericCrafter, "sand-sifter", {});
	const stoneCrusher = extend(GenericCrafter, "stone-crusher", {});
	const learner = extend(GenericCrafter, "learner", {});
	
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
	
	// REGION - EFFECT //
	const menderTurret = extend(PowerTurret, "mender-turret", {});
	const regenTurret = extend(PowerTurret, "regen-turret", {});
	const extinguisher = extend(LiquidTurret, "extinguisher", {});
}